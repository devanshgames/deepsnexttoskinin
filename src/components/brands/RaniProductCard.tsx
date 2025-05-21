
import React from 'react';
import ProductCard, { ProductProps } from '@/components/ProductCard';

type RaniProductCardProps = Omit<ProductProps, 'productImages'>;

const RaniProductCard: React.FC<RaniProductCardProps> = (props) => {
  // Generate product-specific images for RANI brand
  const generateRaniProductImages = () => {
    const images = [props.image];
    
    if (props.photoCount && props.photoCount > 1) {
      const additionalImages = [
        "/lovable-uploads/b+cover.jpg",
        "/lovable-uploads/deepscover.jpg",
        "/lovable-uploads/TSPAD 2.jpg",
        "/lovable-uploads/bodicacover.jpg"
      ];
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(props.photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    
    return images;
  };
  
  return <ProductCard {...props} productImages={generateRaniProductImages()} />;
};

export default RaniProductCard;
