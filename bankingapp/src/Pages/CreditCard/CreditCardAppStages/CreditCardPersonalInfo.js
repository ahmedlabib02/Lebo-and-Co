function CreditCardPersonalInfo({ formData, setFormData }){
  
      const handlePinChange = (event) => {
        setFormData({ ...formData, pin: event.target.value });
      };
    
      const handleTypeChange = (event) => {
        setFormData({ ...formData, type: event.target.value });
      };
      const handleWantedLimit = (event) => {
        setFormData({ ...formData, wantedLimit: event.target.value });
      };
    
      return (
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Credit Card Details</h2>
          <div className="flex flex-col mb-2">
            <label htmlFor="purpose" className="mb-1">
              Pin:
            </label>
            <input
              type="text"
              id="pin"
              value={formData.pin}
              onChange={handlePinChange}
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Create Pin"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="loanAmount" className="mb-1">
              Credit Card Type:
            </label>
            <input
              type="text"
              id="type"
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Silver-Gold-Platinum"
              value={formData.type}
              onChange={handleTypeChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="loanAmount" className="mb-1">
              Credit Wanted Limit:
            </label>
            <input
              type="text"
              id="creditLimit"
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Enter Your desired Amount Of Credit"
              value={formData.wantedLimit}
              onChange={handleWantedLimit}
            />
          </div>
        </div>
      );
  
    
}
export default CreditCardPersonalInfo;