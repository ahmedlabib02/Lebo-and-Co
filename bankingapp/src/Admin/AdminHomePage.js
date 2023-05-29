
import ButtonCard from '../Components/ButtonCard';
import {  FaWpforms ,FaUserPlus} from 'react-icons/fa';
import {GrUserManager} from 'react-icons/gr';
import { TbReportSearch} from 'react-icons/tb';
import MenuBar from "../Components/MenuBar";
import useNavigation from '../hooks/use-navigation';
import Footer from '../Components/Footer';
import ImageSlider from '../Components/ImageSlider';
import AdminMenuBar from './AdminMenuBar';
import { RiNotification2Line } from 'react-icons/ri';
import CreateAnnouncement from './CreateAnnouncment.js';
function AdminHomePage() {
    const { navigate } = useNavigation();

    const handleReportsClick = () => {
        navigate('/Reports');
      };

    const handleManageAccountsClick = () => {
        navigate('/ManageAccounts');
      };
      const handleManageCreateBanker = () => {
        navigate('/CreateBanker');
      };
      const handleCreateAnnouncement = () => {
        navigate('/CreateAnnouncement');
      };

     

      return(
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col">
        <AdminMenuBar />
  
        <div className="flex flex-1 flex-col items-center justify-center">
    
       
      

   

      <div className="flex justify-center ">
        <ButtonCard title="Manage Accounts" icon={GrUserManager} onClick={handleManageAccountsClick}Adminhomepage />
        <ButtonCard title="Reports" icon={TbReportSearch} onClick={handleReportsClick}Adminhomepage />
        <ButtonCard title="Create Banker" icon={FaUserPlus} onClick={handleManageCreateBanker}Adminhomepage />
        <ButtonCard title="Create Announcment" icon={RiNotification2Line} onClick={handleCreateAnnouncement}Adminhomepage />
       
      </div>
    
  </div>

      </div>
      );
}
export default AdminHomePage;