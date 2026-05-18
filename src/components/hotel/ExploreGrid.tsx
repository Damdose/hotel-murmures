import Image from "next/image";
import Link from "next/link";

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
        className="flex w-full flex-col items-start gap-6 overflow-hidden no-underline"
      >
        <div className="relative z-[1] h-96 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
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

const cards: ExploreCardProps[] = [
  {
    image:
      "/images/murmures-2.jpeg",
    title: "Les chambres",
    description:
      "Six parenthèses d'élégance et de velours au cœur de Paris.",
    href: "/nos-chambres",
  },
  {
    image:
      "/images/murmures-4.jpeg",
    title: "Les services",
    description:
      "Conciergerie privée, room service, linge haute couture… Chaque attention compte.",
    href: "/services",
  },
  {
    image:
      "/images/murmures-6.jpeg",
    title: "Le Café",
    description:
      "Un repaire caché sous la pierre, pour les amateurs de saveurs et de confidences.",
    href: "/",
    badge: "Soon",
  },
];

export function ExploreGrid() {
  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 py-16 md:px-10 md:py-24 md:max-xl:px-8">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-14">
        <div className="flex w-full items-start gap-20 max-md:flex-col max-md:gap-6 md:max-xl:gap-6">
          <h2 className="max-w-xl flex-1 text-2xl font-normal uppercase leading-10 text-chocolate max-md:w-full md:text-3xl">
            Raffinement discret,
            <br />
            attentions précises
          </h2>
          <div className="flex flex-1 flex-col gap-4 max-md:w-full">
            <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
              Votre confort, pensé dans les moindres détails.
            </p>
            <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
              À l&apos;Hôtel des Murmures, l&apos;art de recevoir se révèle dans
              l&apos;invisible : un petit-déjeuner glissé au seuil de votre
              porte, un oreiller choisi selon vos habitudes, un taxi déjà prêt,
              comme par anticipation.
            </p>
          </div>
        </div>

        <div className="flex w-full items-start gap-8 overflow-hidden max-md:flex-col md:max-xl:gap-4">
          {cards.map((card) => (
            <ExploreCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
