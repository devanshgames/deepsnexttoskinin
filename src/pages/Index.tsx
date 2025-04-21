
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import RecentOffersSection from '@/components/RecentOffersSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
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
        <AboutSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <ContactSection />
        <WhatsAppButton />
        <AIChatbot />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
