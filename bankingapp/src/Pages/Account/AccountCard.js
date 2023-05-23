function AccountCard({ account , onAccountClick }) {
    
  return (
        <div
          className="bg-blue-950 text-white rounded-lg p-4 cursor-pointer hover:bg-gray-700"
          onClick={() => onAccountClick(account.id)}
        >
          <h3 className="text-lg font-bold mb-2">Account number: {account.accNumber}</h3>
          <p className="text-gray-200">Balance: {account.balance}</p>
          
        </div>
      );
  }

  export default AccountCard;