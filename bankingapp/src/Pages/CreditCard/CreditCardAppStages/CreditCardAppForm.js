import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdDone } from "react-icons/md";
import { FaFileAlt, FaUser } from "react-icons/fa";
import Modal from 'react-modal';
import CreditCardPersonalInfo from "./CreditCardPersonalInfo";
import CreditCardAppDocs from "./CreditCardAppDocs";
import useNavigation from "../../../hooks/use-navigation";

function CreditCardAppForm(){
        const [page, setPage] = useState(0);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [formData, setFormData] = useState({
        pin:"",
        type:"",
        wantedLimit:"",
        documents: [], // Initialize the documents property as an empty array
        agreeTerms: false // Initialize the agreeTerms property as false
      });
    
      const FormTitles = [ "Credit Card Information", "Your Documents"];
      const FormIcons = [ <FaUser />,<FaFileAlt />];
    
      const isValidForm = () => {
        if (page === 0) {
          return (formData.pin !== ""&&
          formData.type!=="" && formData.wantedLimit!=="") ;

        }  else if (page === 1) {
          return formData.documents.length > 0 && formData.agreeTerms ;
        }
        return true; // No validation for other pages
      };
      
      const {navigate}= useNavigation();
      const closeModal = () => {
        setIsModalOpen(false);
        navigate('/homepage');
      };
    
      
    
      const handleNextClick = () => {
        if (isValidForm()) {
          if (page === 1) {          
            setIsModalOpen(true);
          } else {
            setPage((currPage) => currPage + 1);
          }
        } else {
          alert("Please fill in all the required fields.");
        }
      };
    
      const handlePrevClick = () => {
        console.log(page);
        if (page === 1 ) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            pin:"",
            type:"",
            wantedLimit:""

          }));
        } 
        
        console.log(formData.documents.length);
        setPage((currPage) => currPage - 1);
      };
    
      const PageDisplay = () => {
        if (page === 0) {
        return <CreditCardPersonalInfo formData={formData} setFormData={setFormData} />;
        } 
         else {
        return <CreditCardAppDocs formData={formData} setFormData={setFormData} />;
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
         
              <div className="flex justify-between"> {(page===0)&&<div/>}
               {(page!==0) && <button
                  disabled={page === 0}
                  onClick={handlePrevClick}
                  className={`flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold ${
                    (page===0) ? "bg-gray-400 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"  }`}                >
                  <MdNavigateBefore className="mr-2" />
                  Prev
                </button>}
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
            
          </div>
          <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Set Reminder Modal"
  className="modal"
  overlayClassName="modal-overlay"
>
        <h2 className="text-2xl font-bold mb-4">Application Confirmation</h2>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">By clicking 'Submit,' you agree to the terms and conditions of the CreditCard Application request. Thank you for choosing our services!"</label>
         
          <button
            className="bg-green-500 text-white text-lg px-4 py-2 rounded-lg self-start"
            onClick={closeModal}
          >
            Submit
          </button>
        </div>
      </Modal>
        </div>
      );
    
}
export default CreditCardAppForm;