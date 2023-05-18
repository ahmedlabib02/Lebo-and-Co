import ButtonCard from "../Components/ButtonCard";
import {FaCreditCard} from 'react-icons/fa';
import useNavigation from '../hooks/use-navigation';
function Bills(){
    const {navigate}= useNavigation();
    const handleElecClick = ()=>{
        navigate('/ElectricityBills');
      }
      const handleWaterClick = ()=>{
        navigate('/WaterBills');pr
      }
      const handleCCClick = ()=>{
        navigate('/CreditCardBills');
      }
    
    
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
        
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              <ButtonCard title="Electricity Bills" icon={FaCreditCard} onClick={handleElecClick} />
              <ButtonCard title="Water Bills" icon={FaCreditCard} onClick={handleWaterClick} />
              <ButtonCard title="Credit Card bills" icon={FaCreditCard} onClick={handleCCClick} />
            </div>
          </div>
        </div>
      );
    }
export default Bills;