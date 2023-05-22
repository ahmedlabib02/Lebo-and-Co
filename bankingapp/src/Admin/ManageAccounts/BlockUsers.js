import ButtonCard from "../../Components/ButtonCard";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { TbLock } from 'react-icons/tb';
import { TiUserDeleteOutline } from 'react-icons/ti'
import { CiViewList } from 'react-icons/ci';
import React, { useState } from 'react';

function BlockUsers(){

    const [buttonCards, setButtonCards] = useState([
        { id: 1, title: "Account 1", icon: TbLock },
        { id: 2, title: "Account 2", icon: TiUserDeleteOutline },
      ]);
    
      const handleButtonClick = (id) => {
        setButtonCards((prevCards) => prevCards.filter((card) => card.id !== id));
      };
    
      return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
          <MenuBar />
    
          <div className="flex flex-col items-start justify-center mt-10 mb-48 ml-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Block Users</h2>
            <div className="flex col-2">
              {buttonCards.map((card) => (
                <ButtonCard
                  key={card.id}
                  title={card.title}
                  icon={card.icon}
                  onClick={() => handleButtonClick(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      );
    
    
};
export default BlockUsers;