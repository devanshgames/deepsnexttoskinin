
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BeautyplusProductCard from '@/components/brands/BeautyplusProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';
import { Toaster } from "@/components/ui/toaster";

const CamisoleBeautyplusPage = () => {
  // Sample product data for BEAUTYPLUS Camisoles
  const products = [
    {
      id: 701,
      name: "BEAUTYPLUS Cotton Camisole",
      image: "/lovable-uploads/TSPAD1.jpg",
      mrp: 320,
      discountedPrice: 280,
      colors: ["Black", "White", "Skin"],
      photoCount: 3
    },
    {
      id: 702,
      name: "BEAUTYPLUS Seamless Cami",
      image: "/lovable-uploads/TSPAD 0.jpg",
      mrp: 350,
      discountedPrice: 300,
      colors: ["Skin", "Black"],
      photoCount: 2
    },
    {
      id: 703,
      name: "BEAUTYPLUS Everyday Camisole",
      image: "/lovable-uploads/FRONT.jpg",
      mrp: 280,
      discountedPrice: 240,
      colors: ["White", "Blue"],
      photoCount: 4
    },
    {
      id: 704,
      name: "BEAUTYPLUS Full Coverage",
      image: "/lovable-uploads/TSPAD 2.jpg",
      mrp: 380,
      discountedPrice: 320,
      colors: ["Red", "Black", "Skin"],
      photoCount: 3
    },
    {
      id: 705,
      name: "BEAUTYPLUS Lightweight Camisole",
      image: "/lovable-uploads/TSPAD 3.jpg",
      mrp: 300,
      discountedPrice: 250,
      colors: ["Pink", "White"],
      photoCount: 2
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link to="/products/camisole" className="text-deepa-teal hover:underline flex items-center">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Camisole Collection
          </Link>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">BEAUTYPLUS Camisole Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/TSPAD 0.jpg"
              alt="BEAUTYPLUS Camisole Collection"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Premium BEAUTYPLUS Camisoles</h2>
            <p className="text-gray-300 mb-6">
              Experience luxury and comfort with our BEAUTYPLUS camisole collection.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Button asChild className="bg-deepa-teal hover:bg-deepa-dark-teal text-black flex items-center gap-2 w-full md:w-auto">
                  <a href="#" download="BEAUTYPLUS_Camisole_Catalog.pdf">
                    <Download size={18} />
                    Download Product Catalog
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
            <BeautyplusProductCard 
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

export default CamisoleBeautyplusPage;
