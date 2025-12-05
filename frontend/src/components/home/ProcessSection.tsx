import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, FileEdit, RefreshCcw, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { memo } from "react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Idea",
    description: "Tell us about your project, goals, and vision",
  },
  {
    icon: Lightbulb,
    title: "Concept & Planning",
    description: "We create a strategic plan tailored to your needs",
  },
  {
    icon: FileEdit,
    title: "First Draft",
    description: "Receive your initial draft for review",
  },
  {
    icon: RefreshCcw,
    title: "Revisions",
    description: "We refine until it's perfect",
  },
  {
    icon: CheckCircle2,
    title: "Final Delivery",
    description: "Get your polished, ready-to-publish content",
  },
];

export const ProcessSection = memo(() => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Our Process"
          title="How We Work"
          description="A streamlined process designed to deliver exceptional results efficiently."
        />

        <div className="relative mt-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10">
                  {i + 1}
                </div>

                <div className="pt-8 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
ProcessSection.displayName = 'ProcessSection';
