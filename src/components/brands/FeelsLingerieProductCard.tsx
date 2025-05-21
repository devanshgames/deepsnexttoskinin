
import React from 'react';
import ProductCard, { ProductProps } from '@/components/ProductCard';

type FeelsLingerieProductCardProps = Omit<ProductProps, 'productImages'>;

const FeelsLingerieProductCard: React.FC<FeelsLingerieProductCardProps> = (props) => {
  // Generate product-specific images for FEELS brand
  const generateFeelsLingerieProductImages = () => {
    const images = [props.image];
    
    if (props.photoCount && props.photoCount > 1) {
      const additionalImages = [
        "/lovable-uploads/FEELSCOVER.png",
        "/lovable-uploads/TSPAD 3.jpg",
        "/lovable-uploads/photo_2025-03-31_17-24-35.jpg",
        "/lovable-uploads/TSPAD1.jpg"
      ];
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(props.photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    
    return images;
  };
  
  return <ProductCard {...props} productImages={generateFeelsLingerieProductImages()} />;
};

export default FeelsLingerieProductCard;
