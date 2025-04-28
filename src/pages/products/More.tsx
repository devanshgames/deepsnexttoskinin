
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const MorePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">More Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/Photoroom-20250427_133242.pngauto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
              alt="More Products"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Explore More Collections</h2>
            <p className="text-gray-300 mb-6">
              Discover our complete range of products.
              From everyday essentials to special occasion items.
            </p>
            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Wide variety of styles
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Premium quality products
              </li>
              <li className="flex items-center">
                <ArrowRight className="text-deepa-teal mr-2" size={16} />
                Bulk order options
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MorePage;
