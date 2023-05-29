
function IdentificationInfo({ formData, setFormData }) {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    setFormData({...formData,
      document: Array.from(files)});
  };
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  const handleDataChange =(event)=>{
    console.log(event.target.value);
    setFormData({...formData,expiryDate:event.target.value});
  }
  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">National ID Identification Number:</label>
          <input
            type="text"
            id="nationalIdNumber"
            value={formData.nationalIdNumber}
            onChange={(e) => setFormData({ ...formData, nationalIdNumber: e.target.value })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onFocus={()=>speak('enter your national id number')}
          />
        </div>
        <div>
          <label  className="block text-gray-700 font-bold mb-2">
            Issuing Country:
          </label>
          <input
            type="text"
            id="issuingCountry"
            value={formData.issuingCountry}
            onChange={(e) => setFormData({ ...formData, issuingCountry: e.target.value })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onFocus={()=>speak('enter your issuing country')}
          />
        </div>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Expiry Date:
        </label>
        <input
          type="date"
          id="expiryDate"
          value={formData.expiryDate}
          onChange={handleDataChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onFocus={()=>speak('enter your expiry date')}
        />
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">
          Upload Scanned Copy of Identification Document:
        </label>
        <input
          type="file"
          id="identificationDocument"
          // handle file upload logic
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          onChange={handleFileUpload}
          onFocus={()=>speak('upload your documents')}
        />
      </div>
    </div>
  );
}

export default IdentificationInfo;
