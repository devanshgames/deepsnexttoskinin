
import React from 'react';
import NavBar from '@/components/NavBar';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default About;
