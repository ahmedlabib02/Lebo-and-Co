import BankerNavBar from "../../Components/BankerNavBar";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import LoanDetailsBanker from "../Banker/LoanDetailsBanker";
import { useState } from "react";

function LoansApplied() {
  const [selectedLoanId, setSelectedLoanId] = useState(null);

  const loans = [
    {
      id: 1,
      type: "Car Loan",
      Name: "ahmed",
      amount: "$25,000",
      Carmake: "BMW",
      Carmodel: "E60",
      date: "3/1/2022"
    },
    {
      id: 2,
      Name: "George",
      type: "Personal Loan",
      amount: "$200,000",
      Purpose: "Need Money fast",
      date: "1/1/2023"
    },
    {
      id: 3,
      Name: "Yehia",
      type: "Personal Loan",
      amount: "$10,000",
      Purpose: "Need money for an apartment",
      date: "27/12/2020"
    }
  ];

  const handleViewDetails = (id) => {
    setSelectedLoanId(id);
  };

  const handleViewFiles = (id) => {
    console.log("File Viewed");
  };

  const handleReject = () => {
    alert("Loan Rejected");
  };

  const handleAccept = () => {
    alert("Loan Accepted");
  };

  const selectedLoan = loans.find((loan) => loan.id === selectedLoanId);

  return (
    <div className="flex flex-col min-h-screen">
      <BankerNavBar />

      <div className="flex flex-grow items-center justify-center">
        {selectedLoan ? (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl">
            <LoanDetailsBanker loan={selectedLoan} />
            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold"
                onClick={handleReject}
              >
                Reject
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          <TableContainer component={Paper} className="max-w-3xl">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold">Loan id</TableCell>
                  <TableCell className="font-bold">Name</TableCell>
                  <TableCell className="font-bold">Type</TableCell>
                  <TableCell className="font-bold">Amount</TableCell>
                  <TableCell className="font-bold">Date</TableCell>
                  <TableCell className="font-bold">Files</TableCell>
                  <TableCell className="font-bold">Action</TableCell>
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
                      <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => handleViewFiles(row.id)}>
                        View Files
                      </button>
                    </TableCell>
                    <TableCell>
                      <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => handleViewDetails(row.id)}>
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default LoansApplied;
