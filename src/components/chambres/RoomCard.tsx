"use client";

import { useState } from "react";
import { ArrowIcon } from "../ArrowIcon";
import { RoomCardCarousel } from "./RoomCardCarousel";
import { RoomGalleryModal } from "./RoomGalleryModal";

interface Feature {
  label: string;
}

interface RoomCardProps {
  images: string[];
  /** Photos affichées dans la galerie plein écran (par défaut : celles du carrousel). */
  galleryImages?: string[];
  title: string;
  features: Feature[];
  description: string;
  href: string;
  ctaLabel: string;
}

export function RoomCard({
  images,
  galleryImages,
  title,
  features,
  description,
  href,
  ctaLabel,
}: RoomCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <RoomCardCarousel images={images} alt={title} />

      <div className="flex flex-col items-start gap-8 p-8">
        <div className="flex w-full flex-col items-start gap-4">
          <h3 className="text-lg font-medium uppercase tracking-normal text-chocolate md:text-xl xl:text-2xl">
            {title}
          </h3>

          <div className="flex items-center gap-4">
            {features.map((feature, i) => (
              <div key={feature.label} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="h-6 w-px overflow-hidden bg-black/10" />
                )}
                <p className="whitespace-pre text-base font-light uppercase leading-5 text-dark-chocolate">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm font-light leading-6 text-dark-chocolate md:text-base">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsGalleryOpen(true)}
          className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-transparent p-0"
        >
          <span className="whitespace-pre font-serif text-base uppercase leading-5 text-dark-chocolate">
            {ctaLabel}
          </span>
          <ArrowIcon className="h-6 w-6 text-dark-chocolate" />
        </button>
      </div>

      {isGalleryOpen && (
        <RoomGalleryModal
          images={galleryImages ?? images}
          title={title}
          bookingUrl={href}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </div>
  );
}
