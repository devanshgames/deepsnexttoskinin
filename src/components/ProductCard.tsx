
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
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  image,
  mrp,
  discountedPrice,
  colors,
  photoCount,
  detailUrl
}) => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  // Generate unique product images based on the product ID and main image
  const generateProductImages = () => {
    const images = [image];
    if (photoCount && photoCount > 1) {
      // Create a set of unique images based on product ID
      // Use different image patterns for different product types
      const productType = id.toString()[0]; // First digit of ID to determine product type
      
      let additionalImages;
      
      // Select different sets of images based on product ID ranges
      if (productType === '1') { // DEEP'S
        additionalImages = [
          "/lovable-uploads/photo_2025-03-31_17-24-35.jpg",
          "/lovable-uploads/TSPAD 0.jpg",
          "/lovable-uploads/TSPAD1.jpg",
          "/lovable-uploads/TSPAD 2.jpg"
        ]; 
        else if (productType === '5') { // FEEL'S
        additionalImages = [
          "/lovable-uploads/photo_2025-03-31_17-24-35.jpg",
          "/lovable-uploads/TSPAD 0.jpg",
          "/lovable-uploads/TSPAD1.jpg",
          "/lovable-uploads/TSPAD 2.jpg"
        ];
      } else if (productType === '2' || productType === '6') { // PANTIES related
        additionalImages = [
          "/lovable-uploads/photo_2025-05-05_15-45-11.jpg",
          "/lovable-uploads/photo_2025-05-05_15-45-14.jpg",
          "/lovable-uploads/photo_2025-05-05_15-45-16.jpg",
          "/lovable-uploads/IMG_20250428_132532.jpg"
        ];
      } else if (productType === '3' || productType === '7') { // CAMISOLE related
        additionalImages = [
          "/lovable-uploads/Photoroom-20250427_132845.png",
          "/lovable-uploads/new shoot pdf_page-0001.jpg",
          "/lovable-uploads/TSPAD 3.jpg",
          "/lovable-uploads/TSPAD4.jpg"
        ];
      } else if (productType === '4' || productType === '8') { // RANI or other
        additionalImages = [
          "/lovable-uploads/b+cover.jpg",
          "/lovable-uploads/deepscover.jpg",
          "/lovable-uploads/TSPAD 2.jpg",
          "/lovable-uploads/bodicacover.jpg"
        ];
      } else {
        // Default image set
        additionalImages = [
          "/lovable-uploads/TSPAD 0.jpg",
          "/lovable-uploads/TSPAD1.jpg",
          "/lovable-uploads/TSPAD 2.jpg", 
          "/lovable-uploads/TSPAD 3.jpg",
        ];
      }
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    return images;
  };
  
  const productImages = generateProductImages();

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
        {photoCount && (
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
