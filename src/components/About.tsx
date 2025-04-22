
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-interior-cream">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-md text-interior-charcoal mb-2">About Us</h2>
            <h3 className="heading-lg text-interior-charcoal mb-6">Creating Spaces That Inspire</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, our design studio has transformed hundreds of spaces into 
              personalized havens for our clients. We believe that interior design is not just 
              about aesthetics, but about creating environments that enhance your daily life.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach combines artistic vision with practical functionality. We listen 
              to your needs, understand your lifestyle, and craft spaces that reflect your 
              personality while optimizing comfort and usability.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <p className="text-3xl font-serif font-bold text-interior-charcoal">10+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-interior-charcoal">350+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-interior-charcoal">15</p>
                <p className="text-gray-600">Design Awards</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-interior-charcoal">98%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[500px]"
          >
            <div className="absolute top-0 right-0 w-5/6 h-5/6 z-10">
              <img 
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="Interior design workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-interior-sage/20 border-2 border-interior-sage z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
