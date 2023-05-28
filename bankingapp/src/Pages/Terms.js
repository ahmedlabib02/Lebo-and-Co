import React from 'react';
import Link from '../Components/Link';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';
const Terms = () => {
  return (
  <div className="flex flex-col min-h-screen">
     <MenuBar />
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Effective Date: 5/05/2023</p>

        <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing or using the Lebo &amp; Co Online Banking System, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

        <h2 className="text-xl font-semibold mt-6">2. User Eligibility</h2>
        <p className="mb-4">To use the Service, you must be at least 18 years old or the legal age of majority in your jurisdiction...</p>

        <h2 className="text-xl font-semibold mt-6">3. Account Registration and Security</h2>
        <p className="mb-4">a. To access the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated.</p>
        <p className="mb-4">b. You are responsible for maintaining the security and confidentiality of your account credentials, including your username and password. You agree not to share your account credentials with any third party or allow unauthorized access to your account.</p>
        <p className="mb-4">c. You are solely responsible for any activities that occur under your account. Lebo &amp; Co shall not be liable for any loss or damage arising from unauthorized access to or use of your account.</p>

        <h2 className="text-xl font-semibold mt-6">4. Use of the Service</h2>
  <p className="mb-4">a. You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not use the Service to engage in any activity that violates applicable laws, regulations, or the rights of others.</p>
  <p className="mb-4">b. You agree not to attempt to gain unauthorized access to any part of the Service, interfere with its functioning, or disrupt the Service in any way.</p>
  <p className="mb-4">c. Lebo &amp; Co reserves the right to modify, suspend, or discontinue the Service, or any part thereof, at any time without prior notice.</p>

  <h2 className="text-xl font-semibold mt-6">5. Privacy and Data Security</h2>
  <p className="mb-4">a. Lebo &amp; Co respects your privacy and is committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and safeguard your data.</p>
  <p className="mb-4">b. You acknowledge and agree that the security of your data transmitted through the internet cannot be guaranteed. Lebo &amp; Co shall not be liable for any unauthorized access, disclosure, or loss of your data.</p>

  <h2 className="text-xl font-semibold mt-6">6. Intellectual Property Rights</h2>
  <p className="mb-4">a. The Service, including its design, features, and content, is owned by Lebo &amp; Co and is protected by intellectual property laws. You agree not to reproduce, modify, distribute, or create derivative works based on the Service without our prior written consent.</p>
  <p className="mb-4">b. Lebo &amp; Co grants you a limited, non-exclusive, non-transferable, and revocable license to use the Service for personal, non-commercial purposes only.</p>

  <h2 className="text-xl font-semibold mt-6">7. Limitation of Liability</h2>
  <p className="mb-4">a. Lebo &amp; Co shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with your use of the Service, even if we have been advised of the possibility of such damages.</p>
  <p className="mb-4">b. In no event shall Lebo &amp; Co's total liability to you for all claims arising out of or in connection with the Service exceed the amount you have paid, if any, for accessing the Service.</p>


  <h2 className="text-xl font-semibold mt-6">8. Indemnification</h2>
  <p className="mb-4">You agree to indemnify, defend, and hold harmless Lebo &amp; Co and its officers, directors, employees, and agents from any claims, liabilities, damages, costs, or expenses (including attorneys' fees) arising out of or related to your use of the Service or any violation of these Terms.</p>



        <h2 className="text-xl font-semibold mt-6">9. Contact Information</h2>
        <p className="mb-4">If you have any questions or concerns regarding these Terms, please contact us at 123-456-7890 or visit 
                    <Link to="/contact" className="text-black"> Contact Us</Link>
                  </p>

        <p className="mt-8">By using the Lebo &amp; Co. Online Banking System, you acknowledge that you have read, understood, and agreed to these Terms of Service.</p>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
</div>
  );
};

export default Terms;
