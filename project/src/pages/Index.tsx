import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EvolutionTimeline from "@/components/EvolutionTimeline";
import CrewSection from "@/components/CrewSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <EvolutionTimeline />
        <CrewSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
