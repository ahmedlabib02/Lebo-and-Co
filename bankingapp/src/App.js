import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Loan from './Pages/Loan';

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
        <Route path="/loans">
        <Loan/>
        </Route>   
  </div>);
}

export default App;
