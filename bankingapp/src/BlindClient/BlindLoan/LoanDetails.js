import { useState,useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const LoanDetails = ({ loan, setFlag }) => {
    const [isOpen, setIsOpen] = useState(false); 
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [paymentMethod, setPaymentMethod] = useState("");
     const [confirmationMessage, setConfirmationMessage] = useState("");

    const speak = (text) => {
        if ("speechSynthesis" in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
        }
      };
      
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
  const handlePay = ()=>{

    setIsOpen(true);
  }
  const handleSubmit =()=>{
    speak('payment is set successful')
    setFlag(false);
  };


    
    return (<div className="bg-black">
            <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Loan Details</h2>
        <p className="text-2xl">Loan Type: {loan.type}</p>
        <p className="text-2xl">Loan Amount: ${loan.amount}</p>
        <p className="text-2xl">Due Date: {loan.dueDate}</p>
        <p className="text-2xl">Interest Rate: {loan.interestRate}</p>
        <p className="text-2xl">Repayment Term: {loan.term}</p>
        <p className="text-2xl">Remaining Balance: {loan.remainingBalance}</p>
      </div>
      <button className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 mr-12 focus:ring-blue-500 mt-12" onClick={handlePay} onFocus={()=>speak('Your are on the pay button')}>
            Pay installment
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
      
    );
  };
  export default LoanDetails;