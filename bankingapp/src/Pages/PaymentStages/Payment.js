import { useContext, useState } from "react";
import PaymentContext from "../../Context/paymentContext";
import PaymentForm from "./PaymentForm";
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";

function Payment(){
 //const { paymentInfo } = useContext(PaymentContext);
const paymentInfo = {amount:1000, typeofbill: 'utility'}
 return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="flex-grow overflow-y-auto mb-20">
        <div className="container mx-auto p-8 ">
          <div className="max-w-xl mx-auto">
            <PaymentForm paymentInfo={paymentInfo}  />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Payment;