import { FaCreditCard, FaClipboardCheck,FaStar } from 'react-icons/fa';
import ButtonCard from '../Components/ButtonCard';
import useNavigation from '../hooks/use-navigation';
function CreditCard(){

    const {navigate}= useNavigation();

        const handleMyCreditCardClick = () => {
            navigate('/MyCredit');
        };
      
        const handleApplyForCreditCardClick = () => {
            navigate('/ApplyCredit');
        };

        const handleCreditPointsClick = () => {
            navigate('CreditPoints')
          };
      
          return (
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
              <div className="flex justify-center mt-8">
                <div className="grid grid-cols-1 gap-8 max-w-4xl">
                  <ButtonCard
                    title="My Credit Card"
                    icon={FaCreditCard}
                    onClick={handleMyCreditCardClick}
                  />
                  <ButtonCard
                    title="Apply for Credit Card"
                    icon={FaClipboardCheck}
                    onClick={handleApplyForCreditCardClick}
                  />
                  <ButtonCard
                    title="Credit Points"
                    icon={FaStar}
                    onClick={handleCreditPointsClick}
                  />
                </div>
              </div>
            </div>
          );

}
export default CreditCard;