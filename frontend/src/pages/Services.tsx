import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Video, Camera, Palette, Megaphone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const serviceCategories = [
  {
    id: "video",
    icon: Video,
    title: "Video Editing Services",
    color: "from-red-500/20 to-orange-500/20",
    services: [
      { name: "YouTube & Long-form Editing", desc: "Vlogs, talking heads, tutorials, podcasts, cinematic edits" },
      { name: "Short-form Editing", desc: "Reels, Shorts, TikTok, meme edits, kinetic text" },
      { name: "Gaming & Esports Editing", desc: "Valorant, BGMI, montages, gameplay highlights" },
      { name: "Commercial / Brand Video", desc: "Professional brand videos and advertisements" },
      { name: "Event & Wedding Editing", desc: "Beautiful highlight reels and full event coverage" },
      { name: "Advanced Editing", desc: "Color grading, sound design, SFX, multi-cam editing" },
      { name: "Motion Graphics", desc: "Logo animations, titles, subtitles, lower thirds" },
      { name: "Monthly Creator Packages", desc: "Consistent editing support for content creators" },
    ],
  },
  {
    id: "photo",
    icon: Camera,
    title: "Photo Editing Services",
    color: "from-blue-500/20 to-cyan-500/20",
    services: [
      { name: "Portrait Retouching", desc: "Professional skin retouching, beauty edits" },
      { name: "E-commerce & Product", desc: "Clean, professional product photography edits" },
      { name: "Wedding & Event", desc: "Color correction, enhancement, album design" },
      { name: "Creative Manipulation", desc: "Composites, fantasy edits, artistic effects" },
      { name: "Photo Restoration", desc: "Repair and restore old or damaged photos" },
      { name: "Social Media Styling", desc: "Consistent aesthetic for your feed" },
    ],
  },
  {
    id: "graphic",
    icon: Palette,
    title: "Graphic Design Services",
    color: "from-purple-500/20 to-pink-500/20",
    services: [
      { name: "Social Media Creatives", desc: "Posts, stories, reels covers, carousels" },
      { name: "YouTube Assets", desc: "Thumbnails, channel art, end screens, banners" },
      { name: "Business Branding", desc: "Business cards, letterheads, presentations" },
      { name: "Marketing & Print", desc: "Flyers, posters, brochures, banners" },
      { name: "Presentation Design", desc: "Professional pitch decks and slideshows" },
      { name: "Infographics", desc: "Data visualization and information graphics" },
    ],
  },
  {
    id: "branding",
    icon: Megaphone,
    title: "Branding & Advertising",
    color: "from-emerald-500/20 to-teal-500/20",
    services: [
      { name: "Brand Identity Design", desc: "Complete visual identity system" },
      { name: "Brand Kit Creation", desc: "Logo, colors, typography, guidelines" },
      { name: "Social Media Branding", desc: "Consistent brand presence across platforms" },
      { name: "Ad Creatives", desc: "Meta, YouTube, Google ad designs" },
      { name: "Campaign Planning", desc: "Strategic visual campaigns" },
      { name: "Brand Launch / Rebrand", desc: "Complete brand launch packages" },
    ],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Premium <span className="gradient-text">Creative Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From video editing to complete brand identity — we offer everything you need
              to build a powerful visual presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="space-y-12">
            {serviceCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="scroll-mt-32"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${category.color} border border-border/50`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-background/50 backdrop-blur flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {category.services.map((service, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category.id}-${i}`}
                        className="bg-background/30 backdrop-blur rounded-xl border border-border/50 px-6"
                      >
                        <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-4">
                          {service.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {service.desc}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
