

function CreditCardMethod({amount}){
return   (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Car Loan Details</h2>
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Car Make:
        </label>
        <input
          type="text"
          id="carMake"
          value={amount}
          className="border border-gray-300 rounded-lg px-3 py-2"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-2">
        <label  className="mb-1">
          Card Holder name:
        </label>
        <input
          type="text"
          id="carModel"
          value={formData.carModel}
          onChange={handleCarModelChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label  className="mb-1">
          Card number:
        </label>
        <input
          type="number"
          id="loanAmount"
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Enter loan amount"
          value={formData.loanAmount}
          onChange={handleLoanAmountChange}
        />
      </div>
    </div>
  );
}

export default CreditCardMethod;