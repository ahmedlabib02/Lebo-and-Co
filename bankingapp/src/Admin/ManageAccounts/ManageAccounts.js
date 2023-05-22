import ButtonCard from "../../Components/ButtonCard";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { TbLock } from 'react-icons/tb';
import { TiUserDeleteOutline } from 'react-icons/ti'
import { CiViewList } from 'react-icons/ci';

function ManageAccounts(){
    const {navigate}= useNavigation();
    const handleBlockUsersClick = ()=>{
        navigate('/BlockUsers');
      }
    
    const handleDeleteAccountsClick = ()=>{
        navigate('/DeleteAccounts');
      }

    return(
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar/>
        
  <div className="flex flex-col items-center justify-center mt-10 mb-48">
      <p className="text-lg font-semibold mt-4 mb-8">What would you like to do?</p>
       <div className="flex col-2">
            <ButtonCard title="Block Users" icon={TbLock} onClick={handleBlockUsersClick} />
            <ButtonCard title="Delete Accounts" icon={TiUserDeleteOutline} onClick={handleDeleteAccountsClick} />
          </div>
        </div>
  
      
    </div>
     );
}
export default ManageAccounts;