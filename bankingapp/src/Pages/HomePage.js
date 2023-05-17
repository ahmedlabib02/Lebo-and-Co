import MenuBar from '../Components/MenuBar';
import ButtonCard from '../Components/ButtonCard';
import { FaUser, FaMoneyBillWave, FaCreditCard, FaFileInvoiceDollar, FaExchangeAlt, FaPhone } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
function HomePage() {
  const {navigate}= useNavigation();
  const handleButtonClick = ()=>{
    navigate('/');
  }
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="fixed inset-0 bg-noise"></div>
      
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-8 max-w-4xl">
          <ButtonCard title="Account" icon={FaUser} onClick={handleButtonClick} />
          <ButtonCard title="Loan" icon={FaMoneyBillWave} onClick={handleButtonClick} />
          <ButtonCard title="Credit Card" icon={FaCreditCard} onClick={handleButtonClick} />
          <ButtonCard title="Bills" icon={FaFileInvoiceDollar} onClick={handleButtonClick} />
          <ButtonCard title="Transfers" icon={FaExchangeAlt} onClick={handleButtonClick} />
          <ButtonCard title="Contact Us" icon={FaPhone} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;