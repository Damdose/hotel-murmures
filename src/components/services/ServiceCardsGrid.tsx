import type { CSSProperties } from "react";
import { ServiceCard, largeurCarte } from "../ServiceCard";
import { TitreSection } from "../TitreSection";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

interface ServiceCardsGridProps {
  surTitle: string;
  title: string;
  services: ServiceItem[];
}

export function ServiceCardsGrid({ surTitle, title, services }: ServiceCardsGridProps) {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
      <TitreSection surTitre={surTitle} titre={title} />
      <div
        className="stagger flex w-full flex-wrap justify-center gap-8"
        style={{ "--stagger-step": "140ms" } as CSSProperties}
      >
        {services.map((service, i) => (
          <div key={service.title} className={largeurCarte(i, services.length)}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
