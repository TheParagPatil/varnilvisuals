import { Link } from "react-router-dom";
import { motion, useInView, Variants } from "framer-motion";
import { Video, Camera, Palette, Megaphone, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRef, memo } from "react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "From YouTube videos to cinematic brand ads — we create content that grabs attention and keeps viewers engaged.",
    color: "from-red-500/20 to-orange-500/20",
    link: "/services#video",
  },
  {
    icon: Camera,
    title: "Photo Editing",
    description: "High-quality, professional edits for portraits, brands, and e-commerce that make your visuals stand out.",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "/services#photo",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Thumbnails, social media posts, marketing creatives, and business collateral that capture your brand essence.",
    color: "from-purple-500/20 to-pink-500/20",
    link: "/services#graphic",
  },
  {
    icon: Megaphone,
    title: "Branding & Advertising",
    description: "Logo design, brand identity, ad creatives, launch campaigns, and everything you need to build your brand.",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "/services#branding",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ServicesSection = memo(() => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <SectionHeading
            badge="What We Do"
            title="Premium Creative Services"
            description="We offer a comprehensive suite of creative services to help you build and grow your brand presence."
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link to={service.link} className="group block h-full">
                <div 
                  className="relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  style={{ 
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                  }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ 
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <service.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Explore All Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});
ServicesSection.displayName = 'ServicesSection';
