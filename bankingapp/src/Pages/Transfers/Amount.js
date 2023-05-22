import React from "react";


function Amount({dataEntry, setDataEntry}) {

    const handleAmount = (event) => {
        setDataEntry({...dataEntry, Amount: event.target.value})
      };

      const handleTermsChange = (event) => {
        setDataEntry({...dataEntry,agreeTerms: true});
      };

    
    return (
    <div className="bg-white rounded-lg p-4">
       <div className="flex flex-col mb-2">
        <label className="mb-1">
          Amount:
        </label>
        <input
          type="number"
          id="Amount"
          value={dataEntry.Amount}
          onChange={handleAmount}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
        <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={dataEntry.agreeTerms}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <span>I accept the terms and conditions</span>
        </label>
       </div>
    </div>
    );
}
export default Amount;