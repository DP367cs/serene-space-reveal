import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3 rounded-b-2xl" 
          : "bg-transparent py-6 rounded-b-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="logo">
          <a href="#" className="text-xl md:text-2xl font-serif font-bold text-interior-charcoal">ELEGANCE</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-interior-charcoal hover:text-interior-brown transition-colors">Home</a>
          <a href="#about" className="text-interior-charcoal hover:text-interior-brown transition-colors">About</a>
          <a href="#services" className="text-interior-charcoal hover:text-interior-brown transition-colors">Services</a>
          <a href="#gallery" className="text-interior-charcoal hover:text-interior-brown transition-colors">Gallery</a>
          <a href="#testimonials" className="text-interior-charcoal hover:text-interior-brown transition-colors">Testimonials</a>
          <a href="#contact" className="text-interior-charcoal hover:text-interior-brown transition-colors">Contact</a>
        </nav>
        
        <Button className="hidden md:inline-block btn-primary">Book Consultation</Button>
        
        <button 
          className="md:hidden text-interior-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md rounded-b-2xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col p-4 space-y-3">
            <a href="#home" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">Home</a>
            <a href="#about" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">About</a>
            <a href="#services" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">Services</a>
            <a href="#gallery" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">Gallery</a>
            <a href="#testimonials" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">Testimonials</a>
            <a href="#contact" className="p-2 text-interior-charcoal hover:text-interior-brown transition-colors">Contact</a>
            <Button className="btn-primary w-full mt-2">Book Consultation</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
