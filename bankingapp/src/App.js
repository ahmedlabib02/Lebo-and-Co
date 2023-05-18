import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Account from './Pages/Account';
import AccountInfo from './Pages/AccountInfo';
import OpenAccount from './Pages/OpenAccount';
import CloseAccount from './Pages/CloseAccount';
import Bills from './Pages/Bills';
import LivingBills from './Pages/LivingBills';


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
        <Route path="/Bills">
        <Bills/>
        </Route> 
        <Route path="/LivingBills">
        <LivingBills/>
        </Route>    
         
  </div>);
}

export default App;
