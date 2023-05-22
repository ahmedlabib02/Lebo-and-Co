import React from 'react';
import Footer from '../../Components/Footer';
import MenuBar from '../../Components/MenuBar';
import NewTransferForm from './NewTransferForm.js';

function Transfers() {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="flex-grow overflow-y-auto mb-20">
        <div className="container mx-auto p-8 ">
          <div className="max-w-xl mx-auto">
            <NewTransferForm/>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Transfers;