import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import OpenBlindAccount from "./OpenBlindAccount";
import BlindTransfers from "./BlindTransfers";

const BlindAccount = () => {
  const [flag, setFlag] = useState(null);

  const handleViewAccount = () => {
    speak('Viewing Account');
    setFlag('view');
    speak(paragraph)
  };
  const handleTransfers = () => {
    speak('Viewing TRansfers');
    setFlag('transfers');
    speak(paragraph)
  };

  const handleOpenAccount = () => {
    speak('Do you want to open a bank account?');
    setFlag('open');
    speak(paragraph)
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const accountDetails = { id: 1,
    balance: "$25,000",
    issuanceDate: "May 31, 2023",
    accNumber:"12021",
    routingNumber: "987654321",
    branch: "Main Street Branch",
    TransactionHistory: "id: 1, date: '2023-05-26', type: 'Deposit', description: 'Salary Deposit', amount: 5000 "
    
   
    // Add more details about the loan
  };
  const AccountDetails = ({ account }) => {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Account</h2>
        <p className="text-2xl">Balance: {account.balance}</p>
        <p className="text-2xl">Issuance Date: ${account.issuanceDate}</p>
        <p className="text-2xl">Account Number: {account.accNumber}</p>
        <p className="text-2xl">Routing Number: {account.routingNumber}</p>
        <p className="text-2xl">Branch: {account.branch}</p>
        <p className="text-2xl">Transaction History: {account.TransactionHistory}</p>
      
      </div>
    );
  };
  
  const paragraph = `Your Account Id is ${accountDetails.id}, the balance is ${accountDetails.balance}, the Issuance date is ${accountDetails.issuanceDate}, 
  the routing number is ${accountDetails.routingNumber}, your transaction history is ${accountDetails.TransactionHistory} `

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-12">Account</h1>
      <div className="flex flex-col items-center space-y-8">
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleViewAccount}
          onFocus={() => speak('View Your Account')}
        >
          View My Account
        </button>
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleOpenAccount}
          onFocus={() => speak('Open An Account ')}
        >
        Open Account
        </button>
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleTransfers}
          onFocus={() => speak('open transfers ')}
        >
        Transfers
        </button>
      </div>
      <div className="mt-12">
        {flag === 'view' && <AccountDetails account={accountDetails} />}
        {flag === 'open' && <OpenBlindAccount />}
        {flag === 'transfers' && <BlindTransfers />}
      </div>
    </div>
  );
  
};

export default BlindAccount;
