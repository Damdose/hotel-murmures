import { Navbar } from "@/components/Navbar";
import { ChambresHero } from "@/components/chambres/ChambresHero";
import { ChambresRooms } from "@/components/chambres/ChambresRooms";
import { Footer } from "@/components/Footer";

export default function NosChambres() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <ChambresHero />
      <ChambresRooms />
      <Footer />
    </div>
  );
}
