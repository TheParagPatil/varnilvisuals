import { motion, useInView, Variants } from "framer-motion";
import { Zap, Award, Users, Clock, RefreshCw, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRef, memo } from "react";

const features = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality",
  },
  {
    icon: Award,
    title: "High Quality",
    description: "Professional, consistent results every time",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert creators assigned to your project",
  },
  {
    icon: RefreshCw,
    title: "Revision Support",
    description: "Unlimited revisions until you're satisfied",
  },
  {
    icon: Target,
    title: "Platform Expertise",
    description: "YouTube, Instagram & brand campaigns",
  },
  {
    icon: Zap,
    title: "200+ Projects",
    description: "Proven track record of success",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
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

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
};

export const WhyChooseUsSection = memo(() => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(38_92%_50%/0.05)_0%,transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-primary/3 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <SectionHeading
            badge="Why Choose Us"
            title="What Sets Us Apart"
            description="We're not just editors – we're creative partners dedicated to elevating your content to the next level."
          />
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              custom={i}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="group"
            >
              <div 
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
                style={{ 
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 relative z-10"
                  style={{ 
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                  }}
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 } 
                  }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
WhyChooseUsSection.displayName = 'WhyChooseUsSection';
