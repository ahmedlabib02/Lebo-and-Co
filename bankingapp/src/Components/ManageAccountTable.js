import { useState } from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper,TableHead} from "@mui/material";

function ManageAccountTable() {
    const [accounts, setAccounts] = useState([
        {
          username: "user1",
          email: "user1@example.com",
          status: "Active"
        },
        {
          username: "user2",
          email: "user2@example.com",
          status: "Blocked"
        },
        {
          username: "user3",
          email: "user3@example.com",
          status: "Active"
        }
      ]);
    
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
    
      return (
        <TableContainer component={Paper}>
          <Table aria-aria-label="account table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '25%' }}>Username</TableCell>
                <TableCell style={{ width: '35%' }}>Email</TableCell>
                <TableCell style={{ width: '20%' }}>Status</TableCell>
                <TableCell style={{ width: '20%' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.username}>
                  <TableCell>{account.username}</TableCell>
                  <TableCell>{account.email}</TableCell>
                  <TableCell>{account.status}</TableCell>
                  <TableCell>
                    <button
                      className={`bg-${account.status === "Blocked" ? 'blue' : 'red'}-500 hover:bg-${account.status === "Blocked" ? 'blue' : 'red'}-700 text-white font-bold py-2 px-4 rounded`}
                      style={{ width: '100%' }}
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
      );
    }

export default ManageAccountTable;
