import React from 'react';
import { useState,useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const BlindCardTwo = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  
  const [isOpen,setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  const handlePay = ()=>{
    setIsOpen(true);
  }

  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.click();
    }
  };

  const handleMethodFocus = () => {
    speak(' How do you want to pay?');
    
  };
  


  const handleMessageFocus = () => {
    speak(' reply back with the message you received');
    
  };

  const handleMethodBlur = () => {
    setPaymentMethod( transcript );
    resetTranscript();
    SpeechRecognition.stopListening();
  };


  const handleMessageBlur = () => {
    setConfirmationMessage(transcript );
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handleSubmit =()=>{
    speak('payment is set successful')
    setIsOpen(false);
  };

   
    


   

  // Function to speak the text when component renders
  React.useEffect(() => {
    speak('Credit Card 2. Full Name: Ahmed Labib. Card Number: 1234 1234 1234 1234. Expiration Date: 04/2026. CVC: 123. Credit Limit: $9000. Remaining Credit: $1000.');
  }, []);

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8 ">
        <div>
          <h2 className="text-5xl font-bold mb-4">CreditCard 2</h2>
          <p className="text-lg mb-2">Full Name: Ahmed Labib</p>
          <p className="text-lg mb-2">Card Number: 1234 1234 1234 1234</p>
          <p className="text-lg mb-2">Expiration Date: 04/2026</p>
          <p className="text-lg mb-2">CVC: 123</p>
          <p className="text-lg mb-2">Credit Limit: $9000</p>
          <p className="text-lg mb-2">Remaining Credit: $1000</p>
        </div>
        <button className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 mr-12 focus:ring-blue-500 mt-12" onClick={handlePay} onFocus={()=>speak('Your are on the pay button')}>
            Pay bill
          </button>
          {isOpen && (<div className="mt-12 ">
        <form  className="flex flex-col">
          <label htmlFor="paymentMethod" className="text-2xl text-white ">Payment Method:</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            required
            className="text-black"
            onFocus={handleMethodFocus}
            onBlur={handleMethodBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
          
          <label htmlFor="confirmationMessage" className="text-2xl text-white">Confirmation Message:</label>
          <input
            type="text"
            id="confirmationMessage"
            name="confirmationMessage"
            value={confirmationMessage}
            className="text-black"
            required
            onFocus={handleMessageFocus}
            onBlur={handleMessageBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </form>
        <button type="submit" onFocus={() => speak('press enter to confirm your payment?')}
          onClick={handleSubmit} className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-12">
            Submit</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default BlindCardTwo;