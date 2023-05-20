import React from 'react';
import ButtonCard from "../Components/ButtonCard";
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';

function Bills() {
  const { navigate } = useNavigation();

  const handleElecClick = () => {
    navigate('/LivingBills');
  };


  const handleCCClick = () => {
    navigate('/CreditCardBills');
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar />
    <div className="flex flex-col col-2 items-center justify-center mt-10 mb-48">
          <ButtonCard title="LivingBills" icon={FaFileInvoiceDollar} onClick={handleElecClick} />
          <ButtonCard title="Credit Card bills" icon={FaCreditCard} onClick={handleCCClick} />
    </div>
    <Footer />
  </div>
  );
}

export default Bills;
