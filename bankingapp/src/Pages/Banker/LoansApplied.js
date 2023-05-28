import BankerNavBar from "../../Components/BankerNavBar";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import LoanDetailsBanker from "../Banker/LoanDetailsBanker";
import { useState } from "react";

function LoansApplied(){

    const [selectedLoanId, setSelectedLoanId] = useState(null);

  // Dummy data for loans
  const loans = [
   { id: 1,
    type: "Car Loan",
    Name:"ahmed",
    amount: "$25,000",
    Carmake: "BMW",
    Carmodel: "E60",
    date:"3/1/2022"
    
    // Add more details about the loan
  },
  {
    id: 2,
    Name:"George",
    type: "Personal Loan",
    amount: "$200,000",
    Purpose:"Need Money fast",
    date:"1/1/2023"
    
    // Add more details about the loan
  },
  {
    id: 3,
    Name:"Yehia",
    type: "Personal Loan",
    amount: "$10,000",
    Purpose:"Need money for an appartment",
    date:"27/12/2020"
    // Add more details about the loan
  },
    // Rest of the loans...
  ];
  
  const handleViewDetails = (id) => {
    setSelectedLoanId(id);
  };

  const handleViewFiles = (id) => {
   
   console.log("File Viewed");
  };
  const handleReject = () =>{
    alert("Loan Rejected");
  };
  const handleAccept = () =>{
    alert("Loan Accepted");
  };
  const selectedLoan = loans.find((loan) => loan.id === selectedLoanId);
        return(
            <div className="flex flex-col min-h-screen">
                <BankerNavBar/>
                
                <div className="mt-2">
        {selectedLoan ? (<div>
          <LoanDetailsBanker loan={selectedLoan} />
          <div className="flex justify-center">
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
            <TableCell>Loan id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Files</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
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

export default LoansApplied;