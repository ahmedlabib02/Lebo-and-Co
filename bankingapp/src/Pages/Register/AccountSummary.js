

import React from 'react';

function AccountSummary({ formData }) {
  return (
    <div className="bg-white shadow-md rounded p-8">
      <h2 className="text-2xl mb-4">Account Summary</h2>
      <p className="mb-2">
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p className="mb-2">
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p className="mb-2">
        <strong>Username:</strong> {formData.userName}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {formData.email}
      </p>
      <p className="mb-2">
        <strong>Phone Number:</strong> {formData.phone}
      </p>
      <p className="mb-2">
        <strong>National ID Number:</strong> {formData.nationalIdNumber}
      </p>
      <p className="mb-2">
        <strong>Issuing Country:</strong> {formData.issuingCountry}
      </p>
      <p className="mb-2">
        <strong>Expiry Date:</strong> {formData.expiryDate}
      </p>
      <p className="mb-2">
        <strong>Employer Name:</strong> {formData.employerName}
      </p>
      <p className="mb-2">
        <strong>Job Title:</strong> {formData.jobTitle}
      </p>
      <p className="mb-2">
        <strong>Monthly Income:</strong> {formData.monthlyIncome}
      </p>
    </div>
  );
}

export default AccountSummary;
