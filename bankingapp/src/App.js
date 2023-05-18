import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Loan from './Pages/Loan';
import Account from './Pages/Account';
import AccountInfo from './Pages/AccountInfo';
import OpenAccount from './Pages/OpenAccount';
import CloseAccount from './Pages/CloseAccount';

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

</div>);
}

export default App;
