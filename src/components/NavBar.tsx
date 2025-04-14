
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, X, Menu } from 'lucide-react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <a onClick={() => scrollToSection('products')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Products</a>
          <a onClick={() => scrollToSection('about')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">About</a>
          <a onClick={() => scrollToSection('testimonials')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Testimonials</a>
          <a onClick={() => scrollToSection('why-us')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Why Us</a>
          <a onClick={() => scrollToSection('contact')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Contact</a>
        </nav>
        
        <Button 
          className="bg-deepa-teal text-black hover:bg-opacity-90 hidden md:flex items-center gap-2"
          onClick={() => scrollToSection('contact')}
        >
          <PhoneCall size={16} />
          Contact Us
        </Button>
        
        <Button 
          variant="ghost" 
          className="md:hidden text-deepa-teal" 
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a onClick={() => scrollToSection('products')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Products</a>
              <a onClick={() => scrollToSection('about')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">About</a>
              <a onClick={() => scrollToSection('testimonials')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Testimonials</a>
              <a onClick={() => scrollToSection('why-us')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Why Us</a>
              <a onClick={() => scrollToSection('contact')} className="text-deepa-teal hover:text-white transition-colors cursor-pointer">Contact</a>
            </nav>
            <Button 
              className="bg-deepa-teal text-black hover:bg-opacity-90 mt-4 w-full flex items-center justify-center gap-2"
              onClick={() => scrollToSection('contact')}
            >
              <PhoneCall size={16} />
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
