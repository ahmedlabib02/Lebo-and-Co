import BankerNavBar from "../../Components/BankerNavBar";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import AccDetailsBanker from "./AccDetailsBanker";
import { useState } from "react";

function AccountsApplied() {
  const [selectedAccId, setSelectedAccId] = useState(null);

  const accounts = [
    {
      id: 1,
      Name: "Sebaei",
      Purpose: "need money",
      Depositamount: "100000",
      Date: "30/12/2017"
    },
    {
      id: 2,
      Name: "Leba",
      Purpose: "nice bank",
      Depositamount: "900000",
      Date: "20/2/2019"
    },
    {
      id: 3,
      Name: "Khaled",
      Purpose: "nice website",
      Depositamount: "7000",
      Date: "10/9/2019"
    }
  ];

  const handleViewFiles = (id) => {
    console.log("File Viewed");
  };

  const handleViewDetails = (accountId) => {
    setSelectedAccId(accountId);
  };

  const handleReject = () => {
    alert("Account Rejected");
  };

  const handleAccept = () => {
    alert("Account Accepted");
  };

  const selectedAcc = accounts.find((account) => account.id === selectedAccId);

  return (
    <div className="flex flex-col min-h-screen">
      <BankerNavBar />
      <div className="flex flex-grow items-center justify-center">
        {selectedAcc ? (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl">
            <AccDetailsBanker account={selectedAcc} />
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
                  <TableCell className="font-bold">Account Id</TableCell>
                  <TableCell className="font-bold">Name</TableCell>
                  <TableCell className="font-bold">Amount</TableCell>
                  <TableCell className="font-bold">Date</TableCell>
                  <TableCell className="font-bold">Files</TableCell>
                  <TableCell className="font-bold">Action</TableCell>
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
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
                        onClick={() => handleViewFiles(row.id)}
                      >
                        View Files
                      </button>
                    </TableCell>
                    <TableCell>
                      <button
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
                        onClick={() => handleViewDetails(row.id)}
                      >
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

export default AccountsApplied;
