function AccountDetails({ account }) {
 
  
    return (
      <div className="text-gray-800 p-4 rounded-lg leading-relaxed">
        <h2 className="text-3xl font-bold mb-4">{account.accNumber}</h2>
        <p className="text-lg mb-2">Balance: {account.balance}</p>
        <p className="text-lg mb-2">Issuance Date: {account.issuanceDate}</p>
        <p className="text-lg mb-2">Routing Number: {account.routingNumber}</p>
        <p className="text-lg mb-2">Branch: {account.branch}</p>

      </div>
    );
  }
  
  export default AccountDetails;