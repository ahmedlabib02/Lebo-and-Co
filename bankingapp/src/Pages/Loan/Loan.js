import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import ButtonCard from "../../Components/ButtonCard";
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import useNavigation from "../../hooks/use-navigation";

function Loan() {
  const { navigate } = useNavigation();
  
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar />
      
      <div className="flex flex-col items-center justify-center mt-10 mb-48">
      <p className="text-lg font-semibold mt-4 mb-8">What would you like to do?</p>
       <div className="flex col-2">
       <ButtonCard
          title="View my Loans"
          icon={CiViewList}
          onClick={() => { navigate('/myloans') }}/>
         <ButtonCard
          title="Apply for a Loan"
          icon={AiOutlineFolderOpen}
          onClick={() => { navigate('/loanapp') }}/>
        </div> 
        
        
      </div>
      
      <Footer />
    </div>
  );
}

export default Loan;
