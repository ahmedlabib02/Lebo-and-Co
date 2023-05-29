function ViewDetails({report}){
   
    return (
        <div className="text-gray-800 p-4 rounded-lg leading-relaxed">
          <h2 className="text-3xl font-bold mb-4">{report.reportId}</h2>
          <p className="text-lg mb-2">username: {report.username}</p>
          <p className="text-lg mb-2">Date: {report.date}</p>
          <p className="text-lg mb-2">Status: {report.status}</p>
          
  
        </div>
      );
    }
    export default ViewDetails;