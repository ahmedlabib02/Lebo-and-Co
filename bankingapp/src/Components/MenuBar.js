import React from "react";
import Logo from '../images/bank logo.png';
import Link from "./Link";
import useNavigation from "../hooks/use-navigation";

function MenuBar(isBanker) {
  const { navigate } = useNavigation();
  const handeLogout = () => {
     navigate('/');
  }
    
    
  
  return (
    <div className="bg-blue-950 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Bank Logo" className="h-8 w-auto mr-4" />
          <div className="flex items-center">
            <Link to='/homepage'   className="text-white font-semibold text-lg mr-6">Home</Link>
            
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/profile" className="text-white font-semibold mr-4">Profile</Link>
           <Link to='/contact'  className="text-white font-semibold mr-4">Support</Link>
         
          <button className="text-white font-semibold bg-red-500 py-2 px-4 rounded" onClick={handeLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
