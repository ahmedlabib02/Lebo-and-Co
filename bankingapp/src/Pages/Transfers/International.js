import React from "react";



function International({dataEntry, setDataEntry}){

    const handleName = (event) => {
      setDataEntry({...dataEntry, Name: event.target.value})
    };

    const handleAccountNumber = (event) => {
      setDataEntry({...dataEntry, AccountNumber: event.target.value})
    };

    const handleBank = (event) => {
      setDataEntry({...dataEntry, Bank: event.target.value})
    };

    const handleCountry = (event) => {
      setDataEntry({...dataEntry, Country: event.target.value})
    };

    const handleAddress = (event) => {
      setDataEntry({...dataEntry, Address: event.target.value})
    };

    return(
      <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Internal Transfer</h2>
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
      <div className="flex flex-col">
        <label className="mb-1">
          Country:
        </label>
        <input
          type="text"
          id="Country"
          className="border border-gray-300 rounded-lg px-3 py-2"
          value={dataEntry.Country}
          onChange={handleCountry}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">
          Address:
        </label>
        <input
          type="text"
          id="Address"
          className="border border-gray-300 rounded-lg px-3 py-2"
          value={dataEntry.Address}
          onChange={handleAddress}
        />
      </div>
    </div>
    );

}
export default International;