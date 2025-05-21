
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import RecentOffersSection from '@/components/RecentOffersSection';
import ProductsSection from '@/components/ProductsSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <RecentOffersSection />
        <ProductsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
      <Toaster />
    </div>
  );
};

export default Index;
