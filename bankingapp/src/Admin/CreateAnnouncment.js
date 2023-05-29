import React, { useState } from 'react';
import AdminMenuBar from './AdminMenuBar';

function CreateAnnouncement() {
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the announcement to the backend or perform any desired action
    console.log('Sending announcement:', announcement);
    setAnnouncement('');
  };

  return (
    <div>
    <AdminMenuBar />
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Send Bank Announcements</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="announcement" className="font-bold text-gray-800">
              Announcement:
            </label>
            <textarea
              id="announcement"
              className="w-full h-40 border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateAnnouncement;
