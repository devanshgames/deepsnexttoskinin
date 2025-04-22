
import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
}

const CartSummary = ({ subtotal, tax, total, itemCount }: CartSummaryProps) => {
  return (
    <>
      <div className="ml-auto">
        <div className="bg-[#1A1F2C] shadow-sm rounded-lg py-2 px-4">
          <div className="font-bold">₹{total.toFixed(2)}</div>
          <div className="text-sm text-gray-400">{itemCount} items</div>
        </div>
      </div>
      <div className="bg-[#1A1F2C] rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span>Sub total</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax<br /><span className="text-sm text-gray-500">5% GST</span></span>
          <span className="font-medium">₹{tax.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gray-700 my-2"></div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
