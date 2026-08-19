import { LogoWatermark } from "../LogoWatermark";
import { contenu } from "@/contenu";

const { intro } = contenu.services;

export function ServicesIntro() {
  return (
    <section
      id="intro-section"
      className="relative flex w-full flex-col items-center gap-14 overflow-hidden px-5 pt-16 pb-16 md:px-10 md:pb-20"
    >
      <LogoWatermark className="left-1/2 top-1/2 h-[calc(100%-2rem)] w-auto -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 flex w-full max-w-screen-xl flex-col items-center gap-6">
        <p className="w-full text-center text-base uppercase tracking-[0] text-chocolate">
          {intro.surTitre}
        </p>
        <div className="flex w-full max-w-screen-md flex-col gap-5 text-center text-base leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
          <p>{intro.paragraphe1}</p>
          <p>{intro.paragraphe2}</p>
          <p>{intro.paragraphe3}</p>
        </div>
      </div>
    </section>
  );
}
