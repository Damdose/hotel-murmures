import { LogoWatermark } from "./LogoWatermark";
import { contenu } from "@/contenu";

const { intro } = contenu.accueil;

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative flex w-full flex-col items-center gap-14 overflow-hidden border-b border-chocolate/10 px-5 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28"
    >
      <LogoWatermark className="left-1/2 top-1/2 h-[calc(100%-2rem)] w-auto -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 flex w-full max-w-screen-xl flex-col items-center gap-6">
        <h2 className="w-full text-center text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
          {intro.titre}
        </h2>
        <div className="flex w-full max-w-4xl flex-col text-center text-lg font-light leading-[140%] text-dark-chocolate md:text-xl">
          <p>{intro.paragraphe1}</p>
          <p className="mt-4">{intro.paragraphe2}</p>
        </div>
      </div>
    </section>
  );
}
