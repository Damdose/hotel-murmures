import { ServiceCard } from "./ServiceCard";

const services = [
  {
    image: "/images/murmures-5.jpeg",
    title: "Conciergerie",
    description:
      "Une présence discrète, un service attentionné, toujours à portée.",
  },
  {
    image: "/images/murmures-6.jpeg",
    title: "Bar & Café",
    description:
      "Un comptoir chaleureux où savourer nos créations, du matin au soir.",
  },
  {
    image: "/images/murmures-7.jpeg",
    title: "Petit-déjeuner",
    description:
      "L'odeur du pain frais et du café au seuil de votre porte, chaque matin.",
  },
  {
    image: "/images/murmures-4.jpeg",
    title: "Room Service",
    description:
      "Une invitation à déguster notre sélection directement en chambre.",
  },
  {
    image: "/images/murmures-1.jpeg",
    title: "Literie d'exception",
    description:
      "Draps en percale, oreillers en duvet ; la promesse d'une nuit enveloppante.",
  },
  {
    image: "/images/murmures-8.jpeg",
    title: "Chambres intimistes",
    description:
      "Chaque chambre est une parenthèse d'élégance au cœur de Paris.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-16 md:px-10 md:pb-24"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-14">
        <div className="flex w-full flex-col items-center gap-2">
          <h3
            className="w-full text-center text-3xl font-light leading-10 text-pale-brown md:text-4xl xl:text-5xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            Des services exclusifs
          </h3>
          <h2
            className="w-full text-center text-2xl font-normal leading-10 text-pale-brown md:text-3xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            L&apos;art de recevoir
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
