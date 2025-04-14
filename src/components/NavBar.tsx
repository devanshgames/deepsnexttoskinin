
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="bg-black shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 w-12 h-12 flex items-center justify-center">
            <img 
              src="/lovable-uploads/b7336af0-7fbd-46ab-a96d-203b091adb25.png" 
              alt="Deep's Logo" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-display font-bold text-deepa-teal">
            DEEPA <span className="text-white">HOSIERY</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-deepa-teal hover:text-white transition-colors">Products</a>
          <a href="#about" className="text-deepa-teal hover:text-white transition-colors">About</a>
          <a href="#testimonials" className="text-deepa-teal hover:text-white transition-colors">Testimonials</a>
          <a href="#why-us" className="text-deepa-teal hover:text-white transition-colors">Why Us</a>
          <a href="#contact" className="text-deepa-teal hover:text-white transition-colors">Contact</a>
        </nav>
        
        <Button className="bg-deepa-teal text-black hover:bg-opacity-90 hidden md:flex items-center gap-2">
          <PhoneCall size={16} />
          Contact Us
        </Button>
        
        <Button variant="ghost" className="md:hidden text-deepa-teal" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
