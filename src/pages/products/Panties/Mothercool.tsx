import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const PantyMothercoolPage = () => {
  return <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link to="/products/panties" className="text-deepa-teal hover:underline flex items-center">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Panties Collection
          </Link>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">MOTHERCOOL Panties Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img alt="MOTHERCOOL Panties Collection" src="/lovable-uploads/afa52506-1b2b-4a5a-91fa-d19e3f16bf32.jpg" className="w-full h-[400px] object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Premium MOTHERCOOL Panties</h2>
            <p className="text-gray-300 mb-6">
              The MOTHERCOOL collection is specially designed for new mothers, providing both comfort and functionality.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                <a href="/lovable-uploads/MOTHER COOL_panties.pdf"  download="MCOOL.pdf" className="hover:text-deepa-teal transition-colors">Download PDF</a>
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Premium cotton material
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Available in multiple sizes
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Comfortable fit
              </li>
              
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PantyMothercoolPage;
