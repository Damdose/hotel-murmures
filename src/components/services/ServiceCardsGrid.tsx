import { ServiceCard } from "../ServiceCard";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

interface ServiceCardsGridProps {
  title: string;
  services: ServiceItem[];
}

export function ServiceCardsGrid({ title, services }: ServiceCardsGridProps) {
  return (
    <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
      <div className="flex w-full flex-col items-center gap-2">
        <h2 className="w-full text-center text-2xl font-normal uppercase text-chocolate md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
