import React from 'react';
import Footer from '../../Components/Footer';
import MenuBar from '../../Components/MenuBar';
import AccountApplicationForm from './openAccountstages/accountApplicationForm';

function OpenAccount() {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="flex-grow overflow-y-auto mb-20">
        <div className="container mx-auto p-8 ">
          <div className="max-w-xl mx-auto">
            <AccountApplicationForm />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default OpenAccount;
