import Image from "next/image";
import type { CSSProperties } from "react";

const images = [
  { src: "/images/murmures-5.jpeg", alt: "Salle du café, comptoir courbe et mur de pierre" },
  { src: "/images/murmures-6.jpeg", alt: "Le comptoir du coffee bar" },
  { src: "/images/murmures-7.jpeg", alt: "Façade de l'hôtel et du café, rue du Haut Pavé" },
];

export function CafeGallery() {
  return (
    <section className="flex w-full flex-col items-center px-5 pb-16 md:px-10">
      <div
        className="stagger grid w-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-3"
        style={{ "--stagger-step": "150ms" } as CSSProperties}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="zoom-host relative aspect-[4/3] w-full overflow-hidden rounded"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="zoom-slow object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
