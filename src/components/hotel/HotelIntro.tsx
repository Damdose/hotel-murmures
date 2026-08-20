import type { CSSProperties } from "react";
import { LogoMark } from "../LogoMark";
import { contenu } from "@/contenu";

const { intro } = contenu.hotel;

export function HotelIntro() {
  return (
    <section className="flex w-full flex-col items-center px-5 py-20 md:px-10 md:py-28">
      <div
        className="stagger flex w-full max-w-screen-md flex-col items-center gap-8"
        style={{ "--stagger-step": "140ms", "--reveal-duration": "1100ms" } as CSSProperties}
      >
        <LogoMark className="h-12 w-auto text-pale-brown md:h-14" />
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-pale-brown">
          {intro.surTitre}
        </p>
        <p className="text-center text-lg leading-relaxed text-dark-chocolate md:text-xl xl:text-2xl xl:leading-relaxed">
          {intro.texte}
        </p>
        <div className="rule-draw h-px w-16 bg-pale-brown/50" />
      </div>
    </section>
  );
}
