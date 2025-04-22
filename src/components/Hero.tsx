
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-interior-charcoal/40 z-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <motion.div
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-6">
            Transform Your Space Into a Work of Art
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Elevate your living experience with our bespoke interior design services. 
            We bring your vision to life with a perfect blend of aesthetics and functionality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary">Book Consultation</Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-interior-charcoal transition-colors">
              Explore Our Work
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
