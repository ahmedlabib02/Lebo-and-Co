import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import LoanApplication from './LoanApplicationForm'

const BlindLoans = () => {
  const [flag, setFlag] = useState(null);

  const handleViewLoan = () => {
    speak('Viewing my loan');
    setFlag('view');
    speak(paragraph)
  };

  const handleApplyLoan = () => {
    speak('What type of loan do you want?');
    setFlag('apply');
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const loanDetails = { id: 1,
    type: "Car Loan",
    amount: 25000,
    dueDate: "May 31, 2023",
    interestRate: "5%",
    term: "60 months",
    remainingBalance: "$18,500",
  };
  const LoanDetails = ({ loan }) => {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Loan Details</h2>
        <p className="text-2xl">Loan Type: {loan.type}</p>
        <p className="text-2xl">Loan Amount: ${loan.amount}</p>
        <p className="text-2xl">Due Date: {loan.dueDate}</p>
        <p className="text-2xl">Interest Rate: {loan.interestRate}</p>
        <p className="text-2xl">Repayment Term: {loan.term}</p>
        <p className="text-2xl">Remaining Balance: {loan.remainingBalance}</p>
      </div>
    );
  };
  
  const paragraph = `Your loan ID is ${loanDetails.id}, the amount is ${loanDetails.amount}, the type is ${loanDetails.type}, 
  the duedate is ${loanDetails.dueDate}, the interest rate is ${loanDetails.interestRate}, the term is ${loanDetails.term} and the remaining balance is ${loanDetails.remainingBalance} `

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-12">Loans</h1>
      <div className="flex flex-col items-center space-y-8">
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleViewLoan}
          onFocus={() => speak('View Your Loan')}
        >
          View My Loan
        </button>
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleApplyLoan}
          onFocus={() => speak('Apply For Loan')}
        >
          Apply for Loan
        </button>
      </div>
      <div className="mt-12">
        {flag === 'view' && <LoanDetails loan={loanDetails} />}
        {flag === 'apply' && <LoanApplication />}
      </div>
    </div>
  );
  
};

export default BlindLoans;
