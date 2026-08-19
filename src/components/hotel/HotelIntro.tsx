import { LogoWatermark } from "../LogoWatermark";
import { contenu } from "@/contenu";

const { intro } = contenu.hotel;

export function HotelIntro() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <LogoWatermark className="left-1/2 top-1/2 h-[calc(100%-2rem)] w-auto -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 flex w-full max-w-screen-md flex-col items-center gap-8">
        <div className="h-px w-16 bg-pale-brown/50" />
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-pale-brown">
          {intro.surTitre}
        </p>
        <p className="text-center text-lg leading-relaxed text-dark-chocolate md:text-xl xl:text-2xl xl:leading-relaxed">
          {intro.texte}
        </p>
        <div className="h-px w-16 bg-pale-brown/50" />
      </div>
    </section>
  );
}
