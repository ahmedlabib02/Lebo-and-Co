import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead } from "@mui/material";
import BankerNavBar from "../../Components/BankerNavBar";
import { useState } from "react";
import ClientDetailsBanker from "./ClientDetailsBanker";
import AccountCard from "../Account/AccountCard";
import CreditCardCard from "../CreditCard/CreditCardCard";
import LoanCard from "../Loan/LoanCard";
import ClientsAccDetails from "./ClientsAccDetails";
import ClientsCCDetails from "./ClientsCCDetails";
import ClientsLoanDetails from "./ClientsLoanDetails";
function ClientsView(){
    const [selectedClientId, setselectedClientId] = useState(null);
    const Clients = [
      {
        Clientid: 1,
        Name: "kott",
        Email: "kott.kott@kott.com",
        Address:"123 bla bla"
      },
      {
        Clientid: 2,
        Name: "Leba",
        Email: "leba.leba@leba.com",
        Address:"there"
      },
      {
          Clientid: 3,
          Name: "Yehia",
          Email: "yehia.yehia@yehia.com",
          Address:"Here"
          
      }

    
    ];

   
    const account = [
        
            { id: 1,
                balance: "$25,000",
                issuanceDate: "May 31, 2023",
                accNumber:"12021",
                routingNumber: "987654321",
                branch: "Main Street Branch"
               
                // Add more details about the loan
              },
              {
                id: 2,
                balance: "$5,000",
                issuanceDate: "May 31, 2020",
                accNumber:"13041",
                routingNumber: "987654321",
                branch: "Main Street Branch"
            
              
                // Add more details about the loan
              },
              { id: 3,
                balance: "$9,000",
                issuanceDate: "May 20, 2020",
                accNumber:"12341",
                routingNumber: "789654231",
                branch: "Main Street Branch"
            
              
                // Add more details about the loan
              }
    ]
    
    const creditCards = [
        { id: 1,
         number: "1234 1234 1234 3455",
         remainingCredit: 1000,
         creditLimit: "$5000",
         expiry:"12/2027",
         name:'Ahmed Labib',
         cvc:'321',
         issuer:'visa',
         branch: "Main Street Branch",
         points:5000,
       },
       {id: 2,
         number: "1234 4321 7890 1987",
         remainingCredit: 3000,
         creditLimit: "$4000",
         expiry:"12/2026",
         name:'Yehia Khaled',
         cvc:'456',
         issuer:'visa',
         branch: "Main Street Branch",
         points:4000,
       },
       {id: 3,
        number: "5674 8967 1234 3455",
        remainingCredit: 5000,
        creditLimit: "$3000",
        expiry:"9/2025",
        name:'Mostafa kott',
        cvc:'789',
        issuer:'visa',
        branch: "Main Street Branch",
        points:2000,
      }
    ]

   
    const loans = [
        {
          id: 1,
          type: "Car Loan",
          amount: "$25,000",
          dueDate: "May 31, 2023",
          interestRate: "5%",
          term: "60 months",
          remainingBalance: "$18,500",
          // Add more details about the loan
        },
          {
            id: 2,
            type: "Personal Loan",
            amount: "$200,000",
            dueDate: "April 28, 2024",
            interestRate: "10%",
            term: "60 months",
            remainingBalance: "$100,500",
            // Add more details about the loan
          },
          {
            id: 3,
            type: "Car Loan",
            amount: "$30,000",
            dueDate: "June 17, 2023",
            interestRate: "7%",
            term: "60 months",
            remainingBalance: "$12,500",
            // Add more details about the loan
          }
      ];
      
        const handleViewDetails = (id) => {
           setselectedClientId(id);
         };
  
         const selectedClient = Clients.find((client) => client.Clientid === selectedClientId);

        
        const selectedAcc = account.find((account) => account.id ===selectedClientId);
        
        const selectedCredit = creditCards.find((creditCards) => creditCards.id === selectedClientId)
         
        const selectedLoan = loans.find((loans) => loans.id === selectedClientId)
    return (
    
      <div className="flex flex-col min-h-screen">
         <BankerNavBar/>
          {  selectedClient? (
          <div className=" mt-2">
              <ClientDetailsBanker client={selectedClient}/>
             <div>
            <h2 className="text-3xl font-bold ml-2">Client's Accounts:</h2>
              <ClientsAccDetails account={selectedAcc}/>
               </div>
             <div>
            <h2 className="text-3xl font-bold ml-2">Client's Credit Cards:</h2>
              <ClientsCCDetails  Credit={selectedCredit}/>
             </div>
             <div className="mb-8">
            <h2 className="text-3xl font-bold ml-2">Client's Loans:</h2>
              <ClientsLoanDetails loan={selectedLoan}/>
            </div>
            </div>
            ):(<div>
          <TableContainer component={Paper}>
          <Table aria-aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Clients.map((row) => (
              <TableRow key={row.Clientid}>
                <TableCell>{row.Clientid}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleViewDetails(row.Clientid)}>
                    View Details
                    
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> </div>)}
   </div>);

}

export default ClientsView;