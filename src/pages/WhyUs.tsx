
import React from 'react';
import NavBar from '@/components/NavBar';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const WhyUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <WhyChooseUsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default WhyUs;
