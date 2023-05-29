import { useState } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, TextField } from "@mui/material";
import ViewDetails from '../Pages/ViewDetails';

function TechnicalIssueTable() {
 
  const [selectedReportId, setSelectedReportId] = useState(null);
  
  const reports =[
    {
      reportId: 1,
      username: "user1",
      issueDescription: "Unauthorized transaction on account",
      date: "2023-05-25",
      status: "Investigating",
      severity: "High",
      assignedTo: "Fraud Detection Team",
      resolution: "Under Investigation",
      reportDescription:
        "A customer has reported an unauthorized transaction on their account. The transaction was made without their knowledge or consent, indicating a potential security breach or fraudulent activity. The matter is being investigated by the Fraud Detection Team to identify the source and resolve the issue as quickly as possible."
    },
    {
      reportId: 2,
      username: "user2",
      issueDescription: "ATM cash withdrawal failure",
      date: "2023-05-28",
      status: "Open",
      severity: "Medium",
      assignedTo: "Technical Support",
      resolution: "Pending",
      reportDescription:
        "Several customers have reported issues with cash withdrawals from ATMs. After entering the withdrawal amount, the machine does not dispense cash, causing inconvenience and frustration. The problem needs to be addressed by the Technical Support team to ensure uninterrupted access to cash for customers."
    },{
      reportId: 3,
      username: "user3",
      issueDescription: "Online banking login error",
      date: "2023-05-29",
      status: "Open",
      severity: "Low",
      assignedTo: "IT Support",
      resolution: "Pending",
      reportDescription:
        "Some customers are experiencing difficulties logging into their online banking accounts. After entering their credentials, an error message appears, preventing them from accessing their accounts and conducting online transactions. The IT Support team is working to identify the cause and restore normal login functionality."
    }

  ];
  
  const handleViewDetails = (reportId) => {
    setSelectedReportId(reportId);

  };

  const selectedReport = reports.find((report) => report.reportId === selectedReportId);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  
  const filteredReports = reports.filter((report) =>
    report.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div>
      {selectedReportId !== null ? (
        <ViewDetails report={selectedReport} />
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="text-2xl mt-2">
                Search: 
                </div>
            <TextField
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
              variant="outlined"
              style={{ height: "40px", width: "300px" }}
              inputProps={{ style: { height: "100%" } }}
            />
          </div>

          <TableContainer component={Paper}>
            <Table aria-aria-label="technical issue table">
              <TableHead>
                <TableRow>
                  <TableCell>Report ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Issue Description</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.reportId}>
                    <TableCell>{report.reportId}</TableCell>
                    <TableCell>{report.username}</TableCell>
                    <TableCell>{report.issueDescription}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.status}</TableCell>
                    <TableCell>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleViewDetails(report.reportId)}
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}                

export default TechnicalIssueTable;