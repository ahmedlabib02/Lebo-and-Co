function AccountInfo(){
const AccountInfo = {
    balance: 1000,
    accountNumber: '1234567890',
    // Add more account information fields as needed
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Information</h2>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Balance:</span> {AccountInfo.balance}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Account Number:</span>{' '}
          {AccountInfo.accountNumber}
        </p>
        {/* Display additional account information fields */}
      </div>
    </div>
  );
}

export default AccountInfo;