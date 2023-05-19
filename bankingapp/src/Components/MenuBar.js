import React from "react";
import Logo from '../images/bank logo.png';

function MenuBar() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Bank Logo" className="h-8 w-auto mr-4" />
          <div className="flex items-center">
            <a href="#" className="text-white font-semibold text-lg mr-6">Home</a>
            <a href="#" className="text-white font-semibold text-lg mr-6">Branches</a>
            
          </div>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white font-semibold mr-4">Profile</a>
          <a href="#" className="text-white font-semibold mr-4">Support</a>
          <button className="text-white font-semibold bg-red-500 py-2 px-4 rounded">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
