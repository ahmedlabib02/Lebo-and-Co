import ButtonCard from "../../Components/ButtonCard";
import {FaGlobe, FaDollarSign, FaArrowDown } from 'react-icons/fa';
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
function Transfers(){
        const {navigate}= useNavigation();
        
        const handleInternalClick = ()=>{
            navigate('/Internal');
          }
          const handleDomesticClick = ()=>{
            navigate('/Domestic');
          }
          const handleInternationalClick = ()=>{
            navigate('/International');
          }

       return(
        <div>
        <MenuBar/>
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
          
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              <ButtonCard title="Internal Transfers" icon={FaDollarSign} onClick={handleInternalClick} />
              <ButtonCard title="Domestic Transfers" icon={FaArrowDown} onClick={handleDomesticClick} />
              <ButtonCard title="International Transfers" icon={FaGlobe} onClick={handleInternationalClick} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
        );
}
export default Transfers;