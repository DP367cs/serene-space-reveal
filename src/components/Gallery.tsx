
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Gallery item interface
interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

const galleryData: GalleryItemProps[] = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    title: "Modern Minimalist Living",
    category: "Living Room"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    title: "Scandinavian Kitchen",
    category: "Kitchen"
  },
  {
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    title: "Luxurious Bedroom Suite",
    category: "Bedroom"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    title: "Contemporary Home Office",
    category: "Office"
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    title: "Elegant Bathroom Design",
    category: "Bathroom"
  },
  {
    image: "https://images.unsplash.com/photo-1595515667076-685529e25e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    title: "Outdoor Living Space",
    category: "Exterior"
  },
];

// Gallery Item Component
const GalleryItem = ({ image, title, category }: GalleryItemProps) => {
  return (
    <div className="gallery-item h-80">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="gallery-overlay">
        <div className="text-center text-white">
          <h3 className="text-xl font-serif font-semibold mb-1">{title}</h3>
          <p className="text-sm uppercase tracking-wider">{category}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
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
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-md text-interior-charcoal mb-2">Our Portfolio</h2>
          <h3 className="heading-lg text-interior-charcoal mb-4">Featured Design Projects</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our carefully curated collection of design projects that showcase our commitment 
            to excellence and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GalleryItem {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
