
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
      {/* Overlay with animation */}
      <motion.div 
        className="absolute inset-0 bg-interior-charcoal/40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <motion.div
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
              }
            }
          }}
        >
          <motion.h1 
            className="heading-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Transform Your Space Into a Work of Art
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Elevate your living experience with our bespoke interior design services. 
            We bring your vision to life with a perfect blend of aesthetics and functionality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Button className="btn-primary">Book Consultation</Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-interior-charcoal transition-colors">
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
