import { memo } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";
// import { PricingSection } from "@/components/home/PricingSection"; // Commented out for now

const Index = memo(() => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      {/* <PricingSection /> - Pricing section commented out */}
      <CTASection />
    </Layout>
  );
});
Index.displayName = 'Index';

export default Index;
