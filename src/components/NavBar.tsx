
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  // Add a scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-black shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo + Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <div className="mr-2 w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/LOGO.png" 
                alt="Deep's Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h1 className="text-lg md:text-xl font-display font-medium text-deepa-teal">
              DEEPA <span className="text-white">HOSIERY</span>
            </h1>
          </Link>
        </div>
        
        {/* Main nav - desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-deepa-teal hover:text-white transition-colors" onClick={scrollToTop}>Home</Link>
          <Link to="/products" className="text-deepa-teal hover:text-white transition-colors" onClick={scrollToTop}>Products</Link>
          <Link to="/about" className="text-deepa-teal hover:text-white transition-colors" onClick={scrollToTop}>About</Link>
          <Link to="/why-us" className="text-deepa-teal hover:text-white transition-colors" onClick={scrollToTop}>Why Us</Link>
          <Link to="/contact" className="text-deepa-teal hover:text-white transition-colors" onClick={scrollToTop}>Contact</Link>
        </nav>
        
        {/* Cart Button - desktop */}
        <Link to="/cart" className="hidden md:block" onClick={scrollToTop}>
          <Button 
            className="bg-deepa-teal text-black hover:bg-opacity-90 flex items-center gap-2 relative"
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

        {/* Small Cart Icon - mobile */}
        <Link to="/cart" className="md:hidden absolute right-14 top-1/2 -translate-y-1/2 z-20" onClick={scrollToTop}>
          <Button 
            variant="ghost"
            className="relative text-deepa-teal p-2"
          >
            <ShoppingCart size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>

        {/* Hamburger menu - only on mobile */}
        <Button 
          variant="ghost" 
          className="md:hidden text-deepa-teal ml-2 relative z-30" 
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => {setMobileMenuOpen(false); scrollToTop();}} className="text-deepa-teal hover:text-white transition-colors py-2">Home</Link>
              <Link to="/products" onClick={() => {setMobileMenuOpen(false); scrollToTop();}} className="text-deepa-teal hover:text-white transition-colors py-2">Products</Link>
              <Link to="/about" onClick={() => {setMobileMenuOpen(false); scrollToTop();}} className="text-deepa-teal hover:text-white transition-colors py-2">About</Link>
              <Link to="/why-us" onClick={() => {setMobileMenuOpen(false); scrollToTop();}} className="text-deepa-teal hover:text-white transition-colors py-2">Why Us</Link>
              <Link to="/contact" onClick={() => {setMobileMenuOpen(false); scrollToTop();}} className="text-deepa-teal hover:text-white transition-colors py-2">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
