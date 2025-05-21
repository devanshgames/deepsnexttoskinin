
import React from 'react';
import ProductCard, { ProductProps } from '@/components/ProductCard';

type BodicaProductCardProps = Omit<ProductProps, 'productImages'>;

const BodicaProductCard: React.FC<BodicaProductCardProps> = (props) => {
  // Generate product-specific images for BODICA brand
  const generateBodicaProductImages = () => {
    const images = [props.image];
    
    if (props.photoCount && props.photoCount > 1) {
      const additionalImages = [
        "/lovable-uploads/Photoroom-20250427_132845.png",
        "/lovable-uploads/new shoot pdf_page-0001.jpg",
        "/lovable-uploads/TSPAD 3.jpg",
        "/lovable-uploads/TSPAD4.jpg"
      ];
      
      // Add as many additional images as needed, up to photoCount - 1
      for (let i = 0; i < Math.min(props.photoCount - 1, additionalImages.length); i++) {
        images.push(additionalImages[i]);
      }
    }
    
    return images;
  };
  
  return <ProductCard {...props} productImages={generateBodicaProductImages()} />;
};

export default BodicaProductCard;
