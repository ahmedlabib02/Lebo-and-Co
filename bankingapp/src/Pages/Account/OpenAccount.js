import { useState } from "react";
import { FaSave  } from 'react-icons/fa';
import MenuBar from '../../Components/MenuBar';
import Footer from '../../Components/Footer';
function OpenAccount(){


    const [requirements, setRequirements] = useState({
        identification: '',
        proofOfAddress: '',
        initialDeposit: '',
        applicationForm: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setRequirements((prevRequirements) => ({
          ...prevRequirements,
          [name]: value,
        }));
      };
    
      return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar/>
        
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Opening Requirements</h2>
          <div>
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
            <label className="block text-lg text-gray-700 mb-2">
              Proof of address:
              <input
                type="text"
                name="proofOfAddress"
                value={requirements.proofOfAddress}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
              Initial deposit amount:
              <input
                type="text"
                name="initialDeposit"
                value={requirements.initialDeposit}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
              Completed application form:
              <input
                type="text"
                name="applicationForm"
                value={requirements.applicationForm}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
          </div>
          <button
        className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6" >
        <FaSave className="mr-2" />
        Save
      </button>
  
      <Footer/>
    </div>
        
         

      );
}
export default OpenAccount;