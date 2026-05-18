import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ExperienceFeatures } from "@/components/services/ExperienceFeatures";
import { ServiceCardsGrid } from "@/components/services/ServiceCardsGrid";
import { FaqSection } from "@/components/services/FaqSection";
import { Footer } from "@/components/Footer";

const artDeRecevoir = [
  {
    image:
      "/images/murmures-5.jpeg",
    title: "Conciergerie Privée",
    description:
      "Un service discret et attentionné pour répondre à toutes vos envies, des plus simples aux plus secrètes.",
  },
  {
    image:
      "/images/murmures-6.jpeg",
    title: "Bar Speakeasy",
    description:
      "Un lieu caché derrière un rideau feutré, où chaque cocktail est une création sur mesure.",
  },
  {
    image:
      "/images/murmures-7.jpeg",
    title: "Petit-déjeuner parisien",
    description:
      "Si vous le désirez un petit-déjeuner est servi tous les matins dans les Suites ou déposé dans un panier sur le seuil, au choix",
  },
  {
    image:
      "/images/murmures-4.jpeg",
    title: "Room Service Signature",
    description:
      "Des plats raffinés servis en chambre, avec une attention portée à chaque détail.",
  },
  {
    image:
      "/images/murmures-1.jpeg",
    title: "Literie Haute Couture",
    description:
      "Oreillers en duvet, draps en percale et senteurs subtiles pour un sommeil enveloppant et réparateur.",
  },
  {
    image:
      "/images/murmures-8.jpeg",
    title: "Chambres & Suites Intimistes",
    description:
      "Des refuges chaleureux où le confort moderne rencontre le charme rétro, pensés pour la détente et la confidentialité.",
  },
];

const experiencesSurMesure = [
  {
    image:
      "/images/murmures-2.jpeg",
    title: "Service de pressing",
    description: "",
  },
  {
    image:
      "/images/murmures-3.jpeg",
    title: "Navette pour l\u2019aéroport",
    description: "",
  },
  {
    image:
      "/images/murmures-5.jpeg",
    title: "Personal shopper",
    description: "",
  },
  {
    image:
      "/images/murmures-6.jpeg",
    title: "Chef privé",
    description: "",
  },
  {
    image:
      "/images/murmures-7.jpeg",
    title: "Expérience aérienne",
    description: "",
  },
  {
    image:
      "/images/murmures-8.jpeg",
    title: "Privatisation de l\u2019hôtel",
    description: "",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <ExperienceFeatures />
      <section className="flex w-full flex-col items-center gap-24 px-5 py-16 md:px-10 md:py-24">
        <ServiceCardsGrid
          title={"L\u2019art de recevoir"}
          services={artDeRecevoir}
        />
        <ServiceCardsGrid
          title="Expériences sur-mesure, sur demande"
          services={experiencesSurMesure}
        />
      </section>
      <FaqSection />
      <Footer />
    </div>
  );
}
