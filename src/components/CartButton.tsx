
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface CartButtonProps {
  variant?: "default" | "mobile";
  onClick?: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ variant = "default", onClick }) => {
  const { itemCount, subtotal } = useCart();
  
  if (variant === "mobile") {
    return (
      <Link to="/cart" onClick={onClick} className="block w-full">
        <Button 
          className="bg-deepa-teal text-black hover:bg-deepa-dark-teal w-full flex items-center justify-center gap-2 mt-2 relative"
        >
          <ShoppingCart size={16} />
          Cart {subtotal > 0 && `(₹${subtotal})`}
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </Link>
    );
  }
  
  return (
    <Link to="/cart" className="hidden md:block">
      <Button 
        className="bg-deepa-teal text-black hover:bg-deepa-dark-teal flex items-center gap-2 relative"
      >
        <ShoppingCart size={16} />
        Cart {subtotal > 0 && `(₹${subtotal})`}
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
