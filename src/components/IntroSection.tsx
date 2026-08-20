import { LogoWatermark } from "./LogoWatermark";
import { contenu } from "@/contenu";

const { intro } = contenu.accueil;

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative flex w-full flex-col items-center gap-14 overflow-hidden border-b border-chocolate/10 px-5 pt-24 pb-24 md:px-10 md:pt-36 md:pb-36"
    >
      <LogoWatermark className="fade-in left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[62%] md:w-auto" />
      <div className="stagger relative z-10 flex w-full max-w-screen-xl flex-col items-center gap-6">
        <h2 className="w-full text-center text-2xl font-normal uppercase leading-8 md:leading-10 text-chocolate md:text-3xl">
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
