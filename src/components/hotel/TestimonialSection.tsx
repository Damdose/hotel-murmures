"use client";

import { useState, useCallback } from "react";

import { contenu } from "@/contenu";

const { temoignages } = contenu.hotel;
const testimonials = temoignages.avis;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      className="text-pale-brown"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 pt-12 pb-24 md:px-10 max-md:pb-16">
      <div className="flex w-full max-w-screen-xl items-center gap-14 max-md:flex-col">
        {/* Quote */}
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-pale-brown/40"
            >
              <path
                d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                fill="currentColor"
              />
              <path
                d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                fill="currentColor"
              />
            </svg>
            <p className="text-xl leading-relaxed text-dark-chocolate md:text-2xl xl:text-[1.75rem] xl:leading-relaxed">
              {testimonial.citation}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-dark-chocolate">
                {testimonial.auteur}
              </p>
              <p className="text-sm text-dark-chocolate/60">
                {testimonial.contexte}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-dark-chocolate/20 transition-colors hover:bg-dark-chocolate hover:text-white"
              aria-label="Avis précédent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 12L4 12M4 12L10 6M4 12L10 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-sm text-dark-chocolate/60">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-dark-chocolate/20 transition-colors hover:bg-dark-chocolate hover:text-white"
              aria-label="Avis suivant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

        <div className="h-px w-full bg-black/10 md:h-64 md:w-px" />

        {/* Rating */}
        <div className="flex flex-col items-center gap-4 px-8 max-md:px-0">
          <p className="text-5xl font-light uppercase leading-none text-chocolate">
            {temoignages.note}
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= 4} />
            ))}
          </div>
          <p className="text-sm text-dark-chocolate/60">
            {temoignages.mention}
          </p>
        </div>
      </div>
    </section>
  );
}
