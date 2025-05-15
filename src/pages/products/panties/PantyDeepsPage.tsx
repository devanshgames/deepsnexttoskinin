
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';
import { Toaster } from "@/components/ui/toaster";

const PantyDeepsPage = () => {
  // Sample product data for Deep's Panties
  const products = [
    {
      id: 601,
      name: "DEEP'S Cotton Panty",
      image: "/lovable-uploads/FRONT.jpg",
      mrp: 290,
      discountedPrice: 240,
      colors: ["Black", "White", "Skin"],
      photoCount: 3
    },
    {
      id: 602,
      name: "DEEP'S Seamless Panty",
      image: "/lovable-uploads/TSPAD1.jpg",
      mrp: 320,
      discountedPrice: 280,
      colors: ["Skin", "Black"],
      photoCount: 2
    },
    {
      id: 603,
      name: "DEEP'S Everyday Comfort",
      image: "/lovable-uploads/TSPAD 0.jpg",
      mrp: 280,
      discountedPrice: 230,
      colors: ["White", "Blue"],
      photoCount: 4
    },
    {
      id: 604,
      name: "DEEP'S Full Coverage",
      image: "/lovable-uploads/TSPAD 2.jpg",
      mrp: 350,
      discountedPrice: 299,
      colors: ["Red", "Black", "Skin"],
      photoCount: 3
    },
    {
      id: 605,
      name: "DEEP'S Lightweight Panty",
      image: "/lovable-uploads/TSPAD 3.jpg",
      mrp: 260,
      discountedPrice: 220,
      colors: ["Pink", "White"],
      photoCount: 2
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link to="/products/panties" className="text-deepa-teal hover:underline flex items-center">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Panties Collection
          </Link>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">DEEP'S Panties Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/FRONT.jpg" 
              alt="DEEP'S Panties Collection" 
              className="w-full h-[400px] object-contain" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Premium DEEP'S Panties</h2>
            <p className="text-gray-300 mb-6">
              Experience superior comfort with our DEEP'S panties collection.
            </p>
            <ul className="space-y-4 text-gray-300">
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

        <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              {...product}
            />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
      <Toaster />
    </div>
  );
};

export default PantyDeepsPage;
