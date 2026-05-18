import Image from "next/image";

export function HotelHero() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden md:h-96 xl:h-[540px]">
      <Image
        src="/images/murmures-5.jpeg"
        alt="Vue panoramique de l'hôtel"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-x-0 top-0 h-[530px] max-md:h-80 bg-gradient-to-b from-black/50 to-transparent" />
    </section>
  );
}
