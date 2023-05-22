import React from 'react';

import ButtonCard from '../../../Components/ButtonCard';
import { GiCityCar } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';

function LoanType({ formData, setFormData, setPage }) {
  const handleCarLoanClick = () => {
    setFormData({ ...formData, loanType: 'Car' });
    setPage(1);
  };

  const handlePersonalLoanClick = () => {
    setFormData({ ...formData, loanType: 'Personal' });
    setPage(1);
  };

  return (
    <div className="flex space-x-8">
      <ButtonCard
        title="Personal Loan"
        icon={BsPersonFill}
        onClick={handlePersonalLoanClick}
        className="p-4 bg-blue-500 text-white rounded-lg"
      />
      <ButtonCard
        title="Car Loan"
        icon={GiCityCar}
        onClick={handleCarLoanClick}
        className="p-4 bg-blue-500 text-white rounded-lg"
      />
    </div>
  );
}

export default LoanType;
