
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Replace with the actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20hosiery%20products.`;
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-button animate-pulse-light"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
