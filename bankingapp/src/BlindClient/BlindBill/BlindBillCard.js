import { useState,useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function BlindBillCard({ bill }) {
  const [showButtons, setShowButtons] = useState(false);
  const [payFormOpen, setPayFormOpen] = useState(false);
  const [reminderFormOpen, setReminderFormOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  const paragraph = `Your ${bill.type} bill info is as follows: The bill ID is ${bill.id}, the amount is ${bill.amount}, and the due date is ${bill.dueDate}. Press tab to pay the bill or set a reminder for paying it.`;
  const { transcript, resetTranscript } = useSpeechRecognition();

  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      inputRef.current.click();
    }
  };

  const handleBillClick = () => {
    setShowButtons(true);
    speak(paragraph);
  };

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleBillClick();
    }
  };

  const handlePay = () => {
    setReminderFormOpen(false);
    setPayFormOpen(true);
  };

  const handleReminder = () => {
    setReminderFormOpen(true);
    setPayFormOpen(false);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmationMessageChange = (event) => {
    setConfirmationMessage(event.target.value);
  };

  const handleReminderDateChange = (event) => {
    setReminderDate(event.target.value);
  };

  const handleFocus = () => {
    setSelected(true);
    speak(`You are on bill ${bill.id}`);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  const handlePayFormSubmit = (event) => {
    event.preventDefault();
    // Perform payment submission or other actions here
    console.log("Payment submitted!");
  };

  const handleReminderFormSubmit = (event) => {
    event.preventDefault();
    // Perform reminder submission or other actions here
    console.log("Reminder set!");
  };


  const handleMethodFocus = () => {
    speak(' How do you want to pay?');
    
  };
  


  const handleMessageFocus = () => {
    speak(' reply back with the message you received');
    
  };

  const handleDateFocus = () => {
    speak('set a date for the reminder');
    
    
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

  const handleDateBlur = () => {
    setReminderDate(transcript );
    resetTranscript();
    SpeechRecognition.stopListening();
  };




  return (
    <div>

    
    <div
      className={`text-white `}
      onClick={handleBillClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex="0"
    >
      <h2 className="text-4xl font-bold mb-8">Bill Details</h2>
      <p className="text-2xl">Bill ID: {bill.id}</p>
      <p className="text-2xl">Bill Name: ${bill.name}</p>
      <p className="text-2xl">Bill Type: ${bill.type}</p>
      <p className="text-2xl">Due Date: {bill.dueDate}</p>
      <p className="text-2xl">Bill Amount: {bill.amount}</p>
      </div>
      {showButtons && (
        <>
          {(reminderFormOpen)||<button className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 mr-12 focus:ring-blue-500" onClick={handlePay} onFocus={()=>speak('Your are on the pay button')}>
            Pay bills
          </button>}
          {(payFormOpen)||<button className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 mr-12 focus:ring-blue-500" onClick={handleReminder} onFocus={()=>speak('Your are on the set reminder button')}>
            Set Reminders
          </button>}
        </>
      )}

      {payFormOpen && (<div className="mt-12 ">
        <form onSubmit={handlePayFormSubmit} className="flex flex-col">
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
          onClick={() => speak('payment is set successful')} className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-12">
            Submit</button>
        </div>
      )}

      {reminderFormOpen && (<div className="mt-12">
        <form onSubmit={handleReminderFormSubmit}>
          <label htmlFor="reminderDate" className="text-2xl text-white">Reminder Date:</label>
          <input
            type="text"
            id="reminderDate"
            name="reminderDate"
            value={reminderDate}
            required
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
            ref={inputRef}
            onKeyPress={handleKeyPress}
            onClick={() => SpeechRecognition.startListening()}
          />
        </form>
        <button type="submit"onFocus={() => speak('do you confirm?')}  className="text-3xl bg-blue-500 text-white px-8 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => speak('reminder is set successfuly')}  >Submit</button>
        </div>
      )}
    </div>
  );
}

export default BlindBillCard;
