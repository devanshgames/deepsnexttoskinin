
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-deepa-teal mb-4">
              Premium Hosiery Products for Your Business
            </h1>
            <p className="text-lg text-white mb-8">
              With over 30 years of experience, DEEPA HOSIERY is your trusted partner for high-quality wholesale lingerie and undergarments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-deepa-teal text-black hover:bg-opacity-90 px-8 py-6 text-lg"
                onClick={() => scrollToSection('products')}
              >
                Browse Products
              </Button>
              <Button 
                variant="outline" 
                className="border-deepa-teal text-deepa-teal hover:bg-deepa-teal hover:text-black px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-black p-4 rounded-lg shadow-lg border border-deepa-teal">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" 
                alt="DEEPA HOSIERY Business Display" 
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
