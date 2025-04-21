
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+919165004768"; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20hosiery%20products.`;
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle size={20} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
