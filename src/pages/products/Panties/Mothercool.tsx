
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

const PantyMothercoolPage = () => {
  // Sample product data for Mothercool Panties
  const products = [
    {
      id: 1001,
      name: "MOTHERCOOL Cotton Panty",
      image: "/lovable-uploads/afa52506-1b2b-4a5a-91fa-d19e3f16bf32.jpg",
      mrp: 370,
      discountedPrice: 320,
      colors: ["Black", "White", "Skin"],
      photoCount: 3
    },
    {
      id: 1002,
      name: "MOTHERCOOL Seamless Comfort",
      image: "/lovable-uploads/TSPAD 0.jpg",
      mrp: 390,
      discountedPrice: 340,
      colors: ["Skin", "Black"],
      photoCount: 2
    },
    {
      id: 1003,
      name: "MOTHERCOOL Everyday Panty",
      image: "/lovable-uploads/TSPAD1.jpg",
      mrp: 350,
      discountedPrice: 300,
      colors: ["White", "Blue"],
      photoCount: 4
    },
    {
      id: 1004,
      name: "MOTHERCOOL Full Coverage",
      image: "/lovable-uploads/TSPAD 2.jpg",
      mrp: 410,
      discountedPrice: 360,
      colors: ["Red", "Black", "Skin"],
      photoCount: 3
    },
    {
      id: 1005,
      name: "MOTHERCOOL Lightweight Panty",
      image: "/lovable-uploads/TSPAD 3.jpg",
      mrp: 340,
      discountedPrice: 290,
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
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">MOTHERCOOL Panties Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              alt="MOTHERCOOL Panties Collection" 
              src="/lovable-uploads/afa52506-1b2b-4a5a-91fa-d19e3f16bf32.jpg" 
              className="w-full h-[400px] object-contain" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Premium MOTHERCOOL Panties</h2>
            <p className="text-gray-300 mb-6">
              The MOTHERCOOL collection is specially designed for new mothers, providing both comfort and functionality.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Button asChild className="bg-deepa-teal hover:bg-deepa-dark-teal text-black flex items-center gap-2 w-full md:w-auto">
                  <a href="/lovable-uploads/MOTHER COOL_panties.pdf" download="MCOOL.pdf">
                    <Download size={18} />
                    Download PDF
                  </a>
                </Button>
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

export default PantyMothercoolPage;
