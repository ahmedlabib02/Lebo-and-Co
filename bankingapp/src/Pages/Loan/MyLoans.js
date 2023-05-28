import { useState } from "react";
import LoanCard from "./LoanCard";
import MenuBar from '../../Components/MenuBar';
import Footer from '../../Components/Footer';
import LoanDetails from "./LoanDetails";

function MyLoans() {
  const [selectedLoanId, setSelectedLoanId] = useState(null);

  // Dummy data for loans
  const loans = [
   { id: 1,
    type: "Car Loan",
    amount: "$25,000",
    dueDate: "May 31, 2023",
    interestRate: "5%",
    term: "60 months",
    remainingBalance: "$18,500",
    // Add more details about the loan
  },
  {
    id: 2,
    type: "Personal Loan",
    amount: "$200,000",
    dueDate: "June 15, 2024",
    interestRate: "8%",
    term: "36 months",
    remainingBalance: "$150,000",
    // Add more details about the loan
  },
  {
    id: 3,
    type: "Personal Loan",
    amount: "$10,000",
    dueDate: "April 20, 2023",
    interestRate: "7.5%",
    term: "24 months",
    remainingBalance: "$5,000",
    // Add more details about the loan
  }
  ];

  const handleLoanClick = (loanId) => {
    setSelectedLoanId(loanId);
  };

  const selectedLoan = loans.find((loan) => loan.id === selectedLoanId);

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="ml-32 mr-32 flex-grow  overflow-y-auto mb-64 mt-20">
        {selectedLoan ? (
          <LoanDetails loan={selectedLoan} />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">My Loans</h2>
            <h3 className="text-lg font-semibold mb-2">Select one to view:</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loans.map((loan) => (
                <LoanCard key={loan.id} loan={loan} onLoanClick={handleLoanClick} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyLoans;
