import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MessageSquare, Lightbulb, FileEdit, RefreshCcw, CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Share Your Idea",
    description: "Tell us about your project, goals, target audience, and vision. We'll listen carefully to understand exactly what you need.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Concept & Planning",
    description: "Our team creates a strategic plan tailored to your needs, including timeline, deliverables, and creative direction.",
  },
  {
    icon: FileEdit,
    number: "03",
    title: "First Draft Delivery",
    description: "We get to work and deliver your initial draft for review. You'll see your vision starting to come to life.",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Revisions & Refinement",
    description: "Based on your feedback, we refine and polish until every detail is perfect. Your satisfaction is our priority.",
  },
  {
    icon: CheckCircle2,
    number: "05",
    title: "Final Approval",
    description: "Once you're completely happy, we finalize everything and prepare your content for delivery.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Export & Delivery",
    description: "You receive your polished, ready-to-publish content in all required formats. Launch time!",
  },
];

const Process = () => {
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              How We <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A streamlined, transparent process designed to deliver exceptional results efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            <div className="space-y-12 lg:space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <span className="text-5xl font-display font-bold text-primary/20 mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    {/* Dot on line */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
