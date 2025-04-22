
import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex border-b border-gray-700 py-4 last:border-b-0">
      <div className="w-20 h-20 mr-4">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <div className="text-right">
            <div className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
            <div className="text-xs text-gray-500">+ 5% tax</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-3">(1 set)</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-700 rounded">
            <Button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-white hover:bg-deepa-teal/20"
              disabled={item.quantity <= 1}
              variant="ghost"
            >
              <Minus size={16} />
            </Button>
            <span className="px-4 py-1">{item.quantity}</span>
            <Button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-white hover:bg-deepa-teal/20"
              variant="ghost"
            >
              <Plus size={16} />
            </Button>
          </div>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
