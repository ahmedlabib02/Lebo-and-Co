import { createContext,useState } from "react";

const PaymentContext = createContext();

function PaymentProvider({children}){
    
    const [paymentInfo,setPaymentInfo]= useState({amount:0,billtype:'utility'});
    
    

    return <PaymentContext.Provider value={{setPaymentInfo,paymentInfo}}>
    {children}
</PaymentContext.Provider>
}

export default PaymentContext;
export  {PaymentProvider};