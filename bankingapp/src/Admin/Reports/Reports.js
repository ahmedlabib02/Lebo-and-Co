import React, { useState } from "react";
import useNavigation from '../../hooks/use-navigation';
import TechnicalIssueTable from "../../Components/TechnicalIssueTable";
import AdminMenuBar from "../AdminMenuBar";


function Reports(){
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
            <TechnicalIssueTable searchQuery={searchQuery}/>
            </div>
            

        </div>
        

    );
}
export default Reports;