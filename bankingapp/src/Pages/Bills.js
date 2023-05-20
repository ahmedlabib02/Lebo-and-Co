import React from 'react';
import ButtonCard from "../Components/ButtonCard";
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';

function Bills() {
  const { navigate } = useNavigation();

  const handleElecClick = () => {
    navigate('/LivingBills');
  };


  const handleCCClick = () => {
    navigate('/CreditCardBills');
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl">
        <div className="flex justify-center gap-14">
          <ButtonCard title="LivingBills" icon={FaFileInvoiceDollar} onClick={handleElecClick} />
          <ButtonCard title="Credit Card bills" icon={FaCreditCard} onClick={handleCCClick} />
        </div>
      </div>
    </div>
  );
}

export default Bills;
