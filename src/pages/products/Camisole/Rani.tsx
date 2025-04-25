
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowRight, PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CamisoleRaniPage = () => {
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
        
        <h1 className="text-4xl font-display font-bold text-deepa-teal mb-8">RANI Camisole Collection</h1>
        
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <PackageOpen className="text-deepa-teal mb-4" size={64} />
          <h2 className="text-2xl font-display font-semibold text-deepa-teal mb-4">Yet to Launch!</h2>
          <p className="text-gray-300 max-w-md">
            Stay tuned! Our RANI Camisole collection is being crafted with care and will be available soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CamisoleRaniPage;
