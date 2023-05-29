function ClientsCCDetails({Credit}){
    return(
<div className="p-4 border border-gray-300 bg-blue-950 rounded-lg">
                  <div className="ml-12">
                    <h2 className="text-xl text-white font-bold mb-8  ">Credit Card Number: {Credit.number}</h2>
                    <p className="text-lg  text-white mb-2">Remaining Credit: {Credit.remainingCredit}</p>
                    <p className="text-lg text-white mb-2">Credit Limit: {Credit.creditLimit}</p>
                    <p className="text-lg text-white mb-2">Expiry: {Credit.expiry}</p>
                    <p className="text-lg text-white mb-2">Name: {Credit.name}</p>
                    <p className="text-lg text-white mb-2">Issuer: {Credit.issuer}</p>
                    <p className="text-lg text-white mb-2">Branch: {Credit.branch}</p>
                    <p className="text-lg text-white mb-2">Points: {Credit.points}</p>
                    
                
                    </div>
                 </div>
    );
}
export default ClientsCCDetails;