
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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
      description: `${name} has been added to your cart`,
    });
  };
  
  const cardContent = (
    <>
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {photoCount && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 px-2 py-1 rounded text-xs text-white">
            {photoCount} photos
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-gray-300 mb-1">{name}</h3>
        {colors && (
          <p className="text-sm text-gray-400 mb-2">{colors.join(', ')}</p>
        )}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-deepa-teal">₹{discountedPrice}</span>
          {mrp > discountedPrice && (
            <span className="text-sm text-gray-500 line-through">₹{mrp}</span>
          )}
        </div>
        <Button 
          className="bg-deepa-teal text-black hover:bg-deepa-dark-teal w-full"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </CardContent>
    </>
  );
  
  if (detailUrl) {
    return (
      <Link to={detailUrl} className="block">
        <Card className="bg-gray-900 border-gray-800 hover:border-deepa-teal transition-colors">
          {cardContent}
        </Card>
      </Link>
    );
  }
  
  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-deepa-teal transition-colors">
      {cardContent}
    </Card>
  );
};

export default ProductCard;
