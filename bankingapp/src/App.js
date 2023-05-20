import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Loan from './Pages/Loan';
import Account from './Pages/Account/Account';
import AccountInfo from './Pages/Account/AccountInfo';
import OpenAccount from './Pages/Account/OpenAccount';
import CloseAccount from './Pages/Account/CloseAccount';
import CreditCard from './Pages/CreditCard/CreditCard';
import ApplyCredit from './Pages/CreditCard/ApplyCredit';
import MyCredit from './Pages/CreditCard/MyCredit';
import Transfers from './Pages/Transfers/Transfers';
import Domestic from './Pages/Transfers/Domestic';
import Internal from './Pages/Transfers/Internal';
import International from './Pages/Transfers/International';
function App(){
   

  return (
    <div >
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
        <Route path="/MyCredit">
        <MyCredit/>
        </Route>
        <Route path="/ApplyCredit">
        <ApplyCredit/>
        </Route>
        <Route path="/MyCredit">
        <MyCredit/>
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
         
  </div>);
}

export default App;
