import MenuBar from "../../Components/MenuBar";
import Footer from "../../Components/Footer";

function AccountInfo() {
  const AccountInfo = {
    balance: 1000,
    accountNumber: "1234567890",
    // Add more account information fields as needed
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen relative">
      <MenuBar />

      <div className="flex flex-col items-start justify-center mt-10 mb-48 ml-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Account Information</h2>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Balance:</span> {AccountInfo.balance}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Account Number:</span>{" "}
            {AccountInfo.accountNumber}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AccountInfo;
