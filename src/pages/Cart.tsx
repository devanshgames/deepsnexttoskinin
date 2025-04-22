
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import EmptyCart from '@/components/cart/EmptyCart';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import ShippingForm from '@/components/cart/ShippingForm';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    country: '',
    postalCode: '',
    address: '',
    area: '',
    landmark: '',
    state: '',
    city: ''
  });

  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.mobile || !formData.email || 
        !formData.country || !formData.postalCode || !formData.address || 
        !formData.area || !formData.state || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Confirmed",
      description: "Your order has been placed successfully!",
    });
    
    clearCart();
    setTimeout(() => navigate('/'), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={() => navigate('/')} className="mr-2 text-white hover:bg-deepa-teal/20">
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Your Cart</h1>
          </div>
          <EmptyCart />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="mr-2 text-white hover:bg-deepa-teal/20">
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <CartSummary 
            subtotal={subtotal}
            tax={tax}
            total={total}
            itemCount={items.reduce((acc, item) => acc + item.quantity, 0)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Have a question section */}
            <div className="bg-[#1A1F2C] rounded-lg shadow-md p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Have a question?</h3>
                  <p className="text-sm text-gray-400">Chat with us</p>
                </div>
                <a 
                  href="https://wa.me/919165004768" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-3 py-1 rounded flex items-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  CHAT NOW
                </a>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-[#1A1F2C] rounded-lg shadow-md p-4 mb-6">
              <h2 className="font-bold text-lg mb-4">Your order items</h2>
              {items.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <ShippingForm 
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CartPage;
