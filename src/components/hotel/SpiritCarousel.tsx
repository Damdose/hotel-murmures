"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const slides = [
  {
    image:
      "/images/murmures-6.jpeg",
    title: "L'intimité avant tout",
  },
  {
    image:
      "/images/murmures-3.jpeg",
    title: "Une hospitalité sincère",
  },
  {
    image:
      "/images/murmures-5.jpeg",
    title: "L'exigence du détail",
  },
  {
    image:
      "/images/murmures-1.jpeg",
    title: "Un esthétisme maîtrisé",
  },
  {
    image:
      "/images/murmures-7.jpeg",
    title: "L'exclusivité comme évidence",
  },
];

export function SpiritCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  const visibleSlides = [
    slides[(current - 1 + slides.length) % slides.length],
    slides[current],
    slides[(current + 1) % slides.length],
  ];

  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 pt-20 pb-24 md:px-10">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start gap-2">
          <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
            L&apos;esprit du lieu&nbsp;
          </h2>
        </div>

        <div className="relative h-auto w-full md:h-[565px]">
          <div className="flex justify-end gap-2.5 pb-4">
            <button
              onClick={prev}
              aria-label="Précédent"
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-dark-chocolate"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 12L4 12M4 12L10 6M4 12L10 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Suivant"
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-dark-chocolate"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12L20 12M20 12L14 6M20 12L14 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex h-full gap-8 overflow-hidden max-md:gap-0">
            {visibleSlides.map((slide, i) => (
              <div
                key={`${slide.title}-${i}`}
                className={`flex w-[calc(33.333%-16px)] shrink-0 flex-col gap-6 overflow-hidden max-md:w-full ${i !== 1 ? "max-md:hidden" : ""}`}
              >
                <div className="relative h-[480px] w-full overflow-hidden rounded">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 809px) 100vw, 403px"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl xl:text-2xl">
                  {slide.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
