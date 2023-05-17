import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Account from './Pages/Account';
import AccountInfo from './Pages/AccountInfo';


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
         
  </div>);
}

export default App;
