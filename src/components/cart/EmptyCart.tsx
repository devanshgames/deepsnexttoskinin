
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const EmptyCart = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#1A1F2C] rounded-lg shadow-md p-8 text-center">
      <h2 className="text-xl mb-4">Your cart is empty</h2>
      <p className="mb-6 text-gray-400">Looks like you haven't added any items to your cart yet.</p>
      <Button onClick={() => navigate('/')} className="bg-deepa-teal text-black hover:bg-deepa-teal/90">
        Continue Shopping
      </Button>
    </div>
  );
};

export default EmptyCart;
