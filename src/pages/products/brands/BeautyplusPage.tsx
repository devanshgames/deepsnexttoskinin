
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const BeautyplusPage = () => {
  // Sample product data for BeautyPlus
  const products = [
    {
      id: 201,
      name: "BEAUTYPLUS Comfort Fit",
      image: "/lovable-uploads/FRONT.jpg",
      mrp: 550,
      discountedPrice: 450,
      colors: ["Black", "White", "Skin"],
      photoCount: 4
    },
    {
      id: 202,
      name: "BEAUTYPLUS Seamless",
      image: "/lovable-uploads/TSPAD1.jpg",
      mrp: 650,
      discountedPrice: 520,
      colors: ["Skin", "Black"],
      photoCount: 3
    },
    {
      id: 203,
      name: "BEAUTYPLUS Everyday",
      image: "/lovable-uploads/TSPAD 0.jpg",
      mrp: 500,
      discountedPrice: 430,
      colors: ["White", "Pink"],
      photoCount: 4
    },
    {
      id: 204,
      name: "BEAUTYPLUS Full Support",
      image: "/lovable-uploads/TSPAD 2.jpg",
      mrp: 700,
      discountedPrice: 580,
      colors: ["Red", "Black", "Skin"],
      photoCount: 5
    },
    {
      id: 205,
      name: "BEAUTYPLUS Lightweight",
      image: "/lovable-uploads/TSPAD 3.jpg",
      mrp: 480,
      discountedPrice: 400,
      colors: ["Pink", "White"],
      photoCount: 3
    }
  ];

  return <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link to="/products/bra" className="text-deepa-teal hover:underline flex items-center">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Bra Collection
          </Link>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">BEAUTYPLUS APPARELS Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img alt="BEAUTYPLUS APPARELS Collection" src="/lovable-uploads/b+cover.jpg" className="w-full h-[700px] object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Premium BEAUTYPLUS APPARELS Bras</h2>
            <p className="text-gray-300 mb-6">
              Discover our luxurious BEAUTYPLUS APPARELS collection, designed for ultimate comfort and style.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Button asChild className="bg-deepa-teal hover:bg-deepa-dark-teal text-black flex items-center gap-2 w-full md:w-auto">
                  <a href="/lovable-uploads/b+ samples.pdf" download="BEAUTYPLUS.pdf">
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
            <ProductCard 
              key={product.id} 
              {...product}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>;
};
export default BeautyplusPage;
