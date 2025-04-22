
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contact;
