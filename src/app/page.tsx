import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="relative h-screen max-h-screen w-full bg-[#070709] text-white flex flex-col justify-between overflow-hidden selection:bg-white/20 selection:text-white">
      {/* Liquid Sphere Fullscreen Background & Atmosphere */}
      <BackgroundEffects />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Hero Section & Floating Cards */}
      <HeroSection />
    </main>
  );
}
