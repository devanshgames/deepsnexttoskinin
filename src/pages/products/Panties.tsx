
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const PantiesPage = () => {
  return <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">PANTIES Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img src="/lovable-uploads/IMG_20250428_132532.jpg" alt="Panties Collection" className="w-full h-[400px] object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Our Brands</h2>
            <p className="text-gray-300 mb-6">
              Explore our premium collection of comfortable and stylish panties from our various brands.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link to="/products/panties/rani" className="flex items-center group hover:text-deepa-teal transition-colors">
                  <ArrowRight className="text-deepa-teal mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                  RANI
                </Link>
              </li>
              <li>
                <Link to="/products/panties/bodica" className="flex items-center group hover:text-deepa-teal transition-colors">
                  <ArrowRight className="text-deepa-teal mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                  BODICA
                </Link>
              </li>
              <li>
                <Link to="/products/panties/beautyplus" className="flex items-center group hover:text-deepa-teal transition-colors">
                  <ArrowRight className="text-deepa-teal mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                  BEAUTYPLUS APPARELS
                </Link>
              </li>
              <li>
                <Link to="/products/panties/mothercool" className="flex items-center group hover:text-deepa-teal transition-colors">
                  <ArrowRight className="text-deepa-teal mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                  MOTHERCOOL
                </Link>
              </li>
              <li>
                <Link to="/products/panties/deeps" className="flex items-center group hover:text-deepa-teal transition-colors">
                  <ArrowRight className="text-deepa-teal mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                  DEEP'S
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PantiesPage;
