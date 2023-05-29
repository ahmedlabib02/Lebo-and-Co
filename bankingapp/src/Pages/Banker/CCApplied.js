import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import BankerNavBar from "../../Components/BankerNavBar";
import { useState } from "react";
import CCAppliedDetails from "./CCAppliedDetails";


function CCApplied() {
    const [selectedCreditCardId, setSelectedCreditCardId] = useState(null);

  const tableData = [
    {
      CCid: 1,
      Name: "kott",
      Amount: "40000",
      date: "28/10/2002",
      Type: "Gold"
    },
    {
      CCid: 2,
      Name: "Leba",
      Amount: "600000",
      date: "20/11/2002",
      Type: "Silver"
    },
    {
        CCid: 3,
        Name: "Yehia",
        Amount: "10000",
        date: "24/11/2002",
        Type: "Platinum"
    }
  ];
  
  const handleViewDetails = (CCid) => {
    setSelectedCreditCardId(CCid);
  };

  const handleViewFiles = (CCid) => {
   
   console.log("File Viewed");
  };
  const handleReject = () =>{
    alert("Credit Card Rejected");
};
const handleAccept = () =>{
    alert("Credit Card Accepted");
};
  const selectedCreditCard = tableData.find((creditCard) => creditCard.CCid === selectedCreditCardId);
  return (
  
    <div className="flex flex-col min-h-screen">
       <BankerNavBar/>
        {  selectedCreditCard? (
        <div className=" mt-2">
            <CCAppliedDetails creditCard={selectedCreditCard}/>
          <div className="flex items-center justify-center ml-8 gap-10">
            <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-red-500 hover:bg-red-700 mr-20"
            onClick={handleReject}>
              Reject
            </button>
            <button className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-green-500 hover:bg-green-700"
            onClick={handleAccept}>
                Accept
            </button>
          </div>
          </div>):(<div>
        <TableContainer component={Paper}>
        <Table aria-aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Credit Card id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Files</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.CCid}>
              <TableCell>{row.CCid}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewFiles(row.CCid)}>
                  View Files
                  
                </button>
              </TableCell>
              <TableCell>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(row.CCid)}>
                  View Details
                  
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> </div>)}
 </div>
  );
}

export default CCApplied;