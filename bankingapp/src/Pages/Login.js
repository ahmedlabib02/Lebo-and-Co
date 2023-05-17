import { useState } from "react";
import Link from '../Components/Link';
import useNavigation from "../hooks/use-navigation";
import LoginImage from '../images/0eeea6fcffcb4a5f830fc34b089b2e4b (1) (1).png'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate}= useNavigation();
  const handleLogin = () => {
    if (username === 'ahmed' && password === '123') {
      navigate('/homepage');
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6"> 
      <div className="mb-4">
          <img src={LoginImage} alt="Login" className="w-32 h-32 object-cover rounded-full mx-auto" />
        </div>
          
          
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded border border-gray-300 py-2 px-3 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded border border-gray-300 py-2 px-3 mb-3"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            <div className="ml-1 mb-1">
            <Link to={'/register'} >Create a new account</Link>
            </div> 
          </div>
        
      </div>
    </div>
  );
}

export default Login;
