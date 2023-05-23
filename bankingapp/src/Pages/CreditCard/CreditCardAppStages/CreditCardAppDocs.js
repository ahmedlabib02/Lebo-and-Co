import React, { useState } from 'react';
function CreditCardAppDocs({ formData, setFormData }){

      const handleTermsChange = (event) => {
        setFormData({...formData,agreeTerms: true});
      };
    
      const handleFileUpload = (event) => {
        const files = event.target.files;
        setFormData({...formData,
          documents: Array.from(files)});
      };
    
      return (
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Documents Information</h2>
          <p>Upload any required documents for the loan application.</p>
          <div className="mb-4">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            />
          </div>
          {formData.documents.length > 0 && (
            <div>
              <h4 className="font-bold mb-2">Uploaded Files:</h4>
              <ul>
                {formData.documents.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleTermsChange}
                className="mr-2"
              />
              <span>I accept the terms and conditions</span>
            </label>
          </div>
        </div>
      );
    }
    
    
    

export default CreditCardAppDocs;