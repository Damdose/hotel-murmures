import { ServiceCard } from "./ServiceCard";
import { contenu } from "@/contenu";

const { services } = contenu.accueil;

// Les photos vivent dans le code, les textes dans `textes.json` : l'éditeur ne
// peut donc pas produire une carte sans image. Les deux listes sont appariées
// par leur rang, et `plan.ts` interdit d'allonger celle des textes.
const images = [
  "/images/murmures-5.jpeg",
  "/images/murmures-6.jpeg",
  "/images/murmures-7.jpeg",
  "/images/murmures-13.jpeg",
  "/images/murmures-10.jpeg",
  "/images/murmures-8.jpeg",
];

export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-16 md:px-10 md:pb-24"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-14">
        <div className="flex w-full flex-col items-center gap-2">
          <h3
            className="w-full text-center text-3xl font-light leading-10 text-pale-brown md:text-4xl xl:text-5xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            {services.surTitre}
          </h3>
          <h2
            className="w-full text-center text-2xl font-normal leading-10 text-pale-brown md:text-3xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            {services.titre}
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.cartes.map((carte, i) => (
            <ServiceCard
              key={carte.titre}
              image={images[i]}
              title={carte.titre}
              description={carte.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
