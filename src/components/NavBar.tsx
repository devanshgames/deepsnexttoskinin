
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="bg-black shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
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
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-deepa-teal hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-deepa-teal hover:text-white transition-colors">About</Link>
          <Link to="/testimonials" className="text-deepa-teal hover:text-white transition-colors">Testimonials</Link>
          <Link to="/why-us" className="text-deepa-teal hover:text-white transition-colors">Why Us</Link>
          <Link to="/contact" className="text-deepa-teal hover:text-white transition-colors">Contact</Link>
        </nav>
        
        <Link to="/cart">
          <Button 
            className="bg-deepa-teal text-black hover:bg-opacity-90 hidden md:flex items-center gap-2 relative"
          >
            <ShoppingCart size={16} />
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
        
        <Button 
          variant="ghost" 
          className="md:hidden text-deepa-teal" 
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-deepa-teal hover:text-white transition-colors py-2">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-deepa-teal hover:text-white transition-colors py-2">About</Link>
              <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="text-deepa-teal hover:text-white transition-colors py-2">Testimonials</Link>
              <Link to="/why-us" onClick={() => setMobileMenuOpen(false)} className="text-deepa-teal hover:text-white transition-colors py-2">Why Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-deepa-teal hover:text-white transition-colors py-2">Contact</Link>
              <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="bg-deepa-teal text-black hover:bg-opacity-90 w-full flex items-center justify-center gap-2 mt-2 relative"
                >
                  <ShoppingCart size={16} />
                  Cart
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
