import ButtonCard from "../../Components/ButtonCard";
import { FaCreditCard, FaMoneyBillAlt, FaBuilding, FaHandHoldingUsd,FaExchangeAlt } from "react-icons/fa";

function PaymentMethod({paymentInfo,paymentMethod,setPaymentMethod,setPage}){
    const isUtilityBill = paymentInfo.typeofbill === "utility";
    const isCreditCardOrLoanBill = paymentInfo.typeofbill === "credit card" || paymentInfo.typeofbill === "loan";
    const handlePaymentMethodClick = (method)=>{
        setPaymentMethod(method);
        setPage(1);
    }
return (<div>
    <h2>Payment</h2>
    <div>Payment Info:</div>
    <div>Amount: {paymentInfo.amount}</div>
    <div>Type of Bill: {paymentInfo.typeofbill}</div>

    <h3>Select Payment Method:</h3>
    <div className="flex space-x-8">
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
          <ButtonCard
            title="Third-Party Application"
            icon={FaBuilding}
            onClick={() => handlePaymentMethodClick("third-party")}
            
          />
        </>
      )}

      {isCreditCardOrLoanBill && (
        <>
          <ButtonCard
            title="Account Transfer"
            icon={FaExchangeAlt}
            onClick={() => handlePaymentMethodClick("account-transfer")}
            homepage={paymentMethod === "account-transfer"}
          />
        </>
      )}
    </div>

  </div>)
}

export default PaymentMethod;