import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PaymentContext from '../../Context/paymentContext';
import useNavigation from '../../hooks/use-navigation';
import StickyHeadTable from '../../Components/StickyHeadTable';

function CreditCardDetails({ creditCard }) {
  const {navigate} = useNavigation();
  const {setPaymentInfo} = useContext(PaymentContext);
  const [focus, setFocus] = useState('name');


  const columns = [
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 200 },
    { id: 'category', label: 'Category', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100, align: 'right' },
    { id: 'status', label: 'Status', minWidth: 100 },
  ];

  const rows = [
    { date: '2023-05-01', description: 'Purchase 1', category: 'Groceries', amount: 100, status: 'Completed' },
    { date: '2023-05-05', description: 'Payment 1', category: 'Payment', amount: -50, status: 'Completed' },
    { date: '2023-05-10', description: 'Purchase 2', category: 'Shopping', amount: 80, status: 'Completed' },
    { date: '2023-05-15', description: 'Purchase 3', category: 'Entertainment', amount: 120, status: 'Pending' },
    { date: '2023-05-20', description: 'Payment 2', category: 'Payment', amount: -70, status: 'Completed' },
    { date: '2023-05-25', description: 'Purchase 4', category: 'Shopping', amount: 90, status: 'Pending' }
  ];
  const handleInputFocus = (field) => {
    setFocus(field);
  };

  const calculateRemainingCreditPercentage = () => {
    const percentage = (creditCard.points / 8000) * 100;
    return Math.round(percentage);
  };

  const handlePay = () => {
   setPaymentInfo({amount: creditCard.remainingCredit,billtype:'Credit card'});
   navigate('/payment');
  
  };

  return (
    <div className="flex flex-col">

    <div className="flex mt-12">
      <div className="flex flex-col">
        <div className="mr-12">
          <Cards
            cvc={creditCard.cvc}
            expiry={creditCard.expiry}
            focused={focus}
            name={creditCard.name}
            number={creditCard.number}
            placeholders={{ name: 'Full Name' }}
            preview={true}
            issuer={creditCard.issuer}
          />
        </div>
      
        <div className="mt-12 ml-4" style={{ width: '200px', height: '200px' }}>
          <CircularProgressbar
            value={calculateRemainingCreditPercentage()}
            text={`${creditCard.points}/8000`}
            strokeWidth={10}
            styles={{
              root: { width: '100%', height: '100%' },
              path: { stroke: '#162E7B' },
              text: { fill: '#162E7B', fontSize: '12px', fontWeight: 'bold' },
            }}
          />
        </div>
      </div>
      
      <div>
        <form className="text-gray-800 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-gray-800 font-bold mb-1">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={creditCard.name}
              onFocus={() => handleInputFocus('name')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="number" className="text-gray-800 font-bold mb-1">
              Card Number:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={creditCard.number}
              onFocus={() => handleInputFocus('number')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="expiry" className="text-gray-800 font-bold mb-1">
              Expiration Date:
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={creditCard.expiry}
              onFocus={() => handleInputFocus('expiry')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="cvc" className="text-gray-800 font-bold mb-1">
              CVC:
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={creditCard.cvc}
              onFocus={() => handleInputFocus('cvc')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="creditLimit" className="text-gray-800 font-bold mb-1">
              Credit Limit:
            </label>
            <input
              type="text"
              id="creditLimit"
              name="creditLimit"
              value={creditCard.creditLimit}
              onFocus={() => handleInputFocus('creditLimit')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="remainingCredit" className="text-gray-800 font-bold mb-1">
              Remaining Credit:
            </label>
            <input
              type="text"
              id="remainingCredit"
              name="remainingCredit"
              value={creditCard.remainingCredit}
              onFocus={() => handleInputFocus('remainingCredit')}
              readOnly
              className="border rounded-md px-4 py-2 w-full text-gray-800"
            />
          </div>
        </form>
        <button
          className="mt-4 px-4 py-2 text-white font-bold bg-blue-950 rounded-md"
          onClick={handlePay}
        >
          Pay credit
        </button>
      </div>
      
    </div>
    <div className="w-full mt-24">
    <StickyHeadTable columns={columns} rows={rows} />
  </div>
  </div>
  );
}

export default CreditCardDetails;
