import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="flex h-[320px] w-full items-center justify-center bg-orange-50 pt-16 md:h-[530px]">
      <Image
        src="/logos/logo-chocolate.svg"
        alt="Hôtel des Murmures"
        width={669}
        height={210}
        className="w-80 md:w-[500px]"
        priority
      />
    </section>
  );
}
