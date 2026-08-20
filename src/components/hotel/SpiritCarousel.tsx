"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import type { CSSProperties } from "react";

import { contenu } from "@/contenu";

const { esprit } = contenu.hotel;

// Le carrousel est en format vertical : ces cinq photos sont les seules du lot
// nativement en portrait, elles n'ont donc pas besoin d'etre recadrees.
const images = [
  "/images/murmures-14.jpeg",  // L'intimite avant tout      - chambre, applique allumee
  "/images/murmures-16.jpeg",  // Une hospitalite sincere    - detail chevet et liseuse
  "/images/murmures-17.jpeg",  // L'exigence du detail       - robinets bronze
  "/images/murmures-15.jpeg",  // Un esthetisme maitrise     - tete de lit et applique
  "/images/murmures-12.jpeg",  // L'exclusivite comme evidence - vue Notre-Dame
];

const slides = esprit.slides.map((slide, i) => ({ ...slide, image: images[i] }));

export function SpiritCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 pt-20 pb-24 md:px-10">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-10">
        <div className="stagger flex w-full items-end justify-between">
          <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
            {esprit.titre}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-dark-chocolate/60">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={prev}
              aria-label="Précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-chocolate/20 transition-colors hover:bg-dark-chocolate hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 12L4 12M4 12L10 6M4 12L10 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-chocolate/20 transition-colors hover:bg-dark-chocolate hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12L20 12M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: 3 columns */}
        <div className="reveal reveal-slow hidden w-full gap-6 md:grid md:grid-cols-3">
          {[0, 1, 2].map((offset) => {
            const index = (current + offset) % slides.length;
            const slide = slides[index];
            return (
              <div
                key={`${slide.titre}-${index}`}
                className="swap zoom-host flex flex-col gap-5"
                style={{ "--reveal-delay": `${offset * 90}ms` } as CSSProperties}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
                  <Image
                    src={slide.image}
                    alt={slide.titre}
                    fill
                    className="zoom-slow object-cover object-center"
                    sizes="(max-width: 1280px) 33vw, 403px"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-medium uppercase text-chocolate xl:text-xl">
                  {slide.titre}
                </h3>
                <p className="text-sm font-light leading-6 text-dark-chocolate/80">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div key={current} className="swap flex w-full flex-col gap-5 md:hidden">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
            <Image
              src={slides[current].image}
              alt={slides[current].titre}
              fill
              className="object-cover object-center"
              sizes="100vw"
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-medium uppercase text-chocolate">
            {slides[current].titre}
          </h3>
          <p className="text-sm font-light leading-6 text-dark-chocolate/80">
            {slides[current].description}
          </p>
        </div>
      </div>
    </section>
  );
}
