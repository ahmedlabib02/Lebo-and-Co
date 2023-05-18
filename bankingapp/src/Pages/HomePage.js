import MenuBar from '../Components/MenuBar';
import ButtonCard from '../Components/ButtonCard';
import { FaUser, FaMoneyBillWave, FaCreditCard, FaFileInvoiceDollar, FaExchangeAlt, FaPhone } from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
function HomePage() {
  const {navigate}= useNavigation();
  const handleAccountClick = ()=>{
    console.log("hey hey hey")
  }
  const handleLoanClick =()=>{
    navigate('/loans')
  }
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar/>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-8 max-w-4xl">
          <ButtonCard title="Account" icon={FaUser} onClick={handleAccountClick} />
          <ButtonCard title="Loan" icon={FaMoneyBillWave} onClick={handleLoanClick} />
          <ButtonCard title="Credit Card" icon={FaCreditCard} />
          <ButtonCard title="Bills" icon={FaFileInvoiceDollar} />
          <ButtonCard title="Transfers" icon={FaExchangeAlt} />
          <ButtonCard title="Contact Us" icon={FaPhone} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;