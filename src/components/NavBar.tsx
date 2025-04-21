
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleCartClick = () => {
    toast({
      title: "Minimum Order Quantity",
      description: "Please order a minimum of 12 pieces per product.",
      variant: "default",
    });
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
          <a href="#" onClick={() => scrollToSection('products')} className="text-deepa-teal hover:text-white transition-colors">Products</a>
          <a href="#" onClick={() => scrollToSection('about')} className="text-deepa-teal hover:text-white transition-colors">About</a>
          <a href="#" onClick={() => scrollToSection('testimonials')} className="text-deepa-teal hover:text-white transition-colors">Testimonials</a>
          <a href="#" onClick={() => scrollToSection('why-us')} className="text-deepa-teal hover:text-white transition-colors">Why Us</a>
          <a href="#" onClick={() => scrollToSection('contact')} className="text-deepa-teal hover:text-white transition-colors">Contact</a>
        </nav>
        
        <Button 
          className="bg-deepa-teal text-black hover:bg-opacity-90 hidden md:flex items-center gap-2"
          onClick={handleCartClick}
        >
          <ShoppingCart size={16} />
          Cart
        </Button>
        
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
              <a href="#" onClick={() => scrollToSection('products')} className="text-deepa-teal hover:text-white transition-colors py-2">Products</a>
              <a href="#" onClick={() => scrollToSection('about')} className="text-deepa-teal hover:text-white transition-colors py-2">About</a>
              <a href="#" onClick={() => scrollToSection('testimonials')} className="text-deepa-teal hover:text-white transition-colors py-2">Testimonials</a>
              <a href="#" onClick={() => scrollToSection('why-us')} className="text-deepa-teal hover:text-white transition-colors py-2">Why Us</a>
              <a href="#" onClick={() => scrollToSection('contact')} className="text-deepa-teal hover:text-white transition-colors py-2">Contact</a>
              <Button 
                className="bg-deepa-teal text-black hover:bg-opacity-90 w-full flex items-center justify-center gap-2 mt-2"
                onClick={handleCartClick}
              >
                <ShoppingCart size={16} />
                Cart
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
