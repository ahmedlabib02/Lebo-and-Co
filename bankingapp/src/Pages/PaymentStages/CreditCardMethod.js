
function CreditCardMethod({ amount, formData, setFormData }) {


  const handleMonthChange = (event) => {
    
    setFormData({ ...formData, expiryMonth: event.target.value });
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    if (year >= 2023) {
      setFormData({ ...formData, expiryYear: year });
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex flex-col mb-2">
        <label className="mb-1">Amount:</label>
        <input type="text" value={amount} className="bg-gray-200 cursor-not-allowed" readOnly />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1">Card Holder name:</label>
        <input
          type="text"
          value={formData.holderName}
          onChange={(event) => setFormData({ ...formData, holderName: event.target.value })}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Card number:</label>
        <input
          type="number"
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Enter card number"
          value={formData.cardNumber}
          onChange={(event) => setFormData({ ...formData, cardNumber: event.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Expiry date:</label>
        <div className="flex">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 mr-2"
            value={formData.expiryMonth}
            onChange={handleMonthChange}
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>

            
          </select>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Year"
            value={formData.expiryYear}
            onChange={handleYearChange}
            min="2023"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-1">CVV:</label>
        <input
          type="number"
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Enter CVV"
          maxLength="3"
          pattern="\d{3}"
          title="This is not a real CVV"
          value={formData.cvv}
          onChange={(event) => setFormData({ ...formData, cvv: event.target.value })}
        />
      </div>
    </div>
  );
}

export default CreditCardMethod;
