import { useState } from 'react';
import { FaUserPlus, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function CreateBankerPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the necessary actions to create a banker
    // e.g., send a request to the server

    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <FaUserPlus className="mr-2" />
            Create Banker
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <input
                type="text"
                className="border border-gray-400 px-4 py-2 rounded w-full text-lg"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                className="border border-gray-400 px-4 py-2 rounded w-full text-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <FaLock className="mr-2" />
              <input
                type="password"
                className="border border-gray-400 px-4 py-2 rounded w-full text-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create Banker
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBankerPage;
