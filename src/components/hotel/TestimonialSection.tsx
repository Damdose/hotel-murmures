"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Un hôtel qui ne se raconte pas. Il se devine. On y entre comme dans un lieu familier, avec cette impression rare d'être attendu.",
    author: "Claire D., séjour en couple",
  },
  {
    quote:
      "Un endroit hors du temps, où chaque détail a été pensé pour nous faire oublier le reste.",
    author: "Thomas M., voyage d'affaires",
  },
  {
    quote:
      "L'élégance sans ostentation. Un service impeccable et une discrétion rare.",
    author: "Sophie L., escapade parisienne",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 pt-12 pb-24 md:px-10 max-md:pb-16">
      <div className="flex w-full max-w-screen-xl items-center gap-14 max-md:flex-col max-md:pr-0 md:pr-14 md:max-xl:pr-0">
        <div className="flex flex-1">
          <div className="flex w-full flex-col items-center gap-2.5 overflow-hidden">
            <div className="flex flex-1 flex-col gap-12">
              <div className="flex w-full flex-col items-start gap-8">
                <p className="w-full max-w-screen-md text-lg text-dark-chocolate md:text-xl xl:text-2xl">
                  {testimonial.quote}
                </p>
                <p className="text-base leading-5 text-neutral-600">
                  {testimonial.author}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-6 w-6 opacity-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g transform="translate(4.32 6.24)">
                      <path
                        d="M15.36 5.76L0 5.76M0 5.76L5.76 0M0 5.76L5.76 11.52"
                        stroke="currentColor"
                        strokeWidth="1.44"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-xl text-dark-chocolate">
                  {current + 1} / {testimonials.length}
                </p>
                <button
                  onClick={next}
                  className="relative h-6 w-6 cursor-pointer"
                  aria-label="Avis suivant"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.32 12L19.68 12M19.68 12L13.92 17.76M19.68 12L13.92 6.24"
                      stroke="currentColor"
                      strokeWidth="1.44"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-80 w-px bg-black/10 max-md:hidden" />

        <div className="flex flex-col items-center gap-4 px-16 max-md:px-0">
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl uppercase leading-[1.2em] text-chocolate">
              4,84/5
            </p>
            <div className="relative h-3 w-24">
              <Image
                src="/images/murmures-5.jpeg"
                alt="Étoiles"
                fill
                className="object-contain object-center"
                sizes="96px"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-base leading-5 text-dark-chocolate">+180 avis</p>
        </div>
      </div>
    </section>
  );
}
