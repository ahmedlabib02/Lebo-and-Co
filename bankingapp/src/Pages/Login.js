import { useState } from "react";
import Link from '../Components/Link';
import useNavigation from "../hooks/use-navigation";
import LoginImage from '../images/bank logo.png'
import { FaUserCircle } from 'react-icons/fa';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate}= useNavigation();
  const handleLogin = () => {
    if (username === 'ahmed' && password === '123') {
      navigate('/homepage');
      console.log("heyheyhey");
    }
    else if(username === 'admin' && password === '456'){
      navigate('/AdminHomePage');
    }

    else if(username === 'bank' && password === '789'){
      navigate('/Banker');
    }else if (username==='blind'&& password==='123')
      navigate('/blindclient');
  };
  const handleRegister = () => {
  navigate('/register')
  };

return (
  <div className="flex h-screen">
    <div className="w-1/2 flex items-center justify-center">
      <img
        className="h-full w-full object-cover"
        src= {LoginImage}
        alt="Login Image"
      />
    </div>
    <div className="w-1/2 flex items-center justify-center bg-white">
      <div className="max-w-md p-8">
        <div className="flex items-center justify-center mb-4">
          <FaUserCircle className="text-6xl text-gray-500 mr-2" />
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mb-4"
            onClick={handleLogin}
        >
            Login
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
);
};









export default Login;
