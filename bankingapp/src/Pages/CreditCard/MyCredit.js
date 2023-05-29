import { useState } from "react";
import CreditCardCard from "./CreditCardCard";
import MenuBar from '../../Components/MenuBar';
import Footer from '../../Components/Footer';
import CreditCardDetails from "./CreditCardDetails";
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from 'react-modal';
function MyCredit() {
  const [selectedCreditCardId, setSelectedCreditCardId] = useState(null);
  const [isOpen,setIsOpen]= useState(false);
  const handleCreditCardClick = (creditCardId) => {
    setSelectedCreditCardId(creditCardId);
  };
  const [cashBack,setCashBack]= useState(8000);
  const creditCards = [
    { id: 1,
     number: "1234 1234 1234 3455",
     remainingCredit: "$1000",
     creditLimit: "$5000",
     expiry:"12/2027",
     name:'Ahmed Labib',
     cvc:'321',
     issuer:'visa',
     branch: "Main Street Branch",
     points:5000,
     
      
   },
   {
     id: 2,
     number: "1234 1234 1234 1234",
     remainingCredit: "$1000",
     creditLimit: "$9000",
     expiry:"04/2026",
     name:'Ahmed Labib',
     cvc:'123',
     issuer : 'maestro',
     branch: "Main Street Branch",
     points:1000,
     
   
     
   },
   
    
   ];

  const selectedCreditCard = creditCards.find((creditCard) => creditCard.id === selectedCreditCardId);

  const calculateTotalPoints = () => {
    const totalPoints = creditCards.reduce((sum, creditCard) => sum + creditCard.points, 0);
    return totalPoints;
  };

  const calculateTotalCashback = () => {
    const totalCashback = creditCards.reduce((sum, creditCard) => sum + (creditCard.points * 0.01), 0);
    return totalCashback;
  };

  const handleClaimCashback = () => {
    setIsOpen(true);
  };
  const closeModal = ()=>{
    setIsOpen(false);
    setCashBack(0);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="ml-32 mr-32 flex-grow  overflow-y-auto mb-64 mt-20">
        {selectedCreditCard ? (
          <CreditCardDetails creditCard={selectedCreditCard} />
        ) : (
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">My Credit Cards</h2>
            <h3 className="text-lg font-semibold mb-12">Select one to view:</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {creditCards.map((creditCard) => (
                <CreditCardCard creditCard={creditCard} handleClick={handleCreditCardClick} />
              ))}
            </div>

            {/* Total points and cashback section */}
            <div className="mt-20">
              <label className="text-lg font-semibold mb-2">Total Points: {calculateTotalPoints()}</label>
              <ProgressBar completed= {`${calculateTotalPoints()}`} maxCompleted="10000" bgColor="#002b59" animateOnRender  className="mb-8"/>
              <label className="text-lg font-semibold">Total Cashback: ${8000}</label>
              <ProgressBar completed={`${cashBack}`}maxCompleted="20000" bgColor="#002b59" animateOnRender showPercentage={false} className="mb-8"/> 

              
              <button
                className="mt-4 bg-blue-950 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                onClick={handleClaimCashback}
              >
                Claim Cashback
              </button>
            </div>
          </div>
        )}
        <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Set Reminder Modal"
        className="modal bg-blue-950"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4  ">Are you sure?</h2>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">The cashback  will be transfered to your main Bank account. Do you still want to proceed?</label>  
          <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg self-start" onClick={closeModal}>
            Confirm
          </button>
        </div>
      </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default MyCredit;
