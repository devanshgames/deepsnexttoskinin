
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const offers = [{
  id: 1,
  title: "Summer Collection Sale",
  description: "30% off on our latest collection",
  image: "/public/lovable-uploads/e015dfa2-dec9-409a-9bce-35b731c654ca.png",
  badge: "30% OFF"
}, {
  id: 2,
  title: "Bulk Order Special",
  description: "Buy 100 get 20 free on selected items",
  image: "/public/lovable-uploads/2cf4d015-43c5-43c0-9544-0b2e8a6944df.png",
  badge: "Special Offer"
}, {
  id: 3,
  title: "New Arrivals",
  description: "Shop our latest products",
  image: "/public/lovable-uploads/d8733e29-8424-4cff-84df-78bd3cde30db.png",
  badge: "New"
}];

const RecentOffersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919165004768";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20special%20offers.`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 bg-black transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-deepa-teal mb-8 text-center">
          Special Offers
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {offers.map((offer, idx) => (
              <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className={`p-2 animate-fade-in`} 
                  style={{
                    animationDelay: `${0.18 * idx}s`,
                    animationFillMode: "backwards"
                  }}
                >
                  <Card className="bg-black border border-deepa-teal/30 overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="relative h-64">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="w-full h-full object-contain"
                      />
                      <Badge className="absolute top-2 right-2 bg-deepa-teal text-black font-semibold">
                        {offer.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{offer.title}</h3>
                      <p className="text-gray-300 text-sm">{offer.description}</p>
                      <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block mt-4 w-full bg-deepa-teal text-black py-2 rounded font-semibold hover:bg-deepa-dark-teal transition-colors text-center animate-fade-in"
                        style={{
                          animationDelay: `${0.3 + 0.18 * idx}s`
                        }}
                      >
                        Contact for Details
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 bg-deepa-teal text-black border-none hover:bg-deepa-dark-teal" />
          <CarouselNext className="right-1 bg-deepa-teal text-black border-none hover:bg-deepa-dark-teal" />
        </Carousel>
      </div>
    </section>
  );
};

export default RecentOffersSection;

