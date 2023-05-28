

function TransferMethod({amount}){
  const accountNumber = 2849849;
  return   (
    <div className="bg-white rounded-lg p-4">
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Account Number:
        </label>
        <input
          type="text"
          value={accountNumber}
          className="bg-gray-200 cursor-not-allowed"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Amount:
        </label>
        <input
          type="text"
          value={amount}
          className="bg-gray-200 cursor-not-allowed"
          readOnly
        />
      </div>
    
    
    </div>
  );
}

export default TransferMethod;