import OtpInput from 'react-otp-input';

function OTPandConfirmation({ formData, setFormData }) {
  const handleChange = (otp) => {
    setFormData({ ...formData, otp });
  };

  return (
    <div>
      <h2 className="mb-4">To confirm your payment, we sent an SMS containing OTP to the number ending in 1773</h2>
      <OtpInput
        value={formData.otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        renderInput={(props, index) => (
          <input
            {...props}
            className="otp-input"
            style={{
              border: '1px solid #000',
              borderRadius: '8px',
              width: '54px',
              height: '54px',
              fontSize: '20px', // Adjust the font size as needed
              color: '#000',
              fontWeight: '400',
              caretColor: 'blue',
              textAlign: 'center',
            }}
            key={index}
          />
        )}
      />
    </div>
  );
}

export default OTPandConfirmation;
