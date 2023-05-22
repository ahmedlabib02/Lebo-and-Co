import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdDone } from "react-icons/md";
import TransferType from "./TransferType";
import Internal from "./Internal";
import Domestic from "./Domestic";
import International from "./International";
import Amount from "./Amount";
import { FaDollarSign, FaExchangeAlt, FaUser} from "react-icons/fa";

function NewTransferForm() {
 const [page, setPage] = useState(0);
 const [dataEntry, setDataEntry] = useState({
    TransferType: "",
    Name: "",
    AccountNumber:"",
    Bank:"",
    Address:"",
    Country:"",
    Amount:"",
    agreeTerms: false
 });

 const isValidForm = () => {
    if(page === 0) {
        return dataEntry.TransferType !== "";
    }
    else if (page === 1) {
        if(dataEntry.TransferType === "Internal"){
           return( dataEntry.Name !== "" &&
                    dataEntry.AccountNumber !== "" 

           );
        }
        else if(dataEntry.TransferType === "Domestic"){
            return(
                dataEntry.Name !=="" &&
                dataEntry.AccountNumber !==""&&
                dataEntry.Bank !==""
            );
        }
        else if(dataEntry.TransferType === "International"){
            return(
                dataEntry.Name !=="" &&
                dataEntry.AccountNumber !==""&&
                dataEntry.Bank !==""&&
                dataEntry.Country !==""&&
                dataEntry.Address !==""
            );
        }
    }
    else if (page ===2){
        return dataEntry.Amount !=="" && dataEntry.agreeTerms;
    }
    return true;
};
const FormTitles = ["Transaction Type", "Transfer Info", "Amount"];
const FormIcons = [<FaExchangeAlt />, <FaUser />, <FaDollarSign />];

const PageDisplay = () => {
    if (page ===0){
    return <TransferType dataEntry={dataEntry} setDataEntry={setDataEntry} setPage={setPage} />;
    }
    else if(page ===1 && dataEntry.TransferType === "Internal") {
        return <Internal dataEntry={dataEntry} setDataEntry={setDataEntry}/>;
    }
    else if(page ===1 && dataEntry.TransferType ==="Domestic"){
        return <Domestic dataEntry={dataEntry} setDataEntry={setDataEntry}/>;
    }
    else if(page ===1&& dataEntry.TransferType === "International"){
        return <International dataEntry={dataEntry} setDataEntry={setDataEntry}/>;
    }
    else{
        return <Amount dataEntry={dataEntry} setDataEntry={setDataEntry} />
    }
};

const handleNextClick = () => {
    if (isValidForm()) {
      if (page === 2) {
        alert("Transfer Complete");
        console.log(dataEntry);
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const handlePrevClick = () => {
    if (page === 1 && dataEntry.TransferType === "Internal") {
      setDataEntry((prevDataEntry) => ({
        ...prevDataEntry,
        Name: "",
        AccountNumber: "",
      }));
    } else if (page === 1 && dataEntry.TransferType === "Domestic") {
      setDataEntry((prevDataEntry) => ({
        ...prevDataEntry,
        Name: "",
        AccountNumber: "",
        Bank:""
      }));
    }
    else if (page === 1 && dataEntry.TransferType === "International") {
        setDataEntry((prevDataEntry) => ({
          ...prevDataEntry,
          Name: "",
          AccountNumber: "",
          Bank:"",
          Country:"",
          Address:""
        }));
      }
    setPage((currPage) => currPage - 1);
  };
 
  return( <div className="container mx-auto p-8">
  <div className="flex items-center justify-between mb-8">
    {FormTitles.map((title, index) => (
      <div key={index} className="flex items-center">
        <div
          className={`h-8 w-8 flex items-center justify-center rounded-full ${
            page === index ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
          }`}
        >
          {FormIcons[index]}
        </div>
        {index !== FormTitles.length - 1 && <div className="h-px bg-gray-300 w-12 mx-2"></div>}
        <span className={`${page === index ? "font-bold" : ""}`}>{title}</span>
      </div>
    ))}
  </div>
  <div className="bg-white rounded-lg p-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{FormTitles[page]}</h1>
      <div className="">{PageDisplay()}</div>
    </div>
    {page !== 0 && (
      <div className="flex justify-between">
        <button
          disabled={page === 0}
          onClick={handlePrevClick}
          className="flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-600"
        >
          <MdNavigateBefore className="mr-2" />
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className={`flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold ${
            isValidForm() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isValidForm()}
        >
          {page === FormTitles.length - 1 ? (
            <>
              Submit <MdDone className="ml-2" />
            </>
          ) : (
            <>
              Next <MdNavigateNext className="ml-2" />
            </>
          )}
        </button>
      </div>
    )}
  </div>
</div>

  );


}

export default NewTransferForm;