import React from 'react';
import Footer from '../../Components/Footer';
import MenuBar from '../../Components/MenuBar';
import NewTransferForm from './NewTransferForm.js';

function Transfers() {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="flex-grow overflow-y-auto mb-20">
        
          <div className="max-w-xl mx-auto container mx-auto p-8 max-w-screen-lg">
            <NewTransferForm/>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Transfers;