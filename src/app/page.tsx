import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RoomsSection } from "@/components/RoomsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <RoomsSection />
      <Footer />
    </div>
  );
}
