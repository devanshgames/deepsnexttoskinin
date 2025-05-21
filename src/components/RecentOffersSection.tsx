
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from "@/hooks/use-toast";

const offers = [{
  id: 1,
  title: "Summer Collection Sale",
  description: "30% off on our latest collection",
  image: "/lovable-uploads/e015dfa2-dec9-409a-9bce-35b731c654ca.png",
  badge: "30% OFF"
}, {
  id: 2,
  title: "Bulk Order Special",
  description: "Buy 100 get 20 free on selected items",
  image: "/lovable-uploads/2cf4d015-43c5-43c0-9544-0b2e8a6944df.png",
  badge: "Special Offer"
}, {
  id: 3,
  title: "New Arrivals",
  description: "Shop our latest products",
  image: "/lovable-uploads/d8733e29-8424-4cff-84df-78bd3cde30db.png",
  badge: "New"
}];

const RecentOffersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+919165004768";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20special%20offers.`;
  const { toast } = useToast();

  useEffect(() => {
    // Shorter delay for better visibility
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show a toast to confirm section is loaded
      toast({
        title: "Special Offers",
        description: "Check out our latest offers!",
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    // Added bg-black class to change the background color of the section to black
    <section className="py-12 relative z-10 bg-black">
      <div className={`container mx-auto px-4 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        {/* You might want to change the text color of the heading for better contrast on a black background */}
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
                  {/* The card background is already set to bg-black/80 */}
                  <Card className="bg-black/80 border border-deepa-teal/30 overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="relative h-64">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.error(`Image failed to load: ${offer.image}`);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <Badge className="absolute top-2 right-2 bg-deepa-teal text-black font-semibold">
                        {offer.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      {/* Card content text color is already set to white/gray which works well on black */}
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
                        onClick={() => {
                          toast({
                            title: "WhatsApp Contact",
                            description: "Opening WhatsApp chat...",
                          });
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
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="mr-2 bg-deepa-teal text-black border-none hover:bg-deepa-dark-teal static transform-none" />
            <CarouselNext className="ml-2 bg-deepa-teal text-black border-none hover:bg-deepa-dark-teal static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default RecentOffersSection;
