import type { CSSProperties } from "react";
import { ServiceCard, largeurCarte } from "./ServiceCard";
import { TitreSection } from "./TitreSection";
import { contenu } from "@/contenu";

const { services } = contenu.accueil;

// Les photos vivent dans le code, les textes dans `textes.json` : l'éditeur ne
// peut donc pas produire une carte sans image. Les deux listes sont appariées
// par leur rang, et `plan.ts` interdit d'allonger celle des textes.
const images = [
  "/images/murmures-5.jpeg",   // Conciergerie      - la salle du cafe
  "/images/murmures-6.jpeg",   // Coffee Shop       - le comptoir du coffee bar
  "/images/murmures-18.jpeg",  // Petit-dejeuner    - cake sous cloche et tasses
  "/images/murmures-10.jpeg",  // Literie           - tete de lit et oreillers
  "/images/murmures-8.jpeg",   // Chambres          - la chambre duplex
];

export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-16 md:px-10 md:pb-24"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-14">
        <TitreSection surTitre={services.surTitre} titre={services.titre} />
        <div
          className="stagger flex w-full flex-wrap justify-center gap-8"
          style={{ "--stagger-step": "140ms" } as CSSProperties}
        >
          {services.cartes.map((carte, i) => (
            <div
              key={carte.titre}
              className={largeurCarte(i, services.cartes.length)}
            >
              <ServiceCard
                image={images[i]}
                title={carte.titre}
                description={carte.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
