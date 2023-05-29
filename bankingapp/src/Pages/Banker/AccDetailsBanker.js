function AccDetailsBanker({ account }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl">
      <div className="text-gray-800 flex flex-col items-center p-4 rounded-lg leading-relaxed justify-center">
        <h2 className="text-3xl font-bold mb-4">Account Application Number: {account.id}</h2>

        <p className="text-lg mb-2">
          <b>Name:</b> {account.Name}
        </p>
        <p className="text-lg mb-2">
          <b>Purpose:</b> {account.Purpose}
        </p>
        <p className="text-lg mb-2">
          <b>Amount:</b> {account.Depositamount}
        </p>
        <p className="text-lg mb-2">
          <b>Date:</b> {account.Date}
        </p>

        
      </div>
    </div>
  );
}

export default AccDetailsBanker;
