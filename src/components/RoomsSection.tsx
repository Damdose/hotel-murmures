import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

const rooms = [
  {
    image: "/images/murmures-8.jpeg",
    title: "Chambre Classique",
    description: "Un écrin de douceur, pensé pour une nuit de quiétude absolue.",
    price: "À partir de 250€",
  },
  {
    image: "/images/murmures-2.jpeg",
    title: "Chambre Supérieure",
    description:
      "Plus d'espace, plus de lumière, pour un séjour entre confort et élégance.",
    price: "À partir de 350€",
  },
  {
    image: "/images/murmures-1.jpeg",
    title: "La Suite Murmures",
    description:
      "L'apogée du raffinement : une suite d'exception au cœur de Paris.",
    price: "À partir de 500€",
  },
];

export function RoomsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-gradient-to-b from-antique-white to-linen px-5 pt-16 pb-16 md:px-10 md:pt-24">
      <div className="flex w-full max-w-screen-xl flex-col items-start gap-14">
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-14">
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-1">
            <p
              className="text-5xl leading-[1.2em] text-pale-brown"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              L&apos;intimité d&apos;un lieu d&apos;exception.
            </p>
            <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
              Nos Chambres &amp; Suite
            </h2>
          </div>
          <Link
            href="/nos-chambres"
            className="flex shrink-0 items-center gap-2 rounded-full bg-chocolate px-4 py-2 no-underline"
          >
            <span className="whitespace-pre uppercase text-white text-base">
              Découvrir nos chambres
            </span>
            <ArrowIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.title} className="flex flex-col gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl">
                  {room.title}
                </h3>
                <p className="text-base font-light leading-6 text-dark-chocolate">
                  {room.description}
                </p>
                <p className="text-sm font-medium text-pale-brown">
                  {room.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
