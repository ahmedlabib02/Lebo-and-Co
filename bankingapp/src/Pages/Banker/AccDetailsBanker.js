function AccDetailsBanker({ account }) {
 
  
    return (<div>
      <div className="text-gray-800 align-items-center text-center p-4 rounded-lg leading-relaxed justify-center ">
        <h2 className="text-3xl font-bold mb-4"> Account Application Number: {account.id}</h2>
        
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Name:</b> {account.Name}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Purpose:</b> {account.Purpose}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Amount:</b> {account.Depositamount}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Date:</b> {account.Date}</p>
        &nbsp; &nbsp; &nbsp; <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                  View Files
                  
                </button>
        

      </div>
      </div>
    );
  }
  
  export default AccDetailsBanker;