import React from 'react';
import Link from '../Components/Link';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">  
     <MenuBar /> 
        <div className="max-w-3xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">Effective Date: 5/05/2023</p>

          <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
          <p className="mb-4">a. Personal Information: We may collect personal information such as your name, email address, and contact details when you sign up for our services or communicate with us.</p>
          <p className="mb-4">b. Usage Information: We may collect information about how you use our website or interact with our services, including IP address, browser type, and pages visited.</p>

          <h2 className="text-xl font-semibold mt-6">2. Use of Information</h2>
          <p className="mb-4">a. We may use the collected information to provide, maintain, and improve our services, as well as to respond to inquiries and communicate with you.</p>
          <p className="mb-4">b. We may use your information to personalize your experience, analyze trends, and optimize our website and services.</p>

          <h2 className="text-xl font-semibold mt-6">3. Information Sharing</h2>
    <p className="mb-4">a. We may share your information with third-party service providers that help us with various aspects of our business, such as hosting, data analysis, and customer support.</p>
    <p className="mb-4">b. We may also share your information when required by law, to protect our rights, or to respond to legal requests.</p>

    <h2 className="text-xl font-semibold mt-6">4. Cookies and Similar Technologies</h2>
    <p className="mb-4">a. We use cookies and similar technologies to collect information and enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
    <p className="mb-4">b. Third-party advertisers and analytics providers may also use cookies on our website, and their practices are subject to their own privacy policies.</p>

    <h2 className="text-xl font-semibold mt-6">5. International Data Transfer</h2>
    <p className="mb-4">a. We may transfer and process your information in countries outside of your own. By using our services, you consent to the transfer of your information to these countries.</p>
    <p className="mb-4">b. We will take appropriate measures to ensure that your information receives an adequate level of protection in accordance with applicable data protection laws.</p>
          <h2 className="text-xl font-semibold mt-6">6. Data Security</h2>
          <p className="mb-4">a. We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>
          <p className="mb-4">b. However, please note that no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your information.</p>

          <h2 className="text-xl font-semibold mt-6">7. Third-Party Links</h2>
          <p className="mb-4">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage you to review their privacy policies before providing any personal information.</p>

          <h2 className="text-xl font-semibold mt-6">8. Changes to this Privacy Policy</h2>
          <p className="mb-4">We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the updated Privacy Policy on our website. Your continued use of our services after the changes constitute your acceptance of the updated Privacy Policy.</p>

          <h2 className="text-xl font-semibold mt-6">10. Contact Information</h2>
          <p className="mb-4">If you have any questions or concerns regarding these Terms, please contact us at 123-456-7890 or visit 
                      <Link to="/contact" className="text-black"> Contact Us</Link>
                    </p>
        </div>
        <div className="mt-auto">
        <Footer />
      </div>
   </div>
  );
};

export default PrivacyPolicy;
