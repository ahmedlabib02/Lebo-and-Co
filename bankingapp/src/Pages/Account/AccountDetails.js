import { useState } from "react";
import Modal from 'react-modal';
import useNavigation from "../../hooks/use-navigation";
import StickyHeadTable from "../../Components/StickyHeadTable";

function AccountDetails({ account }) {
  const [viewTable, setViewTable] = useState(false);
  const [isModalOpen, setIsOpen] = useState(false);
  const { navigate } = useNavigation();
  
  const rows = [
    { id: 1, date: '2023-05-26', type: 'Deposit', description: 'Salary Deposit', amount: 5000 },
    { id: 2, date: '2023-05-25', type: 'Withdraw', description: 'Grocery Shopping', amount: -200 },
    { id: 3, date: '2023-05-24', type: 'Withdraw', description: 'ATM Withdrawal', amount: -100 },
    { id: 4, date: '2023-05-23', type: 'Transfer', description: 'Transfer to John', amount: -500 },
    { id: 5, date: '2023-06-23', type: 'Transfer', description: 'Transfer to John', amount: -500 }
  ];

  const columns = [
    { id: 'id', label: 'Transaction ID', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 170 },
    { id: 'amount', label: 'Amount', minWidth: 100, align: 'right' },
  ];

  const handleCloseAccount = () => {
    setViewTable(false);
    setIsOpen(true);
  };

  const handleViewTransactions = () => {
    setViewTable(!viewTable);
  };

  const closeModal = () => {
    navigate("/Account");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 border border-gray-300 bg-blue-950 rounded-lg">
        <div className="ml-12">
          <h2 className="text-3xl text-white font-bold mb-8  ">Account number: {account.accNumber}</h2>
          <p className="text-lg  text-white mb-2">Balance: {account.balance}</p>
          <p className="text-lg text-white mb-2">Issuance Date: {account.issuanceDate}</p>
          <p className="text-lg text-white mb-2">Routing Number: {account.routingNumber}</p>
          <p className="text-lg text-white mb-2">Branch: {account.branch}</p>
          <div className="flex mt-4">
            <button className="bg-green-500 text-white text-lg px-4 py-2 mt-4 rounded-lg mr-4" onClick={handleViewTransactions}>
              View Transactions
            </button>
            <button className="bg-red-800 text-white text-lg px-4 py-2 mt-4 rounded-lg" onClick={handleCloseAccount}>
              Close Account
            </button>
          </div>
        </div>
      </div>
      {viewTable && (
        <div className="mt-12">
          <StickyHeadTable columns={columns} rows={rows} />
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Set Reminder Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Are you sure?</h2>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">State reason for closure:</label>
          <input type="text" className="border rounded-lg px-4 py-2 mb-4" />
          <button className="bg-red-800 text-white text-lg px-4 py-2 rounded-lg self-start" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AccountDetails;
