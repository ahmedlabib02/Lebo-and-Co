function LoanDetailsBanker({ loan }) {
    
  
    return (
      <div className="text-gray-800 text-center p-4 rounded-lg leading-relaxed">
        <h2 className="text-3xl font-bold mb-4"> Loan Application Number: {loan.id}</h2>
        <p className="text-lg mb-2"> <b>Type:</b> {loan.type}</p>
        <p className="text-lg mb-2"> <b>Amount:</b> {loan.amount}</p>
        {(loan.type==='Personal Loan')&&<p className="text-lg mb-2"> <b>Purpose:</b> {loan.Purpose}</p>}
        {(loan.type==='Car Loan')&&<p className="text-lg mb-2"> <b>Car Make:</b> {loan.Carmake}</p>}
        {(loan.type==='Car Loan')&&<p className="text-lg mb-2"> <b>Car Model:</b> {loan.Carmodel}</p>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                  View Files

        </button>
        
         
      </div>
    );
  }
  
  export default LoanDetailsBanker;