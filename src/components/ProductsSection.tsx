import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const logoUrl = "https://images.unsplash.com/photo-logo.png?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3";
const products = [{
  id: 1,
  name: "BRA",
  image: "/lovable-uploads/Photoroom-20250427_131412.png?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  category: "Undergarments",
  isSpecialOffer: true,
  link: "/products/bra"
}, {
  id: 2,
  name: "PANTIES",
  image: "/lovable-uploads/Photoroom-20250427_132024.png?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  category: "Lingerie",
  isSpecialOffer: false,
  link: "/products/panties"
}, {
  id: 3,
  name: "CAMISOLE",
  image: "/lovable-uploads/Photoroom-20250427_132845.png?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  category: "Innerwear",
  isSpecialOffer: true,
  link: "/products/camisole"
}, {
  id: 4,
  name: "MORE",
  image: "/lovable-uploads/Photoroom-20250427_133242.png?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
  category: "Children",
  isSpecialOffer: false,
  link: "/products/more"
}];
const ProductsSection = () => {
  // Add a scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return <section id="products" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          
        </div>
        <h2 className="section-title text-center mx-auto mb-12 text-white">
          Our Products
        </h2>
        <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Browse our premium range of hosiery products. We offer substantial discounts for bulk orders - contact us for pricing details.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => <Card key={product.id} className={`product-card animate-fade-in transition-all duration-700`} style={{
          animationDelay: `${0.12 * idx}s`,
          animationFillMode: "backwards"
        }}>
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-contain" />
                {product.isSpecialOffer && <Badge className="absolute top-3 right-3 bg-deepa-teal">Special Offer</Badge>}
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <Link to={product.link} onClick={scrollToTop}>
                  <Button className="w-full mt-4 bg-deepa-teal text-black hover:bg-opacity-90 flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 bg-deepa-teal/10 p-8 rounded-lg">
          <h3 className="text-2xl font-display font-semibold text-deepa-dark-teal mb-4">Bulk Order Benefits</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="bg-deepa-teal text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
              <p>Volume discounts for larger orders</p>
            </li>
            <li className="flex items-start">
              <span className="bg-deepa-teal text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
              <p>Customized packaging available</p>
            </li>
            <li className="flex items-start">
              <span className="bg-deepa-teal text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
              <p>Flexible payment options</p>
            </li>
            <li className="flex items-start">
              <span className="bg-deepa-teal text-black rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
              <p>Priority delivery scheduling</p>
            </li>
          </ul>
          <p className="mt-6 text-deepa-dark-teal font-semibold">Contact us for special bulk pricing and offers!</p>
        </div>
      </div>
    </section>;
};
export default ProductsSection;
