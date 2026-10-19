import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { WhyLiquid } from "@/components/WhyLiquid";
import { Markets } from "@/components/Markets";
import { Steps } from "@/components/Steps";
import { Testimonial } from "@/components/Testimonial";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#070709] text-white selection:bg-white/20 selection:text-white">
      {/* Hero: fills the first viewport, keeps the original look */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Liquid Sphere Fullscreen Background & Atmosphere */}
        <BackgroundEffects />

        {/* Top Navigation */}
        <Navbar />

        {/* Main Hero Section & Floating Cards */}
        <HeroSection />
      </div>

      {/* Stats */}
      <StatsStrip />

      {/* Why Liquid */}
      <WhyLiquid />

      {/* Markets */}
      <Markets />

      {/* Getting Started */}
      <Steps />

      {/* Testimonial */}
      <Testimonial />

      {/* FAQ */}
      <Faq />

      {/* Call to Action */}
      <CtaBand />

      {/* Footer */}
      <Footer />
    </main>
  );
}
