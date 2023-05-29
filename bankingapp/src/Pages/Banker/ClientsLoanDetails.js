function ClientsLoanDetails({loan}){
    return(
                <div className="p-4 border border-gray-300 bg-blue-950 rounded-lg">
                  <div className="ml-12">
                    <h2 className="text-xl text-white font-bold mb-8  ">Client's Loan Id: {loan.id}</h2>
                    <p className="text-lg  text-white mb-2">Type: {loan.type}</p>
                    <p className="text-lg text-white mb-2">Amount: {loan.amount}</p>
                    <p className="text-lg text-white mb-2">Due Date: {loan.dueDate}</p>
                    <p className="text-lg text-white mb-2">Interest Rate: {loan.interestRate}</p>
                    <p className="text-lg text-white mb-2">Term: {loan.term}</p>
                    <p className="text-lg text-white mb-2">Remaining Balance: {loan.remainingBalance}</p>
                
                    </div>
                 </div>
    );
}
export default ClientsLoanDetails;