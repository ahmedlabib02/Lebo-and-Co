import React, { useState } from 'react';
import ButtonCard from "../Components/ButtonCard";
import ModelComponent from "../Components/Modal"; 
import { FaInfo, FaTimes, FaFolderOpen, FaCashRegister, FaFileInvoice, FaFileInvoiceDollar, FaCreditCard } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';
import Modal from '../Components/Modal';

function Bills() {
  const { navigate } = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleElecClick = () => {
    navigate('/LivingBills');
  };

  const handleCCClick = () => {
    navigate('/CreditCardBills');
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar />
      <div className="flex flex-col col-2 items-center justify-center mt-10 mb-48">
        <ButtonCard title="LivingBills" icon={FaFileInvoiceDollar} onClick={() => { handleElecClick(); openModal(); }} />
        <ButtonCard title="Credit Card bills" icon={FaCreditCard} onClick={() => { handleCCClick(); openModal(); }} />
      </div>
      <Footer />

      {}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Bills;
