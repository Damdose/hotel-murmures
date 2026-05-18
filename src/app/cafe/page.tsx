import { Navbar } from "@/components/Navbar";
import { CafeHero } from "@/components/cafe/CafeHero";
import { CafeIntro } from "@/components/cafe/CafeIntro";
import { CafeGallery } from "@/components/cafe/CafeGallery";
import { CafeMenu } from "@/components/cafe/CafeMenu";
import { CafeInfo } from "@/components/cafe/CafeInfo";
import { Footer } from "@/components/Footer";

export default function CafePage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <CafeHero />
      <CafeIntro />
      <CafeGallery />
      <CafeMenu />
      <CafeInfo />
      <Footer />
    </div>
  );
}
