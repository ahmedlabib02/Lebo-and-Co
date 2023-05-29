import BankerNavBar from "../../Components/BankerNavBar";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import AccDetailsBanker from "./AccDetailsBanker";
import { useState } from "react";

function BankerReports(){

    
    // Dummy data for bank accounts
    const Reports = [
     { id: 1,
      Name:"Sebaei",
      BriefDesc:"Help My Credit Card is stolen",
      CCNumber:"11234897023562",
      type: "Stolen",
      Date:"1/12/2019"
     
    },
    {
      id: 2,
      Name: "Leba",
      BriefDesc:"Help I lost my credit card and can't find it",
      CCNumber:"11234090967772",
      type: "Lost",
      Date:"27/2/2019"
    
     
    },
    {
      id: 3,
      Name:"Khaled",
      BriefDesc:"Help my credit card got damaged while i was cooking",
      CCNumber:"1123434623562",
      type:"Damaged",
      Date:"10/10/2019"
     
    },
     
    ];
    const handleViewFiles = (id) => {
      alert("File Viewed");
     };
    
    
return(
    <div className="flex flex-col min-h-screen">
        <BankerNavBar/>
        <div className="mt-2">
            <div>
          <TableContainer component={Paper}>
          <Table aria-aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Report Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brief Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Files</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Reports.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.BriefDesc}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewFiles(row.id)}>
                    View Files
                    
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      </div>


        </div>
    </div>
);


}

export default BankerReports;