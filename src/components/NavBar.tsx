
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-display font-bold text-deepa-dark-purple">
            DEEPA <span className="text-deepa-purple">HOSIERY</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-gray-700 hover:text-deepa-purple transition-colors">Products</a>
          <a href="#about" className="text-gray-700 hover:text-deepa-purple transition-colors">About</a>
          <a href="#testimonials" className="text-gray-700 hover:text-deepa-purple transition-colors">Testimonials</a>
          <a href="#why-us" className="text-gray-700 hover:text-deepa-purple transition-colors">Why Us</a>
          <a href="#contact" className="text-gray-700 hover:text-deepa-purple transition-colors">Contact</a>
        </nav>
        
        <Button className="bg-deepa-purple hover:bg-deepa-dark-purple hidden md:flex items-center gap-2">
          <PhoneCall size={16} />
          Contact Us
        </Button>
        
        <Button variant="ghost" className="md:hidden" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
