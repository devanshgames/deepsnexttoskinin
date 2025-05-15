
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const MorePage = () => {
  // Sample product data for more products
  const products = [
    {
      id: 801,
      name: "Children's Undergarment",
      image: "/lovable-uploads/Photoroom-20250427_133242.png",
      mrp: 280,
      discountedPrice: 240,
      colors: ["Blue", "Pink", "White"],
      photoCount: 3
    },
    {
      id: 802,
      name: "Night Wear Set",
      image: "/lovable-uploads/TSPAD1.jpg",
      mrp: 650,
      discountedPrice: 520,
      colors: ["Skin", "Black"],
      photoCount: 4
    },
    {
      id: 803,
      name: "Cotton Socks",
      image: "/lovable-uploads/TSPAD 0.jpg",
      mrp: 150,
      discountedPrice: 120,
      colors: ["White", "Black"],
      photoCount: 2
    },
    {
      id: 804,
      name: "Leggings",
      image: "/lovable-uploads/TSPAD 2.jpg",
      mrp: 420,
      discountedPrice: 350,
      colors: ["Black", "Grey", "Navy"],
      photoCount: 3
    },
    {
      id: 805,
      name: "Sports Wear",
      image: "/lovable-uploads/TSPAD 3.jpg",
      mrp: 590,
      discountedPrice: 480,
      colors: ["Black", "Blue"],
      photoCount: 4
    }
  ];

  return <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">More Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img src="/lovable-uploads/Photoroom-20250427_133242.png" alt="More Products" className="w-full h-[400px] object-scale-down" />
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
export default MorePage;
