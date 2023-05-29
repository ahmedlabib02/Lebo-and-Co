import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage';
import Loan from './Pages/Loan/Loan';
import Account from './Pages/Account/Account';
import AccountInfo from './Pages/Account/AccountInfo';
import OpenAccount from './Pages/Account/OpenAccount';
import CloseAccount from './Pages/Account/CloseAccount';
import CreditCard from './Pages/CreditCard/CreditCard';
import ApplyCredit from './Pages/CreditCard/ApplyCredit';
import MyCredit from './Pages/CreditCard/MyCredit';
import LoanApplication from './Pages/Loan/LoanApplication';
import MyLoans from './Pages/Loan/MyLoans';
import Transfers from './Pages/Transfers/Transfers';
import Domestic from './Pages/Transfers/Domestic';
import Internal from './Pages/Transfers/Internal';
import International from './Pages/Transfers/International';
import Contact from './Pages/Contact';
import Bills from './Pages/Bill/Bills';
import LivingBills from './Pages/LivingBills';
import CreditCardBills from './Pages/CreditCardBills';
import Payment from './Pages/PaymentStages/Payment';
<<<<<<< HEAD
import AdminHomePage from './Admin/AdminHomePage';
import ManageAccounts from './Admin/ManageAccounts/ManageAccounts';
import DeleteAccounts from './Admin/ManageAccounts/DeleteAccounts';
import BlockUsers from './Admin/ManageAccounts/BlockUsers';
import Reports from './Admin/Reports/Reports';
import ViewApplications from './Admin/ViewApplications/ViewApplications';
=======
import Banker from './Pages/Banker/Banker';
import AccountsApplied from './Pages/Banker/AccountsApplied';
import LoansApplied from './Pages/Banker/LoansApplied';
import CCApplied from './Pages/Banker/CCApplied';
>>>>>>> fb3738579cc670ec3cf637e38b6668188ad693b7
import CreditPoints from './Pages/CreditCard/CreditPoints';
import TechnicalIssueTable from './Components/TechnicalIssueTable';
import ModalPage from './Pages/ModalPage';
<<<<<<< HEAD
=======
import Terms from './Pages/Terms';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ManageAccounts from './Admin/ManageAccounts/ManageAccounts';
>>>>>>> fb3738579cc670ec3cf637e38b6668188ad693b7
import CreateBanker from './Admin/CreateBanker';
import Bankerprofile from './Pages/Banker/Bankerprofile';
import Adminprofile from './Admin/Adminprofile';

function App(){
   

  return (
    <div>
    <Route path="/">
    <Login/>
    </Route>
    <Route path="/register">
    <Register/>
      </Route>
      <Route path="/homepage">
      <HomePage/>
     </Route>  
     <Route path="/loan">
      <Loan/>
     </Route>   
      <Route path="/Account">
      <Account/>
      </Route>    
      <Route path="/AccountInfo">
      <AccountInfo/>
      </Route> 
      <Route path="/OpenAccount">
        <OpenAccount/>
        </Route> 
        <Route path="/CloseAccount">
        <CloseAccount/>
        </Route> 
        <Route path="/CreditCard">
        <CreditCard/>
        </Route>
        <Route path="/ApplyCredit">
        <ApplyCredit/>
        </Route>
        <Route path="/MyCredit">
        <MyCredit/>
        </Route>
        <Route path="/loanapp">
        <LoanApplication/>
        </Route>    
        <Route path="/myloans">
        <MyLoans/>
        </Route>                 
        <Route path="/Transfers">
        <Transfers/>
        </Route>   
        <Route path="/Domestic">
        <Domestic/>
        </Route>
        <Route path="/Internal">
        <Internal/>
        </Route>   
        <Route path="/International">
        <International/>
        </Route>                     
        <Route path="/contact">
        <Contact/>
        </Route>     
        <Route path="/Bills">
        <Bills/>
        </Route>
        <Route path="/LivingBills">
        <LivingBills/>
        </Route> 
        <Route path="/CreditCardBills">
        <LivingBills/>
        </Route>
        <Route path='/payment'>
          <Payment/>
<<<<<<< HEAD
          </Route>  
        <Route path='/AdminHomepage'>
          <AdminHomePage/>
          </Route>
        <Route path='/ManageAccounts'>
          <ManageAccounts/>
          </Route>  
        <Route path='/DeleteAccounts'>
          <DeleteAccounts/>
          </Route> 
         <Route path='/BlockUsers'>
          <BlockUsers/>
          </Route>       
         <Route path='/Reports'>
          <Reports/>
         </Route>
         <Route path='/ViewApplications'>
          <ViewApplications/>
         
          </Route> 
=======
          </Route>   
        <Route path='/Banker'>
          <Banker/>
          </Route>  
          <Route path='/AccountsApplied'>
          <AccountsApplied/>
          </Route>  
          <Route path='/LoansApplied'>
          <LoansApplied/>
          </Route>  
          <Route path='/CCApplied'>
          <CCApplied/>
          </Route>            
        <Route path='/modal'>
        <ModalPage/>
        </Route> 
        <Route path='/terms'>
        <Terms/>
        </Route> 
        <Route path='/privacy'>
        <PrivacyPolicy/>
        </Route> 
        <Route path='/about'>
        <About/>
        </Route> 
        <Route path='/profile'>
        <Profile/>
        </Route> 
     
          
>>>>>>> fb3738579cc670ec3cf637e38b6668188ad693b7
          <Route path='/AdminHomePage'>
          <AdminHomePage/>
          </Route> 
          
           
          <Route path='/CreateBanker'>
          <CreateBanker/>
          </Route> 
          <Route path='/Bankerprofile'>
            <Bankerprofile/>
          </Route>
          <Route path='/Adminprofile'>
            <Adminprofile/>
          </Route>
          
                    
         
      
  </div>
  );
}

export default App;
