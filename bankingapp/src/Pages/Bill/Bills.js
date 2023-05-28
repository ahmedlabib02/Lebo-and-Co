import React from 'react';
import ButtonCard from '../../Components/ButtonCard';
import useNavigation from '../../hooks/use-navigation';
import Footer from '../../Components/Footer';
import MenuBar from '../../Components/MenuBar';
import BillCard from './BillCard';

function Bills() {
  const { navigate } = useNavigation();
  const bills = [
    { amount: 1000, type: 'electricity', dueDate: '20/6/2023', accountNumber: '127' },
    { amount: 2000, type: 'water', dueDate: '10/10/2023', accountNumber: '128' },
    { amount: 500, type: 'telephone', dueDate: '20/10/2023', accountNumber: '129' },
    { amount: 400, type: 'gas', dueDate: '3/9/2023', accountNumber: '130' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar />
      <div className="ml-32 mr-32 flex-grow overflow-y-auto mb-64 mt-20">
        <h2 className="text-2xl font-bold mb-4">My Bills</h2>
        <h3 className="text-lg font-semibold mb-2">Select one to pay or set a reminder for:</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bills.map((bill) => (
            <div key={bill.accountNumber} >
              <BillCard bill={bill} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bills;
