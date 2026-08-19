import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden pt-16 md:h-[530px]">
      <Image
        src="/images/murmures-2.jpeg"
        alt="Hôtel des Murmures"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
    </section>
  );
}
