
import React from 'react';
import NavBar from '@/components/NavBar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <TestimonialsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Testimonials;
