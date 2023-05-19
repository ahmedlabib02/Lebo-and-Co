import React, { useState } from 'react';
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard } from 'react-icons/fa';

function LivingBills() {
  const [requirements, setRequirements] = useState({
    BillAccountNumber: '',
    CustomerName: '',
    PaymentMethod: '',
    ThirdPartyApp: '',
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

  const renderThirdPartyAppOptions = () => {
    if (requirements.PaymentMethod === 'third-party') {
      return (
        <div>
          <label className="block text-lg text-gray-700 mb-2">
            Select Third-Party App:
            <select
              name="ThirdPartyApp"
              value={requirements.ThirdPartyApp}
              onChange={handleChange}
              className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
            >
              <option value="">Select Third-Party App</option>
              <option value="paypal">PayPal</option>
              <option value="apple-pay">Apple Pay</option>
              <option value="google-pay">Google Pay</option>
              <option value="Fawry">Fawry</option>
            </select>
          </label>
        </div>
      );
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Living Bills</h2>
      <div>
        <label className="block text-lg text-gray-700 mb-2">
          Bill Type:
          <select
            name="BillType"
            value={requirements.BillType}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
          >
            <option value="">Select Bill Type</option>
            <option value="WaterBills">Water Bills</option>
            <option value="ElectricityBills">Electricity Bills</option>
            <option value="TelephoneBills">Telephone Bills</option>
            <option value="GasBills">Gas Bills</option>
          </select>
        </label>
        <label className="block text-lg text-gray-700 mb-2">
          Bill Account Number:
          <input
            type="text"
            name="BillAccountNumber"
            value={requirements.BillAccountNumber}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
          />
        </label>
        <label className="block text-lg text-gray-700 mb-2">
          Customer Name:
          <input
            type="text"
            name="CustomerName"
            value={requirements.CustomerName}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
          />
        </label>
        <label className="block text-lg text-gray-700 mb-2">
          Payment Method:
          <select
            name="PaymentMethod"
            value={requirements.PaymentMethod}
            onChange={handleChange}
            className="block w-full rounded border border-gray-300 py-2 px-3 mt-1"
          >
            <option value="">Select Payment Method</option>
            <option value="third-party">Third-Party App</option>
            <option value="bank-account">Bank Account</option>
          </select>
        </label>
        {renderThirdPartyAppOptions()}
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

export default LivingBills;
