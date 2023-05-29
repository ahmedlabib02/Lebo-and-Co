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

  const handleReject = () => {
    alert("Credit Card Rejected");
  };

  const handleAccept = () => {
    alert("Credit Card Accepted");
  };

  const selectedCreditCard = tableData.find((creditCard) => creditCard.CCid === selectedCreditCardId);

  return (
    <div className="flex flex-col min-h-screen">
      <BankerNavBar />
      <div className="flex flex-grow items-center justify-center">
        {selectedCreditCard ? (
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <CCAppliedDetails creditCard={selectedCreditCard} />
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
                  <TableCell className="font-bold">Credit Card ID</TableCell>
                  <TableCell className="font-bold">Name</TableCell>
                  <TableCell className="font-bold">Amount</TableCell>
                  <TableCell className="font-bold">Date</TableCell>
                  <TableCell className="font-bold">Files</TableCell>
                  <TableCell className="font-bold">Action</TableCell>
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
                      <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => handleViewFiles(row.CCid)}>
                        View Files
                      </button>
                    </TableCell>
                    <TableCell>
                      <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => handleViewDetails(row.CCid)}>
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

export default CCApplied;
