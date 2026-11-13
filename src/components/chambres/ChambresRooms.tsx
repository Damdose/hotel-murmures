import type { CSSProperties } from "react";
import { RoomCard } from "./RoomCard";
import { guestyBookingUrl } from "@/lib/guesty";
import { contenu } from "@/contenu";

const GUESTY_URL = guestyBookingUrl();

// Une série de photos par chambre. Les textes viennent de `textes.json`, appariés
// par leur rang : le nombre de chambres est donc fixé ici, pas dans l'éditeur.
const serie = (nom: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/images/chambres/chambre-${nom}-${i + 1}.jpg`);

const classique = serie("classique", 7);
const superieure = serie("superieure", 11);

// Carrousel de la carte : les 3 premières. Galerie « Explorer » : la série complète.
const seriesPhotos = [
  classique.slice(0, 3),
  superieure.slice(0, 3),
  ["/images/murmures-1.jpeg", "/images/murmures-11.jpeg", "/images/murmures-4.jpeg"],
];
const seriesGalerie = [classique, superieure, undefined];

export function ChambresRooms() {
  return (
    <section className="flex w-full flex-col items-center gap-10 md:gap-14 px-6 pt-16 pb-16 md:px-10 md:pb-24">
      <div
        className="flex w-full max-w-screen-xl flex-col items-start gap-10"
        id="section-rooms"
      >
        <div
          className="stagger grid w-full grid-cols-1 gap-6 md:grid-cols-3"
          style={{ "--stagger-step": "150ms" } as CSSProperties}
        >
          {contenu.chambres.cartes.map((chambre, i) => (
            <RoomCard
              key={chambre.titre}
              images={seriesPhotos[i]}
              galleryImages={seriesGalerie[i]}
              title={chambre.titre}
              features={[
                { label: chambre.equipement1 },
                { label: chambre.equipement2 },
                { label: chambre.equipement3 },
              ]}
              description={chambre.description}
              href={GUESTY_URL}
              ctaLabel={chambre.bouton}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
