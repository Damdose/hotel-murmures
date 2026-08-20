import Image from "next/image";
import type { CSSProperties } from "react";
import { BookingWidget } from "./BookingWidget";
import { contenu } from "@/contenu";

// `overflow-hidden` n'est pas décoratif : `drift` agrandit la photo de 7,5 %
// et la décale, donc sans découpe elle déborde du bloc alors que le voile, lui,
// s'arrête au bloc, d'où une bande claire en bas de l'image.
export function HeroSection() {
  return (
    <section className="relative flex h-[680px] w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 md:h-[80vh] md:max-h-[820px] md:min-h-[620px] md:px-6 md:pt-28">
      <Image
        src="/images/murmures-3.jpeg"
        alt={contenu.global.nomHotel}
        fill
        sizes="100vw"
        quality={90}
        className="drift object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-dark-chocolate/30" />
      <div className="relative z-[1] flex w-full flex-col items-center gap-10">
        <h1 className="reveal reveal-soft flex flex-col items-center gap-3" style={{ "--reveal-delay": "260ms" } as CSSProperties}>
          <Image
            src="/logos/logo-white.svg"
            alt="Murmures — Hôtel & Café"
            width={380}
            height={119}
            className="w-64 md:w-96"
            priority
          />
        </h1>
        <div
          className="reveal flex w-full justify-center"
          style={{ "--reveal-delay": "620ms", "--reveal-duration": "1100ms" } as CSSProperties}
        >
          <BookingWidget />
        </div>
      </div>

      {/* Invitation discrète à descendre : un filet et un chevron. */}
      <div
        className="fade-in absolute bottom-8 left-1/2 z-[1] -translate-x-1/2"
        style={{ "--reveal-delay": "1400ms" } as CSSProperties}
        aria-hidden="true"
      >
        <svg
          width="18"
          height="34"
          viewBox="0 0 18 34"
          fill="none"
          className="scroll-cue text-white"
        >
          {/* Le filet naît de rien et se ferme sur le chevron. */}
          <defs>
            <linearGradient id="scroll-cue-line" x1="9" y1="0" x2="9" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M9 0V26" stroke="url(#scroll-cue-line)" strokeWidth="1" strokeLinecap="round" />
          <path
            d="M9 26L3.5 20.5M9 26L14.5 20.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
