import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BlindTransfers = ({setFlag}) => {
  const [transfer, setTransfer] = useState({
    type: '',
    accountName: '',
    amount: ''
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

  const handleTransferTypeFocus = () => {
    speak('DO you want internal or domestic or international loan ?');
    
  };
  


  const handleAmountFocus = () => {
    speak('choose the amount you want ?');
    
  };

  const handleAccountNameFocus = () => {
    speak('state the owner name of the account');
    
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleTransferTypeBlur = () => {
    setTransfer({ ...transfer, type: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };


  const handleAmountBlur = () => {
    setTransfer({ ...transfer, amount: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

  const handleAccountNameBlur = () => {
    setTransfer({ ...transfer, accountName: transcript });
    resetTranscript();
    SpeechRecognition.stopListening();
  };

 const handleSubmit = ()=>{
  speak('Transfer successful');
  setFlag(false);
 }
  

  return (
    <div className="text-black">
      <form onSubmit={handleFormSubmit} className="text-center">
        <h2 className="text-4xl font-bold mb-8">Transfer Form</h2>
        <div className="mb-6">
          <label htmlFor="loanType" className="text-2xl text-white">
            Transfer Type:
          </label>
          <input
            type="text"
            id="type"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={transfer.type}
            onFocus={handleTransferTypeFocus}
            onBlur={handleTransferTypeBlur}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="purpose" className="text-2xl text-white">
            Purpose of Loan:
          </label>
          <input
            type="text"
            id="accountName"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="accountName"
            value={transfer.accountName}
            onFocus={handleAccountNameFocus}
            onBlur={handleAccountNameBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="text-2xl text-white">
            Transfer Amount:
          </label>
          <input
            type="text"
            id="amount"
            className="text-black text-2xl px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
            name="amount"
            value={transfer.amount}
            onFocus={handleAmountFocus}
            onBlur={handleAmountBlur}
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
          Submit Transfer
        </button>
    </div>
  );
  
};

export default BlindTransfers;


