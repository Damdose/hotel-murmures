import { contenu } from "@/contenu";

const { carte } = contenu.accueil;
const { adresseLigne1, adresseLigne2, nomHotel } = contenu.global;

// Le plan suit l'adresse saisie dans l'éditeur : la changer déplace le repère.
const requeteCarte = encodeURIComponent(`${adresseLigne1}, ${adresseLigne2}`);

type MapSectionProps = {
  className?: string;
};

export function MapSection({ className = "" }: MapSectionProps) {
  return (
    <section
      className={`flex w-full flex-col items-center gap-10 px-5 py-16 md:px-10 md:py-24 ${className}`}
    >
      <div className="flex w-full max-w-screen-xl flex-col gap-8">
        <div className="stagger flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-normal uppercase leading-8 md:leading-10 text-chocolate md:text-3xl">
            {carte.titre}
          </h2>
          <p className="text-base font-light leading-7 text-dark-chocolate/70">
            {carte.adresse}
          </p>
        </div>

        <div className="reveal-image relative h-64 w-full overflow-hidden rounded bg-chocolate/10 md:h-[420px]">
          <iframe
            src={`https://www.google.com/maps?q=${requeteCarte}&output=embed`}
            className="map-tint absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Localisation de l'${nomHotel}`}
          />
        </div>
      </div>
    </section>
  );
}
