import ButtonCard from "../../Components/ButtonCard";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { AiOutlineFolderOpen ,AiOutlineCloseCircle} from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
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
    
    
    return (<div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar/>
        
  <div className="flex flex-col items-center justify-center mt-10 mb-48">
      <p className="text-lg font-semibold mt-4 mb-8">What would you like to do?</p>
       <div className="flex col-2">
            <ButtonCard title="View Account" icon={AiOutlineFolderOpen} onClick={handleInfoClick} />
            <ButtonCard title="Open Account" icon={CiViewList} onClick={handleOpenClick} />
            <ButtonCard title="Close Account" icon={AiOutlineCloseCircle} onClick={handleCloseClick} />
          </div>
        </div>
  
      <Footer/>
    </div>);
    }
export default Account;