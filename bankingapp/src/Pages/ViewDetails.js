import React from 'react';

function ViewDetails({ report }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4">{report.issueDescription}</h2>
      <div className="space-y-2">
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Username:</span>
            {report.username}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Date:</span>
            {report.date}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Status:</span>
            {report.status}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Severity:</span>
            {report.severity}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Assigned To:</span>
            {report.assignedTo}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Resolution:</span>
            {report.resolution}
          </p>
        </div>
        <div className="flex">
          <p className="text-lg">
            <span className="font-bold">Report Description:</span>
            {report.reportDescription}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Forward
        </button>
      </div>
    </div>
  );
}

export default ViewDetails;
