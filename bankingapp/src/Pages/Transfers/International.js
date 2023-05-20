import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function International(){

    const [requirements,setRequirements] = useState({
        Name:'',
        Bank:'',
        Country:'',
        Address:'',
        AccountNumber:'',
        Amount:'',
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setRequirements((prevRequirements) => ({
            ...prevRequirements,
            [name]: value,
        }));
    };

    return(
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">International Transfer Requirements</h2>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Name:
              <input
                type="text"
                name="Name"
                value={requirements.Name}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
              Bank:
              <input
                type="text"
                name="Bank"
                value={requirements.Bank}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Country:
            <input
              type="text"
              name="Country"
              value={requirements.Country}
              onChange={handleChange}
              className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
            />
            <label className="block text-lg text-gray-700 mb-2">
            Address:
            <input
              type="text"
              name="Address"
              value={requirements.Address}
              onChange={handleChange}
              className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
            />
          </label>
          </label>
            <label className="block text-lg text-gray-700 mb-2">
            AccountNumber:
            <input
              type="number"
              name="AccountNumber"
              value={requirements.AccountNumber}
              onChange={handleChange}
              className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
            />
          </label>
          <label className="block text-lg text-gray-700 mb-2">
              Amount:
              <input
                type="number"
                name="Amount"
                value={requirements.Amount}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
          </div>
          <button
        className="flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" >
        <FaArrowRight className="mr-2" />
        Send
      </button>


        </div>
    );
}
export default International;