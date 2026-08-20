import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { contenu } from "@/contenu";

const { chambres } = contenu.accueil;

const images = [
  "/images/murmures-8.jpeg",
  "/images/murmures-2.jpeg",
  "/images/murmures-1.jpeg",
];

export function RoomsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-gradient-to-b from-antique-white to-linen px-5 pt-16 pb-16 md:px-10 md:pt-24">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-14">
        <div className="stagger flex w-full flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-14">
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-1">
            <p
              className="text-5xl leading-[1.05] text-pale-brown"
              style={{ fontFamily: "var(--font-pf-marlet-display)" }}
            >
              {chambres.surTitre}
            </p>
            <h2 className="text-base font-normal uppercase leading-6 tracking-[0.15em] text-chocolate md:text-lg">
              {chambres.titre}
            </h2>
          </div>
          <Link
            href="/nos-chambres"
            className="cta flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-chocolate px-4 py-3 no-underline hover:bg-dark-chocolate md:w-auto md:justify-start md:py-2"
          >
            <span className="whitespace-pre font-serif uppercase text-white text-base">
              {chambres.bouton}
            </span>
            <ArrowIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
        <div
          className="stagger grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          style={{ "--stagger-step": "140ms" } as CSSProperties}
        >
          {chambres.cartes.map((room, i) => (
            <div key={room.titre} className="group flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded md:aspect-square">
                <Image
                  src={images[i]}
                  alt={room.titre}
                  fill
                  className="zoom-slow object-cover object-center"
                  sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl">
                  {room.titre}
                </h3>
                <p className="text-base font-light leading-6 text-dark-chocolate">
                  {room.description}
                </p>
                <p className="text-sm font-medium text-pale-brown">
                  {room.prix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
