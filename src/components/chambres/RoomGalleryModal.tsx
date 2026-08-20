"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface RoomGalleryModalProps {
  images: string[];
  title: string;
  bookingUrl: string;
  onClose: () => void;
}

export function RoomGalleryModal({
  images,
  title,
  bookingUrl,
  onClose,
}: RoomGalleryModalProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galerie photos — ${title}`}
      className="veil-in fixed inset-0 z-[100] flex flex-col bg-dark-chocolate/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex w-full shrink-0 items-center justify-between gap-4 px-5 py-5 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-base uppercase tracking-normal text-linen md:text-xl">
            {title}
          </h2>
          <p className="text-sm font-light text-linen/60">
            {current + 1} / {images.length}
          </p>
        </div>

        <button
          type="button"
          aria-label="Fermer la galerie"
          onClick={onClose}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 transition-colors hover:bg-white/20"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              className="text-linen"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="relative flex min-h-0 w-full flex-1 items-center justify-center px-4 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full max-w-screen-lg">
          {images.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-500 ease-[var(--ease-murmure)] ${
                i === current ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${title} — photo ${i + 1}`}
                fill
                className="rounded object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority={i === current}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={prev}
              className="absolute left-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 transition-colors hover:bg-white/20 md:left-6 md:h-12 md:w-12"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
              aria-label="Photo suivante"
              onClick={next}
              className="absolute right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10 transition-colors hover:bg-white/20 md:right-6 md:h-12 md:w-12"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12L20 12M20 12L14 6M20 12L14 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div
        className="flex w-full shrink-0 flex-col items-center gap-5 px-5 py-5 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-w-full items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Voir la photo ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded border-none p-0 transition-opacity md:h-16 md:w-24 ${
                i === current ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="96px"
              />
            </button>
          ))}
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-linen px-5 py-2.5 no-underline transition-colors hover:bg-white"
        >
          <span className="whitespace-pre font-serif text-base uppercase leading-5 text-dark-chocolate">
            Réserver
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12L20 12M20 12L14 6M20 12L14 18"
              stroke="currentColor"
              className="text-dark-chocolate"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>,
    document.body,
  );
}
