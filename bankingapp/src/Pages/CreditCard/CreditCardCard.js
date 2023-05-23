function CreditCardCard({ creditCard , onCreditCardClick }) {
    
  return (
        <div
          className="bg-blue-950 text-white rounded-lg p-4 cursor-pointer hover:bg-gray-700"
          onClick={() => onCreditCardClick(creditCard.id)}
        >
          <h3 className="text-lg font-bold mb-2">Credit Card Number: {creditCard.accNumber}</h3>
          <p className="text-gray-200">Limit: {creditCard.limit}</p>
          
        </div>
      );
  }

  export default CreditCardCard;