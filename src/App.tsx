
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
import DeepsPage from "./pages/products/brands/DeepsPage";
import BeautyplusPage from "./pages/products/brands/BeautyplusPage";
import BodicaPage from "./pages/products/brands/BodicaPage";
import RaniPage from "./pages/products/brands/RaniPage";
import MothercoolPage from "./pages/products/brands/MothercoolPage";
import PantyDeepsPage from "./pages/products/Panties/Deeps";
import PantyBeautyplusPage from "./pages/products/Panties/Beautyplus";
import PantyBodicaPage from "./pages/products/Panties/Bodica";
import PantyRaniPage from "./pages/products/Panties/Rani";
import PantyMothercoolPage from "./pages/products/Panties/Mothercool";
// Corrected import paths for Camisole brand pages
import CamisoleDeepsPage from "./pages/products/brands/CamisoleDeepsPage";
import CamisoleBeautyplusPage from "./pages/products/brands/CamisoleBeautyplusPage";
import CamisoleBodicaPage from "./pages/products/brands/CamisoleBodicaPage";
import CamisoleRaniPage from "./pages/products/brands/CamisoleRaniPage";
import CamisoleMothercoolPage from "./pages/products/Camisole/Mothercool";

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
            <Route path="/products/panties/deeps" element={<PantyDeepsPage />} />
            <Route path="/products/panties/beautyplus" element={<PantyBeautyplusPage />} />
            <Route path="/products/panties/bodica" element={<PantyBodicaPage />} />
            <Route path="/products/panties/rani" element={<PantyRaniPage />} />
            <Route path="/products/panties/mothercool" element={<PantyMothercoolPage />} />
            <Route path="/products/camisole/deeps" element={<CamisoleDeepsPage />} />
            <Route path="/products/camisole/beautyplus" element={<CamisoleBeautyplusPage />} />
            <Route path="/products/camisole/bodica" element={<CamisoleBodicaPage />} />
            <Route path="/products/camisole/rani" element={<CamisoleRaniPage />} />
            <Route path="/products/camisole/mothercool" element={<CamisoleMothercoolPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
