import MenuBar from '../Components/MenuBar';
import { useState,useEffect } from "react";
import ButtonCard from '../Components/ButtonCard';
import { FaUser, FaMoneyBillWave, FaCreditCard, FaFileInvoiceDollar, FaExchangeAlt, FaPhone } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
import AccountImg from '../images/Account.png'
import AutopayImg from '../images/AutoPay.png'
import LoanImg from '../images/Loan.png'
import ContactUsImg from '../images/ContactUs.png'
import TransactionImg from '../images/Transaction.png'
import CreditCardImg from '../images/CreditCard.png'
function HomePage() {


  const {navigate}= useNavigation();
  const handleAccountClick = ()=>{
    navigate('/Account');
  }
  const handleLoanClick = ()=>{
    navigate('/Loan');
  }
  const handleCreditClick = ()=>{
    navigate('/CreditCard');
  }
  const handleBillsClick = ()=>{
    navigate('/Bills');
  }
  const handleTransferClick = ()=>{
    navigate('/Transfers');
  }
  const handleContactClick = ()=>{
    navigate('/Contact');
  }

 
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const images = [AccountImg, AutopayImg, LoanImg, ContactUsImg, TransactionImg, CreditCardImg];
    setBackgroundImages(images);
  }, []);

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages]);


  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center justify-center"> 
    <MenuBar />

    <div className="flex justify-center mt-8">
    <div className="grid grid-cols-3 gap-12 max-w-full w-full mx-auto z-10">
        <ButtonCard title="Account" icon={FaUser} onClick={handleAccountClick} />
        <ButtonCard title="Loan" icon={FaMoneyBillWave} onClick={handleLoanClick} />
        <ButtonCard title="Credit Card" icon={FaCreditCard} onClick={handleCreditClick} />
        <ButtonCard title="Bills" icon={FaFileInvoiceDollar} onClick={handleBillsClick} />
        <ButtonCard title="Transfers" icon={FaExchangeAlt} onClick={handleTransferClick} />
        <ButtonCard title="Contact Us" icon={FaPhone} onClick={handleContactClick} />
      </div>
    </div>

    <div className="absolute inset-0 z-0">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            filter: "brightness(50%)", // Adjust the brightness level here (e.g., 70%)
          }}
        ></div>
      ))}
    </div>
  </div>
);

}

export default HomePage;