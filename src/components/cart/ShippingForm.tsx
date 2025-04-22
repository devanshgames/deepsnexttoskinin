
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  country: string;
  postalCode: string;
  address: string;
  area: string;
  landmark: string;
  state: string;
  city: string;
}

interface ShippingFormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ShippingForm = ({ formData, onInputChange, onSubmit }: ShippingFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-[#1A1F2C] rounded-lg shadow-md p-4 mb-6">
        <h2 className="font-bold text-lg mb-4">Billing details</h2>
        
        <div className="mb-4">
          <Label htmlFor="name" className="mb-1 block text-white">Name*</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={onInputChange} 
            placeholder="Enter your name" 
            className="bg-black/40 border-gray-700 text-white"
            required
          />
        </div>
        
        <div className="mb-4">
          <Label htmlFor="mobile" className="mb-1 block text-white">Mobile number*</Label>
          <div className="flex">
            <Input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              value={formData.mobile} 
              onChange={onInputChange} 
              placeholder="Enter your mobile number" 
              className="flex-1 bg-black/40 border-gray-700 text-white"
              required
            />
            <button type="button" className="text-deepa-teal text-sm ml-2">Change Number</button>
          </div>
        </div>
        
        <div className="mb-4">
          <Label htmlFor="email" className="mb-1 block text-white">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={onInputChange} 
            placeholder="Please enter your email address" 
            className="bg-black/40 border-gray-700 text-white"
          />
        </div>
      </div>

      <div className="bg-[#1A1F2C] rounded-lg shadow-md p-4 mb-6">
        <h2 className="font-bold text-lg mb-4">Shipping address</h2>
        
        {["country", "postalCode", "address", "area", "landmark", "state", "city"].map((field) => (
          <div key={field} className="mb-4">
            <Label 
              htmlFor={field} 
              className="mb-1 block text-white capitalize"
            >
              {field === "postalCode" ? "Pincode/Zipcode/Postal code" : field}
              {field !== "landmark" && "*"}
            </Label>
            <Input 
              type="text" 
              id={field} 
              name={field} 
              value={formData[field as keyof FormData]} 
              onChange={onInputChange} 
              placeholder={`Please enter your ${field === "postalCode" ? "Pincode/Zipcode/Postal code" : field}`}
              className="bg-black/40 border-gray-700 text-white"
              required={field !== "landmark"}
            />
          </div>
        ))}
      </div>

      <Button 
        type="submit" 
        className="w-full py-4 bg-deepa-teal text-black hover:bg-deepa-teal/90 rounded flex items-center justify-center"
      >
        CONFIRM ORDER
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </form>
  );
};

export default ShippingForm;
