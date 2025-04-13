
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-bold mb-4">
              DEEPA <span className="text-deepa-teal">HOSIERY</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted wholesale partner for premium hosiery products. With over 30 years of experience, 
              we provide quality undergarments and lingerie for businesses across India.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block text-white">Address</span>
                123 Business District, Mumbai, Maharashtra, India
              </li>
              <li className="text-gray-300">
                <span className="block text-white">Phone</span>
                +91 9876543210
              </li>
              <li className="text-gray-300">
                <span className="block text-white">Email</span>
                contact@deepahosiery.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DEEPA HOSIERY. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
