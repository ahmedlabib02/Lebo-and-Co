function ClientDetailsBanker({ client }) {
 
   
    return (<div>
      <div className="text-gray-800 align-items-center text-center p-4 rounded-lg leading-relaxed justify-center ">
        <h2 className="text-3xl font-bold mb-4"> Client Number: {client.Clientid}</h2>
        
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Name:</b> {client.Name}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Email:</b> {client.Email}</p>
        <p className="text-lg mb-2"> &nbsp; &nbsp; &nbsp; <b>Address:</b> {client.Address}</p>
        &nbsp; &nbsp; &nbsp; <button 
                className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                   >
                  View Client's Files
                  
                </button>
        

      </div>
      </div>
    );
  }
  
  export default ClientDetailsBanker;