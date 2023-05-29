function CCAppliedDetails({ creditCard }) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Credit Card Application Number: {creditCard.CCid}</h2>
        <p className="text-lg mb-2"><b>Name:</b> {creditCard.Name}</p>
        <p className="text-lg mb-2"><b>Amount:</b> {creditCard.Amount}</p>
        <p className="text-lg mb-2"><b>Date:</b> {creditCard.date}</p>
        <p className="text-lg mb-2"><b>Type:</b> {creditCard.Type}</p>
      </div>
    </div>
  );
}

export default CCAppliedDetails;
