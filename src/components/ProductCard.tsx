
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image } from 'lucide-react';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  mrp: number;
  discountedPrice: number;
  colors?: string[];
  photoCount?: number;
  detailUrl?: string;
  productImages?: string[]; // Added to allow custom images to be passed
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  image,
  mrp,
  discountedPrice,
  colors,
  photoCount,
  detailUrl,
  productImages: customProductImages
}) => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  // Use custom product images if provided, otherwise use just the main image
  const productImages = customProductImages || [image];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      image,
      price: discountedPrice
    });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`
    });
  };
  
  const handleCardClick = (e: React.MouseEvent) => {
    // If photoCount is present and more than 1, open the image carousel
    if (photoCount && photoCount > 1) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const cardContent = (
    <>
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        {photoCount && photoCount > 1 && (
          <div 
            className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <Image className="mr-1" size={12} />
            {photoCount} Photos
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-gray-300 mb-1">{name}</h3>
        {colors && <p className="text-sm text-gray-400 mb-2">{colors.join(', ')}</p>}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-deepa-teal">₹{discountedPrice}</span>
          {mrp > discountedPrice && <span className="text-sm text-gray-500 line-through">₹{mrp}</span>}
        </div>
        <Button className="bg-deepa-teal text-black hover:bg-deepa-dark-teal w-full" onClick={handleAddToCart}>
          ADD TO CART
        </Button>
      </CardContent>
    </>
  );

  // Image Gallery Dialog
  const imageGallery = (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-4xl bg-gray-900 border border-gray-800">
        <div className="py-4">
          <h2 className="text-xl font-bold text-white mb-4">{name} - Product Images</h2>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {productImages.map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 relative">
                  <div className="overflow-hidden rounded-lg aspect-square">
                    <img
                      src={img}
                      alt={`${name} image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2 bg-deepa-teal hover:bg-deepa-dark-teal text-black" />
              <CarouselNext className="static translate-y-0 ml-2 bg-deepa-teal hover:bg-deepa-dark-teal text-black" />
            </div>
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (detailUrl) {
    return (
      <>
        <Link 
          to={detailUrl} 
          className="block" 
          onClick={handleCardClick}
        >
          <Card className="bg-gray-900 border-gray-800 hover:border-deepa-teal transition-colors cursor-pointer">
            {cardContent}
          </Card>
        </Link>
        {imageGallery}
      </>
    );
  }

  return (
    <>
      <Card 
        className="bg-gray-900 border-gray-800 hover:border-deepa-teal transition-colors cursor-pointer"
        onClick={handleCardClick}
      >
        {cardContent}
      </Card>
      {imageGallery}
    </>
  );
};

export default ProductCard;
