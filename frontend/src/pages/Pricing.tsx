// Pricing page commented out
/*
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const creatorPackages = [
  {
    name: "YouTube Editing",
    price: "Starting ₹5,000",
    period: "/video",
    features: [
      "Full video editing",
      "Color grading",
      "Sound design",
      "Motion graphics",
      "2 revisions included",
    ],
    popular: false,
  },
  {
    name: "Reels/Shorts Monthly",
    price: "₹15,000",
    period: "/month",
    features: [
      "8 short-form videos",
      "Trending edits",
      "Caption animations",
      "Music sync",
      "Unlimited revisions",
    ],
    popular: true,
  },
  {
    name: "Thumbnail Bundle",
    price: "₹3,000",
    period: "/5 thumbnails",
    features: [
      "5 custom thumbnails",
      "A/B testing options",
      "Click-optimized design",
      "Brand consistency",
      "Quick turnaround",
    ],
    popular: false,
  },
];

const brandPackages = [
  {
    name: "Social Media Pack",
    price: "₹20,000",
    period: "/month",
    features: [
      "20 social media posts",
      "Story templates",
      "Content calendar",
      "Brand guidelines",
      "Monthly strategy call",
    ],
    popular: false,
  },
  {
    name: "Branding Starter",
    price: "₹35,000",
    period: "one-time",
    features: [
      "Logo design (3 concepts)",
      "Color palette",
      "Typography system",
      "Brand guidelines PDF",
      "Social media kit",
    ],
    popular: true,
  },
  {
    name: "Advertising Creative",
    price: "₹25,000",
    period: "/campaign",
    features: [
      "Ad creative designs",
      "Multiple formats",
      "A/B variations",
      "Performance optimization",
      "Platform-specific sizing",
    ],
    popular: false,
  },
];

const PricingCard = ({ pkg, index }: { pkg: typeof creatorPackages[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative p-8 rounded-2xl border ${
      pkg.popular
        ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/30"
        : "bg-card border-border"
    }`}
  >
    {pkg.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
        Most Popular
      </div>
    )}

    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{pkg.name}</h3>
    <div className="mb-6">
      <span className="text-3xl font-display font-bold gradient-text">{pkg.price}</span>
      <span className="text-muted-foreground text-sm">{pkg.period}</span>
    </div>

    <ul className="space-y-3 mb-8">
      {pkg.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <Button asChild variant={pkg.popular ? "hero" : "outline"} className="w-full">
      <Link to="/contact">Get Started</Link>
    </Button>
  </motion.div>
);

const Pricing = () => {
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
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose a package that fits your needs. All plans include dedicated support and quality guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Creators */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">For Creators</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2">Creator Packages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {creatorPackages.map((pkg, i) => (
              <PricingCard key={pkg.name} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">For Brands</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2">Brand Packages</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {brandPackages.map((pkg, i) => (
              <PricingCard key={pkg.name} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground mb-8">
              We create tailored solutions for unique requirements. Let's discuss your project.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
*/

// Placeholder component to prevent import errors
const Pricing = () => {
  return null;
};

export default Pricing;
