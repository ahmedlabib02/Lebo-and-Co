import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import useNavigation from "../hooks/use-navigation";

const PaymentContext = createContext();

function PaymentProvider({children}){
    const {navigate} = useNavigation();
    const [paymentInfo,setPaymentInfo]= useState({amount:0,billtype:'utility'});
    const navigateToPayment =(info)=>{
            setPaymentInfo(info);
            navigate('/payment');
    }

    return <PaymentContext.Provider value={{navigateToPayment,paymentInfo}}>
    {children}
</PaymentContext.Provider>
}

export default PaymentContext;
export  {PaymentProvider};