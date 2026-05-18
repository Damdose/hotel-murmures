"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

interface RoomCardCarouselProps {
  images: string[];
  alt: string;
}

export function RoomCardCarousel({ images, alt }: RoomCardCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  return (
    <div className="relative h-80 w-full">
      <section className="h-full w-full select-none">
        <div className="absolute inset-0 overflow-hidden">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} - ${i + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 809px) 100vw, 624px"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <fieldset className="pointer-events-none absolute inset-0 flex select-none items-center justify-between border-0">
          <div className="absolute inset-5 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-white/20"
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
              type="button"
              aria-label="Next"
              onClick={next}
              className="pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-white/20"
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

          <div className="pointer-events-auto absolute bottom-2.5 left-1/2 flex -translate-x-1/2 select-none items-center overflow-hidden rounded-[50px] bg-black/20">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Scroll to page ${i + 1}`}
                type="button"
                onClick={() => setCurrent(i)}
                className={`flex cursor-pointer items-center justify-center overflow-hidden border-none px-1 py-2.5 ${
                  i === 0 ? "pl-2.5" : ""
                } ${i === images.length - 1 ? "pr-2.5" : ""}`}
              >
                <div
                  className={`h-2 w-2 rounded-full border-none ${
                    i === current ? "bg-white" : "bg-white opacity-50"
                  }`}
                />
              </button>
            ))}
          </div>
        </fieldset>
      </section>
    </div>
  );
}
