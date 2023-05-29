import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BlindApplyForCreditCards = () => {
  const [credit, setCredit] = useState({
    PIN: '',
    CreditCardType: '',
    CreditWantedLimit: ''
  });
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.click();
    }
  };

  const { transcript, resetTranscript } = useSpeechRecognition();

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  const handlePINFocus = () => {
    speak('What would you like your PIN code to be ?');
    
  };
  


  const handleCreditTypeFocus = () => {
    speak('choose a credit card type. Silver,Gold or Platinum');
    
  };

  const handleCreditLimitFocus = () => {
    speak('state the wanted credit card limit');
    
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };

  const handlePINBlur = () => {
    setCredit({ ...credit, PIN: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };


  const handleCreditTypeBlur = () => {
    setCredit({ ...credit, CreditCardType: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handleCreditLimitBlur = () => {
    setCredit({ ...credit, CreditWantedLimit: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  return (
   <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
    <div className="flex  items-center gap-8"> 
    <div className="text-white">
      <form onSubmit={handleFormSubmit} className="text-center">
        <h2 className="text-4xl font-bold mb-8">CreditCard Information</h2>
        <div className="mb-6">
          <label htmlFor="loanType" className="text-2xl text-white">
        PIN:
          </label>
          <input
            type="text"
            id="loanType"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={credit.PIN}
            onFocus={handlePINFocus}
            onBlur={handlePINBlur}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="text-2xl text-white">
            Credit Card Type:
          </label>
          <input
            type="text"
            id="amount"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            name="amount"
            value={credit.CreditCardType}
            onFocus={handleCreditTypeFocus}
            onBlur={handleCreditTypeBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="purpose" className="text-2xl text-white">
            Credit Wanted Limit:
          </label>
          <input
            type="text"
            id="purpose"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="purpose"
            value={credit.CreditWantedLimit}
            onFocus={handleCreditLimitFocus}
            onBlur={handleCreditLimitBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        
      </form>
      <button
         
          className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onFocus={() => speak('Do you want to submit?')}
          onClick={() => speak('Application successful')}
        >
          Submit Application
        </button>
    </div>
   </div>
    </div>
        
   
  );
}

  export default BlindApplyForCreditCards;