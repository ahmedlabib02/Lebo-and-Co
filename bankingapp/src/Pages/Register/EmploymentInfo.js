import { useState } from 'react';

function EmploymentInfo({ formData, setFormData }) {
  const [employmentStatus, setEmploymentStatus] = useState('');

  const handleEmploymentStatusChange = (event) => {
    setEmploymentStatus(event.target.value);

    // Clear employment related fields if user selects "No"
    if (event.target.value === 'No') {
      setFormData({
        ...formData,
        employerName: '',
        jobTitle: '',
        monthlyIncome: '',
      });
    }
  };

  const handleEmployerNameChange = (event) => {
    setFormData({ ...formData, employerName: event.target.value });
  };

  const handleJobTitleChange = (event) => {
    setFormData({ ...formData, jobTitle: event.target.value });
  };

  const handleMonthlyIncomeChange = (event) => {
    setFormData({ ...formData, monthlyIncome: event.target.value });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Are you currently employed?
        </label>
        <div>
          <label className="mr-8">
            <input
              type="radio"
              id="employmentStatusYes"
              name="employmentStatus"
              value="Yes"
              checked={employmentStatus === 'Yes'}
              onChange={handleEmploymentStatusChange}
              className="w-6 h-6"
            />
            Yes
          </label>
          <label className="mr-8">
            <input
              type="radio"
              id="employmentStatusNo"
              name="employmentStatus"
              value="No"
              checked={employmentStatus === 'No'}
              onChange={handleEmploymentStatusChange}
              className="w-6 h-6"
            />
            No
          </label>
        </div>
      </div>

      {employmentStatus === 'Yes' && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Employer Name:
            </label>
            <input
              type="text"
              id="employerName"
              value={formData.employerName}
              onChange={handleEmployerNameChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">
              Job Title:
            </label>
            <input
              type="text"
              id="jobTitle"
              value={formData.jobTitle}
              onChange={handleJobTitleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="monthlyIncome" className="block text-gray-700 font-bold mb-2">
              Monthly Income:
            </label>
            <input
              type="number"
              id="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleMonthlyIncomeChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmploymentInfo;
