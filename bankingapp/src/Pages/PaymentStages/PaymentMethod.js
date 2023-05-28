import ButtonCard from "../../Components/ButtonCard";
import { FaCreditCard,  FaExchangeAlt } from "react-icons/fa";

function PaymentMethod({paymentInfo,formData,setFormData,setPage}){
    const isUtilityBill = paymentInfo.billtype === "Utility";
    const isCreditCardOrLoanBill = paymentInfo.billtype === "Credit card" || paymentInfo.billtype === "Loan";
    const handlePaymentMethodClick = (method)=>{
        setFormData({...formData, paymentMethod:method});
        setPage(1);
    }
    return (
      <div>
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          <div className="text-3xl font-bold mb-4">Payment Info:</div>
          <div className="mb-1">Amount: {paymentInfo.amount}</div>
          <div className="mb-1">Type of Bill: {paymentInfo.billtype}</div>
        </div>
  
        <h3 className="text-2xl font-bold mb-8">Select Payment Method:</h3>
        <div className="flex justify-center space-x-8">
          {isUtilityBill && (
            <>
              <ButtonCard
                title="Credit Card"
                icon={FaCreditCard}
                onClick={() => handlePaymentMethodClick("credit-card")}
              />
              <ButtonCard
                title="Account Transfer"
                icon={FaExchangeAlt}
                onClick={() => handlePaymentMethodClick("account-transfer")}
              />
            </>
          )}
  
          {isCreditCardOrLoanBill && (
            <>
              <ButtonCard
                title="Account Transfer"
                icon={FaExchangeAlt}
                onClick={() => handlePaymentMethodClick("account-transfer")}
              />
            </>
          )}
        </div>
      </div>
    );
}

export default PaymentMethod;