import Image from "next/image";
import type { CSSProperties } from "react";
import { contenu } from "@/contenu";

const { hero } = contenu.cafe;

// `overflow-hidden` obligatoire tant que l'image porte `drift` : voir
// HeroSection, sans découpe la photo déborde sous le voile.
export function CafeHero() {
  return (
    <section className="relative flex h-[60vh] max-h-[700px] w-full items-end overflow-hidden">
      <Image
        src="/images/murmures-6.jpeg"
        alt="Le Café des Murmures"
        fill
        className="drift object-cover object-center"
        priority
      />
      {/* Voile sur toute la photo : voir HotelHero. */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/75 via-dark-chocolate/50 to-dark-chocolate/40" />
      <div
        className="stagger relative z-[1] flex w-full flex-col items-center gap-3 px-6 pb-16 text-center"
        style={{ "--stagger-step": "160ms", "--reveal-duration": "1200ms" } as CSSProperties}
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-antique-white">
          {hero.surTitre}
        </p>
        <h1
          className="max-w-2xl text-4xl font-light leading-[1.15] text-white md:text-6xl"
          style={{ fontFamily: "var(--font-pf-marlet-display)" }}
        >
          {hero.titre}
        </h1>
      </div>
    </section>
  );
}
