import React from 'react';
import LoginImage from '../images/bank logo.png'
import Link from '../Components/Link';
import Footer from '../Components/Footer';
import MenuBar from '../Components/MenuBar';
const About = () => {
  return (
<div className="flex flex-col min-h-screen">  
    <MenuBar />
        <div className="max-w-3xl mx-auto py-8 px-4">
            <div className="flex items-center justify-center mb-8">
            <img src={LoginImage} alt="Lebo & Co. " className="w-24 h-auto" />
          </div>
          
          <h1 className="text-3xl font-bold mb-6">About Lebo &amp; Co. Online Banking</h1>
          <p className="mb-4">Lebo &amp; Co. is a modern and secure online banking system that provides convenient and reliable financial services to our customers.</p>

          <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
          <p className="mb-4">At Lebo &amp; Co. our mission is to empower individuals and businesses with seamless and innovative banking solutions. We aim to simplify financial management and provide a personalized banking experience to our customers.</p>

          <h2 className="text-xl font-semibold mt-6">Key Features</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure online banking with advanced encryption technology</li>
            <li>24/7 access to your accounts and transactions</li>
            <li>Easy fund transfers and payments</li>
            <li>Real-time balance and transaction updates</li>
            <li>Customizable alerts and notifications</li>
            <li>Multi-factor authentication for enhanced security</li>
            <li>Mobile banking app for convenient access on-the-go</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Our Commitment to Security</h2>
          <p className="mb-4">At Lebo &amp; Co. we prioritize the security and privacy of our customers' information. We employ industry-standard security measures to protect your data and ensure that your online banking experience is safe and secure.</p>

          <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
          <p className="mb-4">If you have any questions, feedback, or need assistance, our dedicated customer support team is available to assist you. Contact us at  <Link to="/contact" className="text-black"> Contact Us</Link>.</p>
        </div>
        <div className="mt-auto">
        <Footer />
      </div>
  </div>
  );
};

export default About;
