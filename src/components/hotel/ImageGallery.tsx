import Image from "next/image";
import { contenu } from "@/contenu";

const { galerie } = contenu.hotel;

const galleryImages = [
  {
    src: "/images/murmures-6.jpeg",
    alt: "Le coffee bar de l'Hôtel des Murmures",
  },
  {
    src: "/images/murmures-3.jpeg",
    alt: "Chambre de l'Hôtel des Murmures, boiseries et lumière douce",
    showButton: true,
  },
  {
    src: "/images/murmures-4.jpeg",
    alt: "Salle de bain en travertin, double vasque et robinetterie bronze",
  },
];

export function ImageGallery() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-gradient-to-b from-antique-white to-linen px-5 py-12 md:px-10">
      <div className="flex w-full items-start gap-4 overflow-x-auto md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {galleryImages.map((img) => (
          <div
            key={img.src}
            className="relative w-[85vw] shrink-0 overflow-hidden rounded md:w-[60vw] xl:w-[calc(33.333vw-2rem)]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 85vw, (max-width: 1280px) 60vw, 33vw"
              loading="lazy"
            />
            {img.showButton && (
              <div className="absolute right-4 bottom-4 flex cursor-pointer items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 backdrop-blur-sm transition-colors hover:bg-white md:right-6 md:bottom-6">
                <p className="text-sm font-medium uppercase tracking-wide text-dark-chocolate">
                  {galerie.bouton}
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-dark-chocolate"
                >
                  <path
                    d="M4 12L20 12M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
