import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ExperienceFeatures } from "@/components/services/ExperienceFeatures";
import { ServiceCardsGrid } from "@/components/services/ServiceCardsGrid";
import { FaqSection } from "@/components/services/FaqSection";
import { Footer } from "@/components/Footer";
import { contenu } from "@/contenu";

const { artDeRecevoir } = contenu.services;

const photos = [
  "/images/murmures-5.jpeg",   // Conciergerie      - la salle du cafe
  "/images/murmures-6.jpeg",   // Coffee Shop       - le comptoir du coffee bar
  "/images/murmures-18.jpeg",  // Petit-dejeuner    - cake sous cloche et tasses
  "/images/murmures-10.jpeg",  // Literie           - tete de lit et oreillers
  "/images/murmures-8.jpeg",   // Chambres          - la chambre duplex
];

const cartesArtDeRecevoir = artDeRecevoir.cartes.map((carte, i) => ({
  image: photos[i],
  title: carte.titre,
  description: carte.description,
}));


export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <ServicesHero />
      <ExperienceFeatures />
      <section className="flex w-full flex-col items-center gap-24 px-5 py-16 md:px-10 md:py-24">
        <ServiceCardsGrid
          surTitle={artDeRecevoir.surTitre}
          title={artDeRecevoir.titre}
          services={cartesArtDeRecevoir}
        />
      </section>
      <FaqSection />
      <Footer />
    </div>
  );
}
