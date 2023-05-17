import MenuBar from '../Components/MenuBar';
import ButtonCard from '../Components/ButtonCard';
import { FaUser, FaMoneyBillWave, FaCreditCard, FaFileInvoiceDollar, FaExchangeAlt, FaPhone } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
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

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <MenuBar/>
      
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-8 max-w-4xl">
          <ButtonCard title="Account" icon={FaUser} onClick={handleAccountClick} />
          <ButtonCard title="Loan" icon={FaMoneyBillWave} onClick={handleLoanClick} />
          <ButtonCard title="Credit Card" icon={FaCreditCard} onClick={handleCreditClick} />
          <ButtonCard title="Bills" icon={FaFileInvoiceDollar} onClick={handleBillsClick} />
          <ButtonCard title="Transfers" icon={FaExchangeAlt} onClick={handleTransferClick} />
          <ButtonCard title="Contact Us" icon={FaPhone} onClick={handleContactClick} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;