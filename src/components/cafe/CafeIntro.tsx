import type { CSSProperties } from "react";
import { LogoWatermark } from "../LogoWatermark";
import { contenu } from "@/contenu";

const { intro } = contenu.cafe;

export function CafeIntro() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pt-16 pb-16 md:px-10 md:pt-20">
      {/* Le filigrane suit la même boîte que le contenu et que la galerie en
          dessous : son bord gauche tombe donc pile sur celui de la première
          photo, au lieu de flotter à un pourcentage de la largeur d'écran. */}
      <div className="pointer-events-none absolute inset-0 flex justify-center px-5 md:px-10">
        <div className="relative w-full max-w-screen-xl">
          <LogoWatermark className="fade-in left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-0 md:h-[calc(100%-2rem)] md:w-auto" />
        </div>
      </div>
      <div className="relative z-10 flex w-full max-w-screen-xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-20">
        <div className="reveal reveal-left flex flex-col gap-2 md:w-1/3">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pale-brown">
            {intro.surTitre}
          </p>
          <h2
            className="text-3xl font-light text-chocolate md:text-4xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            {intro.titre}
          </h2>
        </div>
        <div
          className="stagger flex flex-col gap-6 text-base font-light leading-[1.7] text-dark-chocolate md:w-2/3 md:text-lg"
          style={{ "--stagger-step": "120ms", "--reveal-delay": "160ms" } as CSSProperties}
        >
          <p className="dropcap">{intro.paragraphe1}</p>
          <p>{intro.paragraphe2}</p>
          <p>{intro.paragraphe3}</p>
        </div>
      </div>
    </section>
  );
}
