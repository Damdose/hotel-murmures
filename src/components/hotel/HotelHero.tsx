import Image from "next/image";
import type { CSSProperties } from "react";
import { contenu } from "@/contenu";

const { hero } = contenu.hotel;

export function HotelHero() {
  return (
    <section className="relative flex h-[480px] w-full items-end overflow-hidden md:h-[600px] xl:h-[720px]">
      <Image
        src="/images/murmures-5.jpeg"
        alt="Vue panoramique de l'hôtel"
        fill
        className="drift object-cover object-center"
        sizes="100vw"
        priority
      />
      {/* Voile sur toute la photo, jamais sur une bande : il s'assombrit vers le
          bas pour le titre mais ne remonte jamais au-dessus de 40 %, sinon un
          creux clair apparaît en travers de l'image. */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/75 via-dark-chocolate/50 to-dark-chocolate/40" />
      <div
        className="stagger relative z-10 flex w-full flex-col items-center gap-4 px-5 pb-16 text-center md:pb-24"
        style={{ "--stagger-step": "160ms", "--reveal-duration": "1200ms" } as CSSProperties}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80 md:text-base">
          {hero.surTitre}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl xl:text-6xl">
          {hero.titre}
        </h1>
        <p className="mt-2 max-w-lg text-base font-light leading-relaxed text-white/80 md:text-lg">
          {hero.sousTitre}
        </p>
      </div>
    </section>
  );
}
