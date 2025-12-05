import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "Video Editing", "Photo Editing", "Graphic Design", "Branding"];

const projects = [
  // Video Editing
  { id: 1, title: "YouTube Brand Film", category: "Video Editing", desc: "Cinematic brand story for tech startup", youtubeId: "PwcwLhEyLT8" },
  
  // Photo Editing
  { id: 2, title: "Professional Portrait Edit", category: "Photo Editing", desc: "High-quality portrait retouching", image: "/images/portfolio/photo-editing/3arYxB9QOcw-HD.jpg" },
  { id: 3, title: "Fashion Photography", category: "Photo Editing", desc: "Elegant fashion campaign edits", image: "/images/portfolio/photo-editing/4_nBChD84yo-HD.jpg" },
  { id: 4, title: "Product Photography", category: "Photo Editing", desc: "Professional product shots", image: "/images/portfolio/photo-editing/5DeJ4Ev0suU-HD.jpg" },
  { id: 5, title: "Lifestyle Photography", category: "Photo Editing", desc: "Natural lifestyle edits", image: "/images/portfolio/photo-editing/91pXj-vyh8M-SD.jpg" },
  { id: 6, title: "Commercial Photography", category: "Photo Editing", desc: "Commercial brand photography", image: "/images/portfolio/photo-editing/aqKGvKfJ-Gk-HD.jpg" },
  { id: 7, title: "Editorial Photography", category: "Photo Editing", desc: "Editorial style edits", image: "/images/portfolio/photo-editing/DcgJ9EKlHk8-HD.jpg" },
  { id: 8, title: "Beauty Photography", category: "Photo Editing", desc: "Beauty and cosmetics edits", image: "/images/portfolio/photo-editing/ImZ7Iw5IYYY-HD.jpg" },
  { id: 9, title: "Wedding Photography", category: "Photo Editing", desc: "Wedding and event photography", image: "/images/portfolio/photo-editing/jUtE-5cs-_Y-HD.jpg" },
  { id: 10, title: "Architecture Photography", category: "Photo Editing", desc: "Architectural photography edits", image: "/images/portfolio/photo-editing/SOnCAJLcWec-HD.jpg" },
  { id: 11, title: "Food Photography", category: "Photo Editing", desc: "Food and culinary photography", image: "/images/portfolio/photo-editing/Z51Ajb7qPmA-HD.jpg" },
  { id: 12, title: "Travel Photography", category: "Photo Editing", desc: "Travel and adventure photography", image: "/images/portfolio/photo-editing/zXT-DqPkNCE-HD.jpg" },
  
  // Branding
  { id: 13, title: "Startup Brand Identity", category: "Branding", desc: "Full visual identity system", image: "/images/portfolio/branding/a-way-out-final.jpg", portrait: true },
  { id: 14, title: "Restaurant Rebrand", category: "Branding", desc: "Complete visual overhaul", image: "/images/portfolio/branding/prduct-manipulation-final.jpg" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(38_92%_50%/0.08)_0%,transparent_50%)]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Creative <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our latest projects and see how we've helped brands and creators elevate their visual presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid - Masonry Style */}
          <div 
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6"
            style={{ columnFill: 'balance' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group mb-4 md:mb-6 break-inside-avoid"
                >
                  <motion.div 
                    className="relative rounded-2xl bg-card border border-border overflow-hidden cursor-pointer shadow-none group-hover:shadow-lg group-hover:shadow-primary/10"
                    style={{ 
                      transform: 'translateZ(0)',
                      willChange: 'transform, opacity'
                    }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {project.youtubeId ? (
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${project.youtubeId}`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-2xl"
                          loading="lazy"
                          style={{ 
                            transform: 'translateZ(0)',
                            willChange: 'transform',
                          }}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-display font-semibold text-base md:text-lg mb-1">
                              {project.title}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm">
                              {project.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : project.image ? (
                      <div className="relative w-full">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`w-full rounded-2xl ${project.portrait ? 'object-contain' : 'object-cover'}`}
                          loading="lazy"
                          decoding="async"
                          style={{ 
                            transform: 'translateZ(0)',
                            willChange: 'transform',
                          }}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-display font-semibold text-base md:text-lg mb-1">
                              {project.title}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm">
                              {project.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`relative ${project.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'} bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center`}>
                        <span className="text-4xl font-display font-bold text-primary/20">
                          {project.id}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
