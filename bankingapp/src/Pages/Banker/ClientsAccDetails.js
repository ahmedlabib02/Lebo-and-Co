function ClientsAccDetails({account}){
    return(
                <div className="p-4 border border-gray-300 bg-blue-950 rounded-lg">
                  <div className="ml-12">
                    <h2 className="text-xl text-white font-bold mb-8  ">Account number: {account.accNumber}</h2>
                    <p className="text-lg  text-white mb-2">Balance: {account.balance}</p>
                    <p className="text-lg text-white mb-2">Issuance Date: {account.issuanceDate}</p>
                    <p className="text-lg text-white mb-2">Routing Number: {account.routingNumber}</p>
                    <p className="text-lg text-white mb-2">Branch: {account.branch}</p>
                    
                
                    </div>
                 </div>
    );
}
export default ClientsAccDetails;