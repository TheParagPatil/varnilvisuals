import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Eye, Sparkles } from "lucide-react";

const tools = [
  "Adobe Premiere Pro", "After Effects", "Photoshop", "Lightroom",
  "DaVinci Resolve", "Illustrator", "Figma"
];

const platforms = [
  "YouTube", "Instagram", "Meta Ads", "Google Ads", "Snapchat", "TikTok"
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              We're <span className="gradient-text">Varnil Visuals</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A young agency backed by experienced editors with 2+ years of industry mastery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Creative Partner for{" "}
                <span className="gradient-text">Digital Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Varnil Visuals is a full-service creative agency specializing in high-quality editing 
                and design solutions. We help creators, brands, and businesses build a strong visual 
                identity through professional video editing, photo editing, graphic design, and branding services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes expert editors, designers, and creative strategists dedicated to 
                delivering premium, on-time results. We combine creativity with strategy to ensure 
                your content not only looks amazing but also drives real results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ 
                transform: 'translateZ(0)',
                willChange: 'transform, opacity',
              }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-transparent p-1">
                <div className="w-full h-full rounded-3xl bg-card border border-border flex items-center justify-center p-8">
                  <img 
                    src="/images/logo/varnil.png" 
                    alt="Varnil Visuals Logo" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower brands and creators with visually stunning and impactful digital content 
                that drives engagement, builds trust, and delivers measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted creative partner for businesses and influencers across India 
                and beyond, setting new standards in creative excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeading
            badge="Our Expertise"
            title="Tools & Platforms"
            description="We're proficient in industry-leading tools and deliver content optimized for every major platform."
          />

          <div className="mt-16 space-y-12">
            {/* Tools */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-6 text-center">
                Software & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-6 py-3 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-6 text-center">
                Platforms We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
                  >
                    {platform}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
