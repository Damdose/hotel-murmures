import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="group flex flex-col items-start gap-6 overflow-hidden">
      <div className="relative h-[480px] w-full overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          fill
          className="zoom-slow object-cover object-center"
          sizes="(max-width: 809px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * Largeur d'une carte dans la grille de services : trois colonnes en xl, deux
 * en md. Quand le compte ne tombe pas juste, la dernière ligne se partage la
 * place restante au lieu de laisser un trou à droite. Avec cinq cartes, les
 * deux dernières passent donc en demi-largeur sur grand écran, et la cinquième
 * en pleine largeur sur écran moyen.
 */
export function largeurCarte(index: number, total: number) {
  // Combien de cartes traînent sur la dernière ligne, 0 si elle est pleine.
  const orphelines = (colonnes: number) => {
    const reste = total % colonnes;
    return reste !== 0 && index >= total - reste ? reste : 0;
  };

  const md = orphelines(2) === 1 ? "md:w-full" : "md:w-[calc(50%-1rem)]";

  const xl =
    orphelines(3) === 2
      ? "xl:w-[calc(50%-1rem)]"
      : orphelines(3) === 1
        ? "xl:w-full"
        : "xl:w-[calc(33.333%-1.34rem)]";

  return `w-full ${md} ${xl}`;
}
