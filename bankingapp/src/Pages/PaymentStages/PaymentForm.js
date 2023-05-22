import { useContext, useState } from "react";
import PaymentContext from "../../Context/paymentContext";
import ButtonCard from "../../Components/ButtonCard";
import PaymentMethod from "./PaymentMethod";
import { MdNavigateBefore, MdNavigateNext, MdDone } from "react-icons/md";
import { FaFileAlt, FaCar, FaUser } from "react-icons/fa";


function PaymentForm({paymentInfo}) {
  //const { paymentInfo } = useContext(PaymentContext);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (selectedMethod) => {
    setPaymentMethod(selectedMethod);
  };

  const handleNextStage = () => {
    // Perform any necessary validation or actions before proceeding to the next stage
    // You can update the payment context or perform other logic here if needed
    // For simplicity, this example just logs the chosen payment method
    console.log("Chosen payment method:", paymentMethod);
    // Navigate to the next stage or perform any other actions
  };

  const isUtilityBill = paymentInfo.typeofbill === "utility";
  const isCreditCardOrLoanBill = paymentInfo.typeofbill === "credit card" || paymentInfo.typeofbill === "loan";




  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    paymentMethod: ""
  });

  const FormTitles = ["Payment method", "Loan Information", "Your Documents"];
  const FormIcons = [<FaFileAlt />, <FaCar />, <FaUser />];

  const isValidForm = () => {
    
    if (page === 1) {
      if (formData.loanType === "Car") {
        return (
          formData.carModel !== "" &&
          formData.carMake !== "" &&
          formData.loanAmount !== ""
        );
      } else if (formData.loanType === "Personal") {
        return formData.purpose !== "" && formData.loanAmount !== "";
      }
    } else if (page === 2) {
      return formData.documents.length > 0 && formData.agreeTerms;
    }
    return true; // No validation for other pages
  };
  
  
  

  const handleNextClick = () => {
    if (isValidForm()) {
      if (page === 2) {
        
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const handlePrevClick = () => {
    if (page === 1 && formData.loanType === "Car") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        carModel: "",
        carMake: "",
        purpose: "",
        loanAmount: ""
      }));
    } else if (page === 1 && formData.loanType === "Personal") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        purpose: "",
        loanAmount: ""
      }));
    }
    console.log(formData.documents.length);
    setPage((currPage) => currPage - 1);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <PaymentMethod setPage={setPage} paymentInfo={paymentInfo} setPaymentMethod={setPaymentMethod
      } />
    } 
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        {FormTitles.map((title, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`h-8 w-8 flex items-center justify-center rounded-full ${
                page === index ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {FormIcons[index]}
            </div>
            {index !== FormTitles.length - 1 && <div className="h-px bg-gray-300 w-12 mx-2"></div>}
            <span className={`${page === index ? "font-bold" : ""}`}>{title}</span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{FormTitles[page]}</h1>
          <div className="">{PageDisplay()}</div>
        </div>
        {page !== 0 && (
          <div className="flex justify-between">
            <button
              disabled={page === 0}
              onClick={handlePrevClick}
              className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-600"
            >
              <MdNavigateBefore className="mr-2" />
              Prev
            </button>
            <button
              onClick={handleNextClick}
              className={`flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold ${
                isValidForm() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isValidForm()}
            >
              {page === FormTitles.length - 1 ? (
                <>
                  Submit <MdDone className="ml-2" />
                </>
              ) : (
                <>
                  Next <MdNavigateNext className="ml-2" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default PaymentForm;
