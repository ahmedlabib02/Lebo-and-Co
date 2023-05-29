import { FaLayerGroup } from "react-icons/fa";
import { useState } from "react";

function TransferMethod({amount, type}){
  const [state,setState] = useState(amount);
  const flag = (type !== 'Credit card');
  const accountNumber = 2849849;
  const handleChange = (e) =>{
  if(e.target.value<=amount){
    setState(e.target.value);
  }
  };
  return   (
    <div className="bg-white rounded-lg p-4">
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Account Number:
        </label>
        <input
          type="text"
          value={accountNumber}
          className="bg-gray-200 cursor-not-allowed"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1">
          Amount:
        </label>
        <input
          type="number"
          value={state}
          onChange={handleChange}
          className={((flag)&&("bg-gray-200 cursor-not-allowed") ) || ((!flag)&&("bg-gray-200"))}
          readOnly={flag}
          max={amount}
        />
      </div>
    
    
    </div>
  );
}

export default TransferMethod;