import ButtonCard from "../../Components/ButtonCard";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { TbLock } from 'react-icons/tb';
import { TiUserDeleteOutline } from 'react-icons/ti'
import { CiViewList } from 'react-icons/ci';
import ManageAccountTable from "../../Components/ManageAccountTable";
import AdminMenuBar from "../AdminMenuBar";
function ManageAccounts(){
 return(
  <div>
  <AdminMenuBar/>
  <ManageAccountTable/>
  </div>

 )
}
export default ManageAccounts;