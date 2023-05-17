import Login from './Pages/Login';
import Route from './Components/Route';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';


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
  </div>);
}

export default App;
