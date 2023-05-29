function CCAppliedDetails({ creditCard }) {
 
   
    return (<div>
      <div className="text-gray-800 align-items-center text-center p-4 rounded-lg leading-relaxed justify-center ">
        <h2 className="text-3xl font-bold mb-4"> Credit Card Application Number: {creditCard.CCid}</h2>
        
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Name:</b> {creditCard.Name}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Amount:</b> {creditCard.Amount}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Date:</b> {creditCard.date}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Type:</b> {creditCard.Type}</p>
        &nbsp; &nbsp; &nbsp; <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                  View Files
                  
                </button>
        

      </div>
      </div>
    );
  }
  
  export default CCAppliedDetails;