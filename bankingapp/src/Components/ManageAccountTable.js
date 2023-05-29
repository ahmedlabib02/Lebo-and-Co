import { useState } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper,TableHead,TextField} from "@mui/material";

function ManageAccountTable() {
    const [accounts, setAccounts] = useState([
        {
          id:1,
          username: "user1",
          email: "user1@example.com",
          status: "Active"
        },
        {
          id:2,
          username: "user2",
          email: "user2@example.com",
          status: "Blocked"
        },
        {
          id:3,
          username: "user3",
          email: "user3@example.com",
          status: "Active"
        }
      ]);
      const [searchQuery, setSearchQuery] = useState("");

      const handleToggleAccountStatus = (username) => {
        const updatedAccounts = accounts.map((account) => {
          if (account.username === username) {
            return {
              ...account,
              status: account.status === "Active" ? "Blocked" : "Active"
            };
          }
          return account;
        });
    
        setAccounts(updatedAccounts);
      };
      const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
      };
    
      // Filter accounts based on search query
      const filteredAccounts = accounts.filter((account) =>
        account.username.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div className="mt-8" style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className="text-2xl mt-2 mb-4">
                Search: 
                </div>
              <TextField className="ml-4"
                type="text"
                placeholder="Search by Id"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                variant="outlined"
                style={{ height: "40px", width: "300px" }}
                inputProps={{ style: { height: "100%" } }}
              />
            </div>
            <TableContainer component={Paper}>
              <Table aria-aria-label="account table">
                <TableHead>
                  <TableRow>
                  <TableCell style={{ width: "25%" }}>Id</TableCell>
                    <TableCell style={{ width: "25%" }}>Username</TableCell>
                    <TableCell style={{ width: "35%" }}>Email</TableCell>
                    <TableCell style={{ width: "20%" }}>Status</TableCell>
                    <TableCell style={{ width: "20%" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell>{account.id}</TableCell>
                      <TableCell>{account.username}</TableCell>
                      <TableCell>{account.email}</TableCell>
                      <TableCell>{account.status}</TableCell>
                      <TableCell>
                        <button
                          className={`bg-${
                            account.status === "Blocked" ? "blue" : "red"
                          }-500 hover:bg-${
                            account.status === "Blocked" ? "blue" : "red"
                          }-700 text-white font-bold py-2 px-4 rounded`}
                          style={{ width: "100%" }}
                          onClick={() => handleToggleAccountStatus(account.username)}
                        >
                          {account.status === "Blocked" ? "Unblock" : "Block"}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
     }  
      

export default ManageAccountTable;
