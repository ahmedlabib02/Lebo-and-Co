import React from "react";



function Domestic({dataEntry, setDataEntry, setPage}){

    const handleName = (event) => {
      setDataEntry({...dataEntry, Name: event.target.value})
    };

    const handleAccountNumber = (event) => {
      setDataEntry({...dataEntry, AccountNumber: event.target.value})
    };

    const handleBank = (event) => {
      setDataEntry({...dataEntry, Bank: event.target.value})
    }

    

    return(
      <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Domestic Transfer</h2>
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Name:
        </label>
        <input
          type="text"
          id="Name"
          value={dataEntry.Name}
          onChange={handleName}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Account Number:
        </label>
        <input
          type="number"
          id="AccountNumber"
          value={dataEntry.AccountNumber}
          onChange={handleAccountNumber}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">
          Bank:
        </label>
        <input
          type="text"
          id="Bank"
          className="border border-gray-300 rounded-lg px-3 py-2"
          value={dataEntry.Bank}
          onChange={handleBank}
        />
      </div>
    </div>
    );

}
export default Domestic;