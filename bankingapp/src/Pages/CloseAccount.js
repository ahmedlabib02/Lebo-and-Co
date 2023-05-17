import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
function CloseAccount(){

    const [requirements, setRequirements] = useState({
        reason: '',
        outstandingBalance: '',
        identification: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setRequirements((prevRequirements) => ({
          ...prevRequirements,
          [name]: value,
        }));
      };
    
      const handleSave = () => {
        // Perform save action here
        console.log('Requirements saved:', requirements);
      };
    
      return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Closure Requirements</h2>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Reason for account closure:
              <input
                type="text"
                name="reason"
                value={requirements.reason}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
              Outstanding balance (if any):
              <input
                type="text"
                name="outstandingBalance"
                value={requirements.outstandingBalance}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
              Valid identification document:
              <input
                type="text"
                name="identification"
                value={requirements.identification}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
          </div>
          <button
        className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={handleSave}
      >
        <FaWindowClose className="mr-2" />
        Close Account
      </button>
        </div>
      );
}
export default CloseAccount;