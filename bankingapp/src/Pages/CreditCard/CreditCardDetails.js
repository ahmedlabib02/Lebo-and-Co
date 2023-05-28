import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PaymentContext from '../../Context/paymentContext';
import useNavigation from '../../hooks/use-navigation';
import StickyHeadTable from '../../Components/StickyHeadTable';
import Modal from 'react-modal';


function CreditCardDetails({ creditCard }) {
  const { navigate } = useNavigation();
  const { setPaymentInfo } = useContext(PaymentContext);
  const [focus, setFocus] = useState('name');
  const [isModalOpen,setIsModalOpen]= useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [barValue,setBarValue]= useState(Math.round(((creditCard.points / 8000) * 100)));
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

  

  const handlePay = () => {
    setPaymentInfo({ amount: creditCard.remainingCredit, billtype: 'Credit card' });
    navigate('/payment');
  };

  

  const handleProgressbarHover = () => {
    setIsHovered(true);
    
  };

  const handleProgressbarLeave = () => {
    setIsHovered(false);
   
  };

  const handleRedeem= ()=>{
    creditCard.points = 0;
    setBarValue(0);
  }
  const handleReportProblem=()=>{
      setIsModalOpen(true);
  };
  const handleConfirmReport = ()=>{
    setIsModalOpen(false);
  }
  let text = creditCard.points+"/8000";
  let font ='12px';
  let color = '#162E7B';
  
  if(isHovered){
    font ='18px';
    text = "Redeem";
    color = '#00FF00'
  }
  
  
  
    
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
                <div
                  className="progressbar-wrapper"
                  onClick={handleRedeem}
                  onMouseEnter={handleProgressbarHover}
                  onMouseLeave={handleProgressbarLeave}
                  
                >
              <CircularProgressbar
                value={barValue}
                text={`${text}`}
                strokeWidth={10}
                animateOnRender={true} // Enable animation on initial render
                styles={{
                  root: { width: '100%', height: '100%' },
                  path: { stroke: `${color}` },
                  text: { fill: `${color}`, fontSize: `${font}`, fontWeight: 'bold' },
                }}
              />
                  
                </div>
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
              <div className="mt-8">
                <button
                  className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8"
                  onClick={handlePay}
                >
                  Pay Remaining Credit
                </button>
                <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReportProblem}>
                    Report stolen
                </button>
              </div>
            </div>
          </div>
          <Modal
  isOpen={isModalOpen}
  onRequestClose={() => {
    setIsModalOpen(false);
  }}
  style={{
    content: {
      width: "500px", 
      margin: "auto", 
    },
  }}
  contentLabel="Set Reminder Modal"
  className="modal bg-color-950"
  overlayClassName="modal-overlay"
>
  <div className="px-4 py-2 flex justify-between">
    <h2 className="text-2xl font-bold ">Choose Credit Card Issue</h2>
    <button
      className="text-white font-bold"
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      X
    </button>
  </div>
  <div className="p-4">
    <div>
      <label className="text-gray-700 mb-2">Select the problem with your credit card:</label>
      <select className="border border-gray-300 rounded-md px-2 py-1 mb-4">
        <option value="theft">Theft</option>
        <option value="loss">Loss</option>
        <option value="damage">Damage</option>
      </select>
    </div>
    <div>
      <label className="text-gray-700 ">Do you wish to reapply on this credit card?</label>
      <div className="flex items-center mb-4">
        <input type="radio" id="applyYes" name="apply" value="yes" className="mr-2" />
        <label htmlFor="applyYes">Yes</label>
      </div>
      <div className="flex items-center mb-8">
        <input type="radio" id="applyNo" name="apply" value="no" className="mr-2" />
        <label htmlFor="applyNo">No</label>
      </div>
    </div>
    <div className="flex justify-end">
      <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg mr-2" onClick={handleConfirmReport}>
        Confirm
      </button>
      <button className="bg-red-500 text-white text-lg px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(false)}>
        Cancel
      </button>
    </div>
  </div>
</Modal>

     

          {!isModalOpen&&(<div className="mt-12">
            <StickyHeadTable columns={columns} rows={rows} />
          </div>)}
        </div>
      );
}



export default CreditCardDetails;
