
import React from 'react';
import ProductCard, { ProductProps } from '@/components/ProductCard';

type BeautyplusProductCardProps = Omit<ProductProps, 'productImages'>;

const BeautyplusProductCard: React.FC<BeautyplusProductCardProps> = (props) => {
  // Generate product-specific images for B+ brand
  const generateBeautyplusProductImages = () => {
    const images = [props.image];
    
    if (props.photoCount && props.photoCount > 1) {
      const additionalImages = [
        "/lovable-uploads/photo_2025-05-05_15-45-11.jpg",
        "/lovable-uploads/photo_2025-05-05_15-45-14.jpg",
        "/lovable-uploads/photo_2025-05-05_15-45-16.jpg",
        "/lovable-uploads/IMG_20250428_132532.jpg"
      ];
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(props.photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    
    return images;
  };
  
  return <ProductCard {...props} productImages={generateBeautyplusProductImages()} />;
};

export default BeautyplusProductCard;
