import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdDone,MdOutlineSummarize } from "react-icons/md";
import {  FaSuitcase } from "react-icons/fa";
import {IoPerson} from 'react-icons/io5';
import {HiIdentification} from 'react-icons/hi';
import PersonalInfo from "./PersonalInfo";
import EmploymentInfo from './EmploymentInfo';
import AccountSummary from './AccountSummary';
import IdentificationInfo from "./IdentificationInfo";
import useNavigation from "../../hooks/use-navigation";


function RegisterForm(){
  const {navigate} = useNavigation();
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

   const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phone: "",
        nationalIdNumber: "",
        issuingCountry:"",
        expiryDate:"",
        document:[],
        employerName:"",
        jobTitle: "",
        monthlyIncome:""
      });
    
      const FormTitles = ["Personal information","Identification information", "Employment information" ,"Form summary"];
      const FormIcons = [<IoPerson />,<HiIdentification/> ,< FaSuitcase/>, <MdOutlineSummarize />];
    
      const isValidForm = () => {
        if (page === 0) 
          return formData.firstName!==""&& formData.lastName!==""&& formData.userName!==""&&formData.email!==""&&formData.password!==""&&formData.phone!=="";
          else if(page===1)
          return formData.nationalIdNumber!=="" && formData.issuingCountry!==""&& formData.expiryDate!==""&& formData.document.length>0;
          else 
          return true;
        
      };

      const handleSpeakSummary = () => {
        const summaryText = Object.entries(formData)
          .map(([key, value]) => `${key}: ${value}`)
          .join('. ');
        speak(summaryText);
      };
      
      
      
    
      const handleNextClick = () => { 
            setPage((currPage) => currPage + 1);
            if(page===2)
            handleSpeakSummary();
            if(page===(3)){
             speak('form submitted successfully');
            navigate('/');
            }
             
            
            
      };
    
      const handlePrevClick = () => {
        if (page === 1 && formData.loanType === "Car") {
          setFormData((prevFormData) => ({
            ...prevFormData,
            carModel: "",
            carMake: "",
            purpose: "",
            loanAmount: ""
          }));
        } else if (page === 1 ) {
          console.log(formData.document.length);
        }
    
        setPage((currPage) => currPage - 1);
      };
    
      const PageDisplay = () => {
        if (page === 0) {
          return <PersonalInfo formData={formData} setFormData={setFormData}  />;
        } else if (page === 1) {
          return <IdentificationInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
          return <EmploymentInfo formData={formData} setFormData={setFormData} />;
        } 
        else if (page===3){
            return <AccountSummary formData={formData}/>
        }
      };
    
      return (
        <div className="container mx-auto p-8">
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
             
              <div className="flex justify-between">
                <button
                  disabled={page === 0}
                  onClick={handlePrevClick} onFocus={()=>speak('you are now on previous button')}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold ${
                    (page!==0) ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  <MdNavigateBefore className="mr-2" />
                  Prev
                </button>
                <button
                  onClick={handleNextClick} onFocus={()=>speak('you are now on next button')}
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
            
          </div>
        </div>
      );
    
    
   
    
}

export default RegisterForm;