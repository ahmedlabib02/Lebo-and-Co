import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";

function MyCredit() {
  const creditCardInfo = {
    cardNumber: "**** **** **** 1234",
    balance: "$1000",
    creditLimit: "$5000",
    // Add more credit card information fields as needed
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col">
      <MenuBar />
      <div className="flex-grow p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Credit Card Information</h2>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Card Number:</span> {creditCardInfo.cardNumber}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Balance:</span> {creditCardInfo.balance}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Credit Limit:</span> {creditCardInfo.creditLimit}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyCredit;
