function MyCredit() {
    const creditCardInfo = {
      cardNumber: "**** **** **** 1234",
      balance: "$1000",
      creditLimit: "$5000",
      // Add more credit card information fields as needed
    };
  
    return (
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Credit Card Information</h2>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Card Number:</span> {creditCardInfo.cardNumber}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Balance:</span> {creditCardInfo.balance}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Credit Limit:</span> {creditCardInfo.creditLimit}
          </p>
          {/* Display additional credit card information fields */}
        </div>
      </div>
    );
  }
  
  export default MyCredit;