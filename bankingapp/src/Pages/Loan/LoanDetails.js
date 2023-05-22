function LoanDetails({ loan }) {
  const handlePayInstallment = () => {
    // Logic to handle paying installment
  };

  return (
    <div className="text-gray-800 p-4 rounded-lg leading-relaxed">
      <h2 className="text-3xl font-bold mb-4">{loan.type}</h2>
      <p className="text-lg mb-2">Amount: {loan.amount}</p>
      <p className="text-lg mb-2">Due Date: {loan.dueDate}</p>
      <p className="text-lg mb-2">Interest Rate: {loan.interestRate}</p>
      <p className="text-lg mb-2">Term: {loan.term}</p>
      <p className="text-lg mb-2">Remaining Balance: {loan.remainingBalance}</p>
      <button
        className="bg-blue-950 text-white text-lg px-4 py-2 mt-4 rounded-lg"
        onClick= {handlePayInstallment}
      >
        Pay Installment
      </button>
    </div>
  );
}

export default LoanDetails;