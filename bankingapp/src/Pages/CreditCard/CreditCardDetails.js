function CreditCardDetails({ creditCard }) {
 
  
    return (
      <div className="text-gray-800 p-4 rounded-lg leading-relaxed">
        <h2 className="text-3xl font-bold mb-4">{creditCard.cardNumber}</h2>
        <p className="text-lg mb-2">Limit: {creditCard.creditLimit}</p>
        <p className="text-lg mb-2">Remaining Credit {creditCard.remainingCredit}</p>
        <p className="text-lg mb-2">Points: {creditCard.points}</p>
        <p className="text-lg mb-2">Issuance Date: {creditCard.issuanceDate}</p>
        <p className="text-lg mb-2">Branch: {creditCard.branch}</p>

      </div>
    );
  }
  
  export default CreditCardDetails;