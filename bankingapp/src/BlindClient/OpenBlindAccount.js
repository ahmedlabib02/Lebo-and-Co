import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const OpenBlindAccount = () => {
  const [account, setLoan] = useState({
    purpose: '',
    depositAmount:'' ,
    
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

  


  const handleAmountFocus = () => {
    speak('choose the amount you want ?');
    
  };

  const handlePurposeFocus = () => {
    speak('state the purpose of the loan');
    
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };




  const handleAmountBlur = () => {
    setLoan({ ...account, purpose: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handlePurposeBlur = () => {
    setLoan({ ...account, depositAmount: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };


  

  return (
    <div className="text-black">
      <form onSubmit={handleFormSubmit} className="text-center">
        <h2 className="text-4xl font-bold mb-8">Account Application Form</h2>
        <div className="mb-6">
          <label htmlFor="loanType" className="text-2xl text-white">
            Account requirments
          </label>
          
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="text-2xl text-white">
            deposit Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            name="amount"
            value={account.depositAmount}
            onFocus={handleAmountFocus}
            onBlur={handleAmountBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="purpose" className="text-2xl text-white">
            Purpose Of Opening The Account:
          </label>
          <input
            type="text"
            id="purpose"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="purpose"
            value={account.purpose}
            onFocus={handlePurposeFocus}
            onBlur={handlePurposeBlur}
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
  );
  
};

export default OpenBlindAccount;
