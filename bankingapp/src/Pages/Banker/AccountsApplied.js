import BankerNavBar from "../../Components/BankerNavBar";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import AccDetailsBanker from "./AccDetailsBanker";
import { useState } from "react";

function AccountsApplied(){

    const [selectedAccId, setSelectedAccId] = useState(null);

    // Dummy data for bank accounts
    const accounts = [
     { id: 1,
      Name:"Sebaei",
      Purpose:"need money",
      Depositamount:"100000",
      Date:"30/12/2017"
     
    },
    {
      id: 2,
      Name: "Leba",
      Purpose:"nice bank",
      Depositamount:"900000",
      Date:"20/2/2019"
    
     
    },
    {
      id: 3,
      Name:"Khaled",
      Purpose:"nice website",
      Depositamount:"7000",
      Date:"10/9/2019"
     
    },
     
    ];
    const handleViewFiles = (id) => {
   
      console.log("File Viewed");
     };
    const handleViewDetails = (accountId) => {
      setSelectedAccId(accountId);
    };
    const handleReject = () =>{
        alert("Account Rejected");
    };
    const handleAccept = () =>{
        alert("Account Accepted");
    };
    const selectedAcc = accounts.find((account) => account.id === selectedAccId);


return(
    <div className="flex flex-col min-h-screen">
        <BankerNavBar/>
        <div className="mt-2">

        {selectedAcc ? (<div>
          <AccDetailsBanker account={selectedAcc} />
          <div className="flex justify-center ml-8 gap-10">
            <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-red-500 hover:bg-red-700 mr-20"
            onClick={handleReject}
            >
              Reject
            </button>
            <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-green-500 hover:bg-green-700 float-left"
            onClick={handleAccept}
            >
                Accept
            </button>
          </div>
          </div>
        ) : (<div>
          <TableContainer component={Paper}>
          <Table aria-aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Files</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.Depositamount}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewFiles(row.id)}>
                    View Files
                    
                  </button>
                </TableCell>
                <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewDetails(row.id)}>
                    View Details
                    
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      </div>)}


        </div>
    </div>
);


}

export default AccountsApplied;