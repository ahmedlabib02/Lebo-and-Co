import React, { useState } from 'react';
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard } from 'react-icons/fa';
function CreditCardBills(){

    const [requirements, setRequirements] = useState({
        Name: '',
        CreditCardNumber: '',
        Expirationdate: '',
        CVV: '',
        Fullname: '',
        Billingaddress: '',
        City: '',
        State: '',
        Postalcode:'',
        Paymentdate:'',
        Paymentmethod:'',
      });
    
      const [paymentStatus, setPaymentStatus] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setRequirements((prevRequirements) => ({
          ...prevRequirements,
          [name]: value,
        }));
      };
    
      const handlePay = () => {
    
        setPaymentStatus('Payment Successful');
        
        console.log('Requirements saved:', requirements);
      };
    
      return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Credit Card Information:</h2>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
            Cardholder Name :
              <input
                type="text"
                name="Name"
                value={requirements.Name}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Credit Card Number :
              <input
                type="text"
                name="CreditCardNumber"
                value={requirements.CreditCardNumber}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Expiration Date :
              <input
                type="text"
                name="Expirationdate"
                value={requirements.Expirationdate}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            CVV :
              <input
                type="text"
                name="CVV"
                value={requirements.CVV}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Billing Information</h2>
            <label className="block text-lg text-gray-700 mb-2">
            Full Name :
              <input
                type="text"
                name="Fullname"
                value={requirements.Fullname}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Billing Address :
              <input
                type="text"
                name="Billingaddress"
                value={requirements.Billingaddress}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            City :
              <input
                type="text"
                name="City"
                value={requirements.City}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            State :
              <input
                type="text"
                name="State"
                value={requirements.State}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <label className="block text-lg text-gray-700 mb-2">
            Postal Code :
              <input
                type="text"
                name="Postalcode"
                value={requirements.Postalcode}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment Details</h2>
           
            <label className="block text-lg text-gray-700 mb-2">
            Payment Date (The date when you want the payment to be processed) :
              <input
                type="date"
                name="Paymentdate"
                value={requirements.Paymentdate}
                onChange={handleChange}
                className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
              />
            </label>
          </div>
          {paymentStatus && (
        <p className="text-green-500 text-lg mb-2">{paymentStatus}</p>
      )}
      <button
        className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={handlePay}
      >
        <FaFileInvoiceDollar className="Payment" />
        Pay
      </button>
    </div>
  );
}

export default CreditCardBills;
