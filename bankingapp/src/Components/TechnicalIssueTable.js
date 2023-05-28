import { useState } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, TextField } from "@mui/material";
import ViewDetails from '../Pages/ViewDetails';

function TechnicalIssueTable() {
 
  const [selectedReportId, setSelectedReportId] = useState(null);
  
  const reports =[
    {
      reportId: 1,
      username: "user1",
      issueDescription: "Site loading slowly",
      date: "2023-05-20",
      status: "Open"
    },
    {
      reportId: 2,
      username: "user2",
      issueDescription: "Error message displayed on checkout",
      date: "2023-05-25",
      status: "In Progress"
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