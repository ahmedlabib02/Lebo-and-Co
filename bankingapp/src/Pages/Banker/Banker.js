
import { AiOutlineFolderOpen } from "react-icons/ai";
import BankerNavBar from "../../Components/BankerNavBar";
import ButtonCard from "../../Components/ButtonCard";
import useNavigation from "../../hooks/use-navigation";
import { FaCreditCard, FaDollarSign } from "react-icons/fa";
function Banker(){
 const {navigate} = useNavigation();

 const AccApp = () => {
    navigate('/AccountsApplied');
 }
 const LoanApp = () => {
    navigate('/LoansApplied');
 }

 const CreditApp = () => {
    navigate('/CCApplied');
 }

    return (
        <div className="flex flex-col min-h-screen">
          <BankerNavBar/>
          
          <h4 className="text-3xl font-bold  mt-6 text-center">Hello Banker</h4>
          
          <div className="flex justify-center gap-8 mt-40">

            <ButtonCard className="p-4 bg-blue-500 text-white rounded-lg" icon={AiOutlineFolderOpen} onClick={AccApp} title='Accounts Applications' />
            <ButtonCard className="p-4 bg-blue-500 text-white rounded-lg" icon={FaDollarSign} onClick={LoanApp} title='Loans Applications' />
            <ButtonCard className="p-4 bg-blue-500 text-white rounded-lg" icon={FaCreditCard} onClick={CreditApp} title='Credit Card Applications' />

          </div>

        </div>
    );
}

export default Banker;