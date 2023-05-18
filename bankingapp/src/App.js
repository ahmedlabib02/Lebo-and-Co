import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Loan from './Pages/Loan';
import Account from './Pages/Account';
import AccountInfo from './Pages/AccountInfo';
import OpenAccount from './Pages/OpenAccount';
import CloseAccount from './Pages/CloseAccount';
<<<<<<< HEAD
=======
import CreditCard from './Pages/CreditCard';
import ApplyCredit from './Pages/ApllyCredit';
import MyCredit from './Pages/MyCredit';
>>>>>>> 7bb936bef861ff3106ca560e8009a8975eb7e21e

function App(){
   

  return (
    <div >
    <Route path="/">
    <Login/>
    </Route>
    <Route path="/register">
    <Register/>
      </Route>
<<<<<<< HEAD
    <Route path="/homepage">
      <HomePage/>
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

</div>);
=======
      <Route path="/register">
      <Register/>
        </Route>
      <Route path="/homepage">
        <HomePage/>
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
         
  </div>);
>>>>>>> 7bb936bef861ff3106ca560e8009a8975eb7e21e
}

export default App;
