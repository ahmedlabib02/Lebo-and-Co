import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { MdNavigateBefore, MdNavigateNext, MdDone } from "react-icons/md";
import { FaFileAlt, FaUser} from "react-icons/fa";
import CreditCardMethod from "./CreditCardMethod";
import TransferMethod from "./TransferMethod";
import OTPandConfirmation from "./OTPandConfirmation";
import { AiOutlineSend } from "react-icons/ai";
import Modal from 'react-modal';


function PaymentForm({paymentInfo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    paymentMethod: "",holderName:"",cardNumber:"",cvv:"",expiryMonth:"", expiryYear:"",otp:""
  });
  var Method = (formData.paymentMethod==='account-transfer')?('Account Transfer Details'):('Credit Card Information');
  const FormTitles = ["Payment method",Method, "Confirmation"];
  const FormIcons = [<FaFileAlt />, <AiOutlineSend/>, <FaUser />];

  const isValidForm = () => {
    if(page===1 && formData.paymentMethod==='credit-card'){
      return formData.holderName!==""&&formData.cardNumber!==""&&formData.cvv!=="" && formData.expirydate!=="";
    }
    else if(page===1 && formData.paymentMethod==='account-transfer'){
      return true;
    }
    else if(page===2){
      return formData.otp.length===6;
    }
    return true; 
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  

  const handleNextClick = () => {
        if(page!==2)  
        setPage((currPage) => currPage + 1);
        else
        setIsModalOpen(true);
  };

  const handlePrevClick = () => {

    if (formData.paymentMethod === "credit-card" && page === 1 ) {
      setFormData({
        ...formData,
        holderName: "",
        cardNumber: "",
        cvv: "",
        expiryMonth: "" , 
        expiryYear:""
      });
     
    } 
    else if(page===2){
        setFormData({
          ...formData,otp:""
        })
    }
    
    setPage((currPage) => currPage - 1);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <PaymentMethod setPage={setPage} paymentInfo={paymentInfo} 
      formData={formData} setFormData={setFormData} />;}
    else if(page===1 && formData.paymentMethod==='credit-card'){
      return <CreditCardMethod amount={paymentInfo.amount} formData={formData} setFormData={setFormData}/> 
    }  
    else if (page ===1 && formData.paymentMethod==='account-transfer'){
      return <TransferMethod amount={paymentInfo.amount} type={paymentInfo.billtype} formData={formData} setFormData={setFormData}/>
    } 
    else if(page===2){
      return <OTPandConfirmation formData={formData} setFormData={setFormData}/>
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
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Set Reminder Modal"
  className="modal"
  overlayClassName="modal-overlay"
>
        <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">By clicking 'Confirm Payment,' you agree to the terms and conditions of the purchase. Thank you for choosing our services!"</label>
         
          <button
            className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg self-start"
            onClick={closeModal}
          >
            Confirm Payment
          </button>
        </div>
      </Modal>
    </div>
  );
  
}

export default PaymentForm;
