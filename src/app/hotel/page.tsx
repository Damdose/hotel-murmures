import { Navbar } from "@/components/Navbar";
import { HotelHero } from "@/components/hotel/HotelHero";
import { HotelIntro } from "@/components/hotel/HotelIntro";
import { HospitalitySection } from "@/components/hotel/HospitalitySection";
import { SpiritCarousel } from "@/components/hotel/SpiritCarousel";
import { LocationCard } from "@/components/hotel/LocationCard";
import { ImageGallery } from "@/components/hotel/ImageGallery";
import { TestimonialSection } from "@/components/hotel/TestimonialSection";
import { ExploreGrid } from "@/components/hotel/ExploreGrid";
import { Footer } from "@/components/Footer";

export default function HotelPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <HotelHero />
      <HotelIntro />
      <HospitalitySection />
      <SpiritCarousel />
      <LocationCard />
      <ImageGallery />
      <TestimonialSection />
      <ExploreGrid />
      <Footer />
    </div>
  );
}
