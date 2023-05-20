import React, { useState } from 'react';
//import 'BankingAPP/src/ContactStyle.css';
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard,FaAddressBook } from 'react-icons/fa';
function Contact(){

    const [requirements, setRequirements] = useState({
        Name: '',
        Mail: '',
        Message: '',

      });
    
      const [ContactStatus, setContactStatus] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setRequirements((prevRequirements) => ({
          ...prevRequirements,
          [name]: value,
        }));
      };
    
      const handleSubmit = () => {
    
        setContactStatus('Thank you!  Your request has been sent');
        
        console.log('Requirements saved:', requirements);
      };
    
      return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl  text-gray-800 mb-6">We look forward to your message:</h2>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
             Name :
              <input
                type="text"
                name="Name"
                value={requirements.Name}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Mail :
              <input
                type="text"
                name="Mail"
                value={requirements.Mail}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Message:
              <input
                type="text"
                name="Message"
                value={requirements.Message}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
       
          </div>
          {ContactStatus && (
        <p className="text-green-500 text-lg mb-2">{ContactStatus}</p>
      )}
      <button
        className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={handleSubmit}
      >
        <FaAddressBook className="SubmitContact" />
         Submit
      </button><br /><br />
      <h2 className="text-3xl  text-gray-800 mb-6">M. +201006003124 <br />
T.  +201021655603 <br />
hello@Lebo&Co.eg</h2>
    </div>
  );
}

export default Contact;
