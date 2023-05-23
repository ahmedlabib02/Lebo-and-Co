import { useState } from "react";
import AccountCard from "./AccountCard";
import MenuBar from '../../Components/MenuBar';
import Footer from '../../Components/Footer';
import AccountDetails from "./AccountDetails";

function AccountInfo() {
  const [selectedAccId, setSelectedAccId] = useState(null);

  // Dummy data for bank accounts
  const accounts = [
   { id: 1,
    balance: "$25,000",
    issuanceDate: "May 31, 2023",
    accNumber:"12021",
    routingNumber: "987654321",
    branch: "Main Street Branch"
   
    // Add more details about the loan
  },
  {
    id: 2,
    balance: "$5,000",
    issuanceDate: "May 31, 2020",
    accNumber:"13041",
    routingNumber: "987654321",
    branch: "Main Street Branch"

  
    // Add more details about the loan
  },
  {
    id: 3,
    balance: "$2,000",
    issuanceDate: "May 31, 2018",
    accNumber:"11041",
    routingNumber: "187650325",
    branch: "Main Street Branch"
    
    // Add more details about the loan
  },
    // Rest of the loans...
  ];

  const handleAccountClick = (accountId) => {
    setSelectedAccId(accountId);
  };

  const selectedAcc = accounts.find((account) => account.id === selectedAccId);

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="ml-32 mr-32 flex-grow  overflow-y-auto mb-64 mt-20">
        {selectedAcc ? (
          <AccountDetails account={selectedAcc} />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">My Accounts</h2>
            <h3 className="text-lg font-semibold mb-2">Select one to view:</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Render LoanCard components */}
              {accounts.map((account) => (
                <AccountCard key={account.id} account={account} onAccountClick={handleAccountClick} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}



export default AccountInfo;
