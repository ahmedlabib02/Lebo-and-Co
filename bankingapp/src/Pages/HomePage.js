import { useState, useEffect } from "react";
import ButtonCard from '../Components/ButtonCard';
import { FaUser, FaMoneyBillWave, FaCreditCard, FaFileInvoiceDollar, FaExchangeAlt } from 'react-icons/fa';
import MenuBar from "../Components/MenuBar";
import useNavigation from '../hooks/use-navigation';
import Footer from '../Components/Footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ImageSlider from '../Components/ImageSlider';

function HomePage() {
  const { navigate } = useNavigation();

  const handleAccountClick = () => {
    navigate('/Account');
  };

  const handleLoanClick = () => {
    navigate('/loan');
  };

  const handleCreditClick = () => {
    navigate('/CreditCard');
  };

  const handleBillsClick = () => {
    navigate('/Bills');
  };

  

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col">
      <MenuBar />

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative w-full mb-8">
           <ImageSlider/>
          

       

          <div className="flex justify-center  bg-blue-950">
            <ButtonCard title="Account" icon={FaUser} onClick={handleAccountClick}homepage />
            <ButtonCard title="Loan" icon={FaMoneyBillWave} onClick={handleLoanClick}homepage />
            <ButtonCard title="Credit Card" icon={FaCreditCard} onClick={handleCreditClick}  homepage/>
            <ButtonCard title="Bills" icon={FaFileInvoiceDollar} onClick={handleBillsClick}homepage /> </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
