import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const LoanApplicationForm = ({setFlag}) => {
  const [loan, setLoan] = useState({
    loanType: '',
    amount: '',
    purpose: ''
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

  const handleLoanTypeFocus = () => {
    speak('DO you want car or personal loan ?');
    
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

  const handleLoanTypeBlur = () => {
    setLoan({ ...loan, loanType: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };


  const handleAmountBlur = () => {
    setLoan({ ...loan, amount: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handlePurposeBlur = () => {
    setLoan({ ...loan, purpose: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handleSubmit = ()=>{
   speak('Application successful');
   setFlag(false);
  }


  

  return (
    <div className="text-black">
      <form onSubmit={handleFormSubmit} className="text-center">
        <h2 className="text-4xl font-bold mb-8">Loan Application Form</h2>
        <div className="mb-6">
          <label htmlFor="loanType" className="text-2xl text-white">
            Loan Type:
          </label>
          <input
            type="text"
            id="loanType"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={loan.loanType}
            onFocus={handleLoanTypeFocus}
            onBlur={handleLoanTypeBlur}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="text-2xl text-white">
            Loan Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            name="amount"
            value={loan.amount}
            onFocus={handleAmountFocus}
            onBlur={handleAmountBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="purpose" className="text-2xl text-white">
            Purpose of Loan:
          </label>
          <input
            type="text"
            id="purpose"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="purpose"
            value={loan.purpose}
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
          onClick={handleSubmit}
        >
          Submit Application
        </button>
    </div>
  );
  
};

export default LoanApplicationForm;
