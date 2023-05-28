import { useState } from "react";
import CreditCardCard from "./CreditCardCard";
import MenuBar from '../../Components/MenuBar';
import Footer from '../../Components/Footer';
import CreditCardDetails from "./CreditCardDetails";

function MyCredit() {
  const [selectedCreditCardId, setSelectedCreditCardId] = useState(null);
  const handleCreditCardClick = (CreditCardId) => {
    setSelectedCreditCardId(CreditCardId);
    console.log(selectedCreditCard);
  };
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

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="ml-32 mr-32 flex-grow  overflow-y-auto mb-64 mt-20">
        {selectedCreditCard ? (
          <CreditCardDetails creditCard={selectedCreditCard} />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">My Credit Cards</h2>
            <h3 className="text-lg font-semibold mb-12">Select one to view:</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {creditCards.map((creditCard) => (
                <CreditCardCard creditCard={creditCard} handleClick={handleCreditCardClick} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}



export default MyCredit;
