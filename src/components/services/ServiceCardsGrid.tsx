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
      <div className="flex w-full flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div key={service.title} className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.34rem)]">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
