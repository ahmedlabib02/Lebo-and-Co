import React from 'react';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="flex items-center mb-8">
          <img src="/profile-picture.png" alt="Profile Picture" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Ahmed Labib</h2>
            <p className="text-gray-600">Account Number: 123456789</p>
          </div>
        </div>

        <div className="border-t border-gray-300 py-4">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <p className="mb-2">
            <span className="font-semibold">Full Name:</span> Ahmed Labib Maged
          </p>
          <p className="mb-2">
            <span className="font-semibold">Date of Birth:</span> January 1, 2001
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> Labloob.kott@gmail.com
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone Number:</span> +20 100 098 1773
          </p>
        </div>

        <div className="border-t border-gray-300 py-4">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="mb-2">
            <span className="font-semibold">Street:</span> 22 Yasmeen St.
          </p>
          <p className="mb-2">
            <span className="font-semibold">City:</span> Cairo
          </p>
          <p className="mb-2">
            <span className="font-semibold">Country:</span> Egypt
          </p>
          <p className="mb-2">
            <span className="font-semibold">Zip Code:</span> 12345
          </p>
        </div>

        <div className="border-t border-gray-300 py-4">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <p className="mb-2">
            <span className="font-semibold">Account Number:</span> 123456789
          </p>
          <p className="mb-2">
            <span className="font-semibold">Account Type:</span> Checking Account
          </p>
          <p className="mb-2">
            <span className="font-semibold">Total Balance:</span> $32,000.00
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
