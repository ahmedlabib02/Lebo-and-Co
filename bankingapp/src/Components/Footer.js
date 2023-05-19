
import Link from './Link';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-between">
            <div className="w-full sm:w-auto mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="/about">About</a>
                </li>
                <li className="mb-2">
                  <a href="/contact">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-4">Get Connected</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com">
                  <FaFacebook className="text-white hover:text-blue-500" size={24} />
                </a>
                <a href="https://twitter.com">
                  <FaTwitter className="text-white hover:text-blue-500" size={24} />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedin className="text-white hover:text-blue-500" size={24} />
                </a>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-sm">
                123 Bank Street<br />
                City, State 12345<br />
                Phone: 123-456-7890<br />
                Email: info@bankwebsite.com
              </p>
            </div>
          </div>
          <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 text-xs text-center">
            <p>&copy; 2023 Bank Website. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer;
