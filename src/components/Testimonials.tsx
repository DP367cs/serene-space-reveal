
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const testimonialsData: TestimonialProps[] = [
  {
    quote: "Working with this team transformed not just my home but how I feel in it every day. They truly understood my vision and made it even better than I imagined.",
    author: "Emma Rodriguez",
    position: "Homeowner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
  },
  {
    quote: "The attention to detail was impeccable. From understanding our brand to creating a space that represents it perfectly, they exceeded all our expectations.",
    author: "Michael Chen",
    position: "CEO, Artisan Coffee",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "I was amazed by how they maximized our small apartment space without sacrificing style. It's now both beautiful and functional.",
    author: "Sophia Martinez",
    position: "Apartment Owner",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="testimonials" className="section-padding bg-interior-charcoal text-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-md mb-2">Testimonials</h2>
          <h3 className="heading-lg mb-4">What Our Clients Say</h3>
          <p className="max-w-xl mx-auto text-white/80">
            Don't take our word for it - hear from some of our satisfied clients about their experiences working with our design team.
          </p>
        </div>

        {/* Testimonials Slider */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <img 
                      src={testimonialsData[currentIndex].image} 
                      alt={testimonialsData[currentIndex].author} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <svg className="w-8 h-8 text-interior-sage mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg mb-6 italic leading-relaxed">{testimonialsData[currentIndex].quote}</p>
                    <div>
                      <p className="font-serif font-semibold text-lg">{testimonialsData[currentIndex].author}</p>
                      <p className="text-white/70">{testimonialsData[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
