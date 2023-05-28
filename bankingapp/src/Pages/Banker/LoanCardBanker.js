function LoanCardBanker({ loan, onLoanClick }) {
    return (
        <div
          className="bg-blue-950 text-white rounded-lg p-4 cursor-pointer hover:bg-gray-700"
          onClick={() => onLoanClick(loan.id)}
        >
          <h3 className="text-lg font-bold mb-2">{loan.type}</h3>
          <p className="text-gray-200">Amount: {loan.amount}</p>
          <p className="text-gray-200">File: {loan.Files}</p>
        </div>
      );
  }

  export default LoanCardBanker;