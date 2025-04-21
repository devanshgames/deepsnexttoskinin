
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const offers = [
  {
    id: 1,
    title: "Premium Cotton Collection",
    description: "30% off on bulk orders of Premium Cotton Undergarments",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    badge: "Limited Time"
  },
  {
    id: 2,
    title: "Summer Essentials",
    description: "Buy 100 get 20 free on selected Summer Collection items",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    badge: "Bestseller"
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Special introductory pricing on our latest products",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
    badge: "New"
  }
];

const RecentOffersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919165004768"; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20special%20offers.`;

  useEffect(() => {
    // Set the animation to start after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-12 bg-black transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-deepa-teal mb-8 text-center">
          Recent Special Offers
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {offers.map((offer, idx) => (
              <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
                <div className={`p-2 animate-fade-in`} style={{ animationDelay: `${0.18 * idx}s`, animationFillMode: "backwards" }}>
                  <Card className="bg-black border border-deepa-teal/30 overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="w-full h-full object-cover"
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
                        style={{ animationDelay: `${0.3 + 0.18 * idx}s` }}
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
