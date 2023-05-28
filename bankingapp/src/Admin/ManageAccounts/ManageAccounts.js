import ButtonCard from "../../Components/ButtonCard";
import React, { useState } from "react";
import useNavigation from '../../hooks/use-navigation';
import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";
import { TbLock } from 'react-icons/tb';
import { TiUserDeleteOutline } from 'react-icons/ti'
import { CiViewList } from 'react-icons/ci';
import ManageAccountTable from "../../Components/ManageAccountTable";
import AdminMenuBar from "../AdminMenuBar";
function ManageAccounts(){
    const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Function to handle search query change
  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  }
 return(
    <div>
    <AdminMenuBar />
    <div>
      <div className="flex justify-center">
        
      </div>
      <ManageAccountTable searchQuery={searchQuery} />
    </div>
  </div>
);
}
export default ManageAccounts;