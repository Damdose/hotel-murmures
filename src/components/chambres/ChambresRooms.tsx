import type { CSSProperties } from "react";
import { RoomCard } from "./RoomCard";
import { guestyBookingUrl } from "@/lib/guesty";
import { contenu } from "@/contenu";

const GUESTY_URL = guestyBookingUrl();

// Une série de photos par chambre. Les textes viennent de `textes.json`, appariés
// par leur rang : le nombre de chambres est donc fixé ici, pas dans l'éditeur.
const seriesPhotos = [
  ["/images/murmures-9.jpeg", "/images/murmures-10.jpeg", "/images/murmures-13.jpeg"],
  ["/images/murmures-2.jpeg", "/images/murmures-3.jpeg", "/images/murmures-4.jpeg"],
  ["/images/murmures-1.jpeg", "/images/murmures-11.jpeg", "/images/murmures-8.jpeg", "/images/murmures-4.jpeg"],
];

export function ChambresRooms() {
  return (
    <section className="flex w-full flex-col items-center gap-14 px-6 pt-16 pb-24 md:px-10">
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
