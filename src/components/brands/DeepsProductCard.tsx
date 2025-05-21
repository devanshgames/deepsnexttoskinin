
import React from 'react';
import ProductCard, { ProductProps } from '@/components/ProductCard';

type DeepsProductCardProps = Omit<ProductProps, 'productImages'>;

const DeepsProductCard: React.FC<DeepsProductCardProps> = (props) => {
  // Generate product-specific images for DEEP'S brand
  const generateDeepsProductImages = () => {
    const images = [props.image];
    
    if (props.photoCount && props.photoCount > 1) {
      const additionalImages = [
        "/lovable-uploads/photo_2025-03-31_17-24-35.jpg",
        "/lovable-uploads/TSPAD 0.jpg",
        "/lovable-uploads/TSPAD1.jpg",
        "/lovable-uploads/TSPAD 2.jpg"
      ];
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(props.photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    
    return images;
  };
  
  return <ProductCard {...props} productImages={generateDeepsProductImages()} />;
};

export default DeepsProductCard;
