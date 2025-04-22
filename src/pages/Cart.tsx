
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    
    // Clear cart and redirect to home
    clearCart();
    setTimeout(() => navigate('/'), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={() => navigate('/')} className="mr-2">
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Your Cart</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl mb-4">Your cart is empty</h2>
            <p className="mb-6 text-gray-600">Looks like you haven't added any items to your cart yet.</p>
            <Button onClick={() => navigate('/')} className="bg-deepa-teal text-black">
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="mr-2">
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="ml-auto">
            <div className="bg-white shadow-sm rounded-lg py-2 px-4">
              <div className="font-bold">₹{total.toFixed(2)}</div>
              <div className="text-sm text-gray-500">{items.reduce((acc, item) => acc + item.quantity, 0)} items</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Have a question section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Have a question?</h3>
                  <p className="text-sm text-gray-500">Chat with us</p>
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
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="font-bold text-lg mb-4">Your order items</h2>
              
              {items.map(item => (
                <div key={item.id} className="flex border-b py-4 last:border-b-0">
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
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Coupon */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h3a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h3V2zm6 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Apply coupon
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Sub total</span>
                <span className="font-medium">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax<br /><span className="text-sm text-gray-500">5% GST</span></span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit}>
              {/* Billing Details */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="font-bold text-lg mb-4">Billing details</h2>
                
                <div className="mb-4">
                  <Label htmlFor="name" className="mb-1 block">Name*</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Enter your name" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="mobile" className="mb-1 block">Mobile number*</Label>
                  <div className="flex">
                    <Input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleInputChange} 
                      placeholder="Enter your mobile number" 
                      className="flex-1"
                      required
                    />
                    <button type="button" className="text-blue-500 text-sm ml-2">Change Number</button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="email" className="mb-1 block">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="Please enter your email address" 
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="font-bold text-lg mb-4">Shipping address</h2>
                
                <div className="mb-4">
                  <Label htmlFor="country" className="mb-1 block">Country*</Label>
                  <Input 
                    type="text" 
                    id="country" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleInputChange} 
                    placeholder="Please enter your country" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="postalCode" className="mb-1 block">Pincode/Zipcode/Postal code*</Label>
                  <Input 
                    type="text" 
                    id="postalCode" 
                    name="postalCode" 
                    value={formData.postalCode} 
                    onChange={handleInputChange} 
                    placeholder="Please enter your Pincode/Zipcode/Postal code" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="address" className="mb-1 block">Flat, House no., Building, Company, Apartment*</Label>
                  <Input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    placeholder="Flat, House no., Building, Company, Apartment" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="area" className="mb-1 block">Area, Colony, Street, Sector, Village*</Label>
                  <Input 
                    type="text" 
                    id="area" 
                    name="area" 
                    value={formData.area} 
                    onChange={handleInputChange} 
                    placeholder="Area, Colony, Street, Sector, Village" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="landmark" className="mb-1 block">Landmark</Label>
                  <Input 
                    type="text" 
                    id="landmark" 
                    name="landmark" 
                    value={formData.landmark} 
                    onChange={handleInputChange} 
                    placeholder="near post-office, hospital, school, bank, etc" 
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="state" className="mb-1 block">State*</Label>
                  <Input 
                    type="text" 
                    id="state" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleInputChange} 
                    placeholder="Type state name" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="city" className="mb-1 block">City*</Label>
                  <Input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange} 
                    placeholder="Type city name" 
                    required
                  />
                </div>
              </div>

              {/* Confirm Order Button */}
              <Button 
                type="submit" 
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center"
              >
                CONFIRM ORDER
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CartPage;
