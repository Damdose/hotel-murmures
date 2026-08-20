import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { contenu } from "@/contenu";

const { explorer } = contenu.hotel;

interface ExploreCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

function ExploreCard({
  image,
  title,
  description,
  href,
  badge,
}: ExploreCardProps) {
  return (
    <div className="flex flex-1 max-md:w-full">
      <Link
        href={href}
        className="cta group flex w-full flex-col items-start gap-6 overflow-hidden no-underline"
      >
        <div className="relative z-[1] aspect-[4/3] w-full overflow-hidden rounded md:aspect-auto md:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="zoom-slow object-cover object-center"
            sizes="(max-width: 809px) 100vw, (max-width: 1272px) 33vw, 403px"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl xl:text-2xl">
              {title}
            </h3>
            {badge ? (
              <div className="flex items-center rounded-[1000px] bg-antique-white px-3 py-1.5">
                <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
                  {badge}
                </p>
              </div>
            ) : (
              <div className="relative h-8 w-8 shrink-0">
                <svg
                  viewBox="0 0 32 33"
                  fill="none"
                  className="h-full w-full"
                >
                  <path
                    d="M8.45742 24.0423L23.5424 8.9574M23.5424 8.9574L23.5424 20.2711M23.5424 8.9574L12.2287 8.9574"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

// Photo et destination restent dans le code ; l'éditeur ne règle que les mots.
const illustrations = [
  { image: "/images/murmures-2.jpeg", href: "/nos-chambres" },
  { image: "/images/murmures-10.jpeg", href: "/services" },
  { image: "/images/murmures-6.jpeg", href: "/" },
];

const cards: ExploreCardProps[] = explorer.cartes.map((carte, i) => ({
  ...illustrations[i],
  title: carte.titre,
  description: carte.description,
  badge: carte.badge || undefined,
}));

export function ExploreGrid() {
  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 py-16 md:px-10 md:py-24 md:max-xl:px-8">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-14">
        <div className="stagger flex w-full items-start gap-20 max-md:flex-col max-md:gap-6 md:max-xl:gap-6">
          <h2 className="max-w-xl flex-1 whitespace-pre-line text-2xl font-normal uppercase leading-8 md:leading-10 text-chocolate max-md:w-full md:text-3xl">
            {explorer.titre}
          </h2>
          <div className="flex flex-1 flex-col gap-4 max-md:w-full">
            <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
              {explorer.paragraphe1}
            </p>
            <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
              {explorer.paragraphe2}
            </p>
          </div>
        </div>

        <div
          className="stagger flex w-full items-start gap-8 max-md:flex-col md:max-xl:gap-4"
          style={{ "--stagger-step": "150ms" } as CSSProperties}
        >
          {cards.map((card) => (
            <ExploreCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
