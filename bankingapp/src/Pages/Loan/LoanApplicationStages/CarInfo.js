import React from 'react';

function CarInfo({ formData, setFormData }) {
  const handleCarMakeChange = (event) => {
    setFormData({ ...formData, carMake: event.target.value });
  };

  const handleCarModelChange = (event) => {
    setFormData({ ...formData, carModel: event.target.value });
  };

  const handleLoanAmountChange = (event) => {
    setFormData({ ...formData, loanAmount: event.target.value });
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Car Loan Details</h2>
      <div className="flex flex-col mb-2">
        <label htmlFor="carMake" className="mb-1">
          Car Make:
        </label>
        <input
          type="text"
          id="carMake"
          value={formData.carMake}
          onChange={handleCarMakeChange}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="carModel" className="mb-1">
          Car Model:
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
        <label htmlFor="loanAmount" className="mb-1">
          Loan Amount:
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

export default CarInfo;
