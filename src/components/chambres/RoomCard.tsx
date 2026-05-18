import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";
import { RoomCardCarousel } from "./RoomCardCarousel";

interface Feature {
  label: string;
}

interface RoomCardProps {
  images: string[];
  title: string;
  features: Feature[];
  description: string;
  href: string;
  ctaLabel: string;
}

export function RoomCard({
  images,
  title,
  features,
  description,
  href,
  ctaLabel,
}: RoomCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded bg-white after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-solid after:border-black/10">
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

        <Link
          href={href}
          className="flex items-center gap-2 rounded-full no-underline"
        >
          <span className="whitespace-pre text-base uppercase leading-5 text-dark-chocolate">
            {ctaLabel}
          </span>
          <ArrowIcon className="h-6 w-6 text-dark-chocolate" />
        </Link>
      </div>
    </div>
  );
}
