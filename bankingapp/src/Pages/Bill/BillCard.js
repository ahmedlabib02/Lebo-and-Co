import { GoLightBulb } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { MdGasMeter } from 'react-icons/md';
import { useState } from 'react';
import useNavigation from '../../hooks/use-navigation';
import { useContext } from 'react';
import PaymentContext from '../../Context/paymentContext';
import Modal from 'react-modal';

function BillCard({ bill }) {
  const { navigate } = useNavigation();
  const { setPaymentInfo } = useContext(PaymentContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  let icon = <GoLightBulb />;
  if (bill.type === 'water') icon = <IoWaterOutline />;
  else if (bill.type === 'telephone') icon = <BsTelephone />;
  else if (bill.type === 'gas') icon = <MdGasMeter />;

  const handleBillClick = () => {
    setIsClicked(!isClicked);
  };
  const handlePayBill = () => {
    setPaymentInfo({ amount: bill.amount, billtype: 'Utility' });
    navigate('/payment');
  };
  var title = 'Electricity bill';
  if (bill.type === 'water') title = 'Water bill';
  else if (bill.type === 'telephone') title = 'Telephone bill';
  else if (bill.type === 'gas') title = 'Gas bill';

  const handleSetReminder = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-blue-950 text-white rounded-lg p-12 cursor-pointer hover:bg-gray-700 w-96"
      onClick={handleBillClick}
    >
      <div className="flex items-center mb-2">
        <div className="mr-2">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-200">Amount: {bill.amount}</p>
      <p className="text-gray-200">Due Date: {bill.dueDate}</p>
      {isClicked && (
        <div className="flex justify-between mt-4">
          <button
            className="bg-red-800 text-white text-lg px-4 py-2 rounded-lg"
            onClick={handlePayBill}
          >
            Pay bill
          </button>
          <button
            className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg"
            onClick={handleSetReminder}
          >
            Set Reminder
          </button>
        </div>
      )}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Set Reminder Modal"
  className="modal"
  overlayClassName="modal-overlay"
>
        <h2 className="text-2xl font-bold mb-4">Set Reminder</h2>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">Select Date:</label>
          <input type="date" className="border rounded-lg px-4 py-2 mb-4" />
          <button
            className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg self-start"
            onClick={closeModal}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default BillCard;
