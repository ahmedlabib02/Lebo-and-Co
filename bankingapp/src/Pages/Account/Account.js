import ButtonCard from "../../Components/ButtonCard";
import { FaInfo,FaTimes,FaFolderOpen } from 'react-icons/fa';
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
function Account(){
    const {navigate}= useNavigation();
    const handleInfoClick = ()=>{
        navigate('/AccountInfo');
      }
      const handleOpenClick = ()=>{
        navigate('/OpenAccount');
      }
      const handleCloseClick = ()=>{
        navigate('/CloseAccount');
      }
    
    
    return (<div>
      <MenuBar/>
  <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
        
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-3 gap-8 max-w-4xl">
            <ButtonCard title="View Account" icon={FaInfo} onClick={handleInfoClick} />
            <ButtonCard title="Open Account" icon={FaFolderOpen} onClick={handleOpenClick} />
            <ButtonCard title="Close Account" icon={FaTimes} onClick={handleCloseClick} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
        
      );
    }
export default Account;