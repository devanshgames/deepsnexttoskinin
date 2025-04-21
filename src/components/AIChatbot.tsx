
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

type Message = {
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your personal assistant. How can I help you with Deepa Hosiery products today?",
    isBot: true,
    timestamp: new Date(),
  },
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "";
      const userMessageLower = inputValue.toLowerCase();
      
      if (userMessageLower.includes("price") || userMessageLower.includes("cost")) {
        botResponse = "Our pricing varies based on order quantity. We offer special discounts for bulk orders. Please contact us via WhatsApp for a detailed price quote.";
      } else if (userMessageLower.includes("delivery") || userMessageLower.includes("shipping")) {
        botResponse = "We provide prompt delivery services across India. Delivery timeframes depend on your location, but typically range from 3-7 business days.";
      } else if (userMessageLower.includes("minimum") || userMessageLower.includes("quantity")) {
        botResponse = "We have a minimum order quantity of 12 pieces per product. This allows us to offer you the best wholesale rates.";
      } else if (userMessageLower.includes("material") || userMessageLower.includes("quality")) {
        botResponse = "We use premium cotton and blended fabrics for our hosiery products. All our materials are carefully selected for comfort and durability.";
      } else if (userMessageLower.includes("contact") || userMessageLower.includes("whatsapp")) {
        botResponse = "You can reach us on WhatsApp at +919165004768. We're available to assist you from 9 AM to 6 PM, Monday through Saturday.";
      } else {
        botResponse = "Thank you for your message. For specific inquiries about our products, pricing, or orders, please contact us on WhatsApp at +919165004768.";
      }
      
      const aiMessage: Message = {
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      
      toast({
        description: "New message from AI Assistant",
        variant: "default",
      });
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 left-6 bg-deepa-teal text-black p-3 rounded-full shadow-lg z-50 hover:bg-opacity-90 transition-all duration-300"
      >
        <Bot size={20} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 left-6 w-80 sm:w-96 h-96 bg-black border border-deepa-teal rounded-lg shadow-xl z-50 flex flex-col">
          <div className="bg-deepa-teal text-black px-4 py-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <Bot size={18} /> AI Assistant
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChatbot}
              className="h-8 w-8 text-black hover:bg-deepa-dark-teal"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-3/4 rounded-lg px-4 py-2 ${
                    message.isBot
                      ? "bg-gray-800 text-white"
                      : "bg-deepa-teal text-black"
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white rounded-lg px-4 py-2">
                  <p>Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-deepa-teal focus:border-deepa-teal"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-deepa-teal text-black hover:bg-opacity-90"
              size="icon"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
