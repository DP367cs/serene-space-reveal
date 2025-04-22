import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceProps[] = [
  {
    icon: "🏠",
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary that reflects your unique lifestyle and taste."
  },
  {
    icon: "🏢",
    title: "Commercial Design",
    description: "Create functional workspaces that enhance productivity and represent your brand identity."
  },
  {
    icon: "🛋️",
    title: "Furniture Selection",
    description: "Curate the perfect furniture pieces that complement your space and meet your functional needs."
  },
  {
    icon: "🎨",
    title: "Color Consultation",
    description: "Develop a cohesive color palette that sets the right mood and enhances your space's features."
  },
  {
    icon: "📐",
    title: "Space Planning",
    description: "Optimize your floor plan to maximize functionality, flow, and the use of available space."
  },
  {
    icon: "💡",
    title: "Lighting Design",
    description: "Create the perfect ambiance with strategic lighting solutions tailored to each space's needs."
  }
];

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="text-4xl mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-serif font-semibold mb-3 text-interior-charcoal"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-interior-beige/30">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-md text-interior-charcoal mb-2">What We Offer</h2>
          <h3 className="heading-lg text-interior-charcoal mb-4">Our Services</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide comprehensive design solutions tailored to your specific needs and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
