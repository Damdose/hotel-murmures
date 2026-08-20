import Image from "next/image";
import type { CSSProperties } from "react";
import { contenu } from "@/contenu";

const { hero, intro } = contenu.chambres;

export function ChambresHero() {
  return (
    <>
      <section className="relative flex h-[min(480px,66svh)] w-full items-end overflow-hidden md:h-[600px] xl:h-[720px]">
        <Image
          src="/images/murmures-4.jpeg"
          alt="Nos chambres"
          fill
          className="drift object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Voile sur toute la photo : voir HotelHero. */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/75 via-dark-chocolate/50 to-dark-chocolate/40" />
        <div
          className="stagger relative z-10 flex w-full flex-col items-center gap-3 px-5 pb-16 text-center md:pb-24"
          style={{ "--stagger-step": "160ms", "--reveal-duration": "1200ms" } as CSSProperties}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/80 md:text-base">
            {hero.surTitre}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl xl:text-6xl">
            {hero.titre}
          </h1>
        </div>
      </section>

      <section className="flex w-full flex-col items-center px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-12">
        <div className="stagger flex w-full max-w-screen-md flex-col items-center gap-5">
          <p className="text-center text-base font-light leading-[160%] text-dark-chocolate md:text-lg">
            {intro.paragraphe1}
          </p>
          <p className="text-center text-base font-light leading-[160%] text-dark-chocolate md:text-lg">
            {intro.paragraphe2}
          </p>
          <p className="text-center text-base font-light leading-[160%] text-dark-chocolate md:text-lg">
            {intro.paragraphe3}
          </p>
        </div>
      </section>
    </>
  );
}
