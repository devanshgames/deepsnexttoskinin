
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import BraPage from "./pages/products/Bra";
import PantiesPage from "./pages/products/Panties";
import CamisolePage from "./pages/products/Camisole";
import MorePage from "./pages/products/More";

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/bra" element={<BraPage />} />
            <Route path="/products/panties" element={<PantiesPage />} />
            <Route path="/products/camisole" element={<CamisolePage />} />
            <Route path="/products/more" element={<MorePage />} />
            <Route path="/products/bra/deeps" element={<DeepsPage />} />
            <Route path="/products/bra/beautyplus" element={<BeautyplusPage />} />
            <Route path="/products/bra/bodica" element={<BodicaPage />} />
            <Route path="/products/bra/rani" element={<RaniPage />} />
            <Route path="/products/bra/mothercool" element={<MothercoolPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
