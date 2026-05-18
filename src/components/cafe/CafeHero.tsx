import Image from "next/image";

export function CafeHero() {
  return (
    <section className="relative flex h-[60vh] max-h-[700px] w-full items-end">
      <Image
        src="/images/murmures-6.jpeg"
        alt="Le Café des Murmures"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/70 via-dark-chocolate/20 to-transparent" />
      <div className="relative z-[1] flex w-full flex-col items-center gap-3 px-6 pb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-antique-white">
          ✱ Un lieu à part
        </p>
        <h1
          className="max-w-2xl text-4xl font-light leading-[1.15] text-white md:text-6xl"
          style={{ fontFamily: "var(--font-cormorant-garamond)" }}
        >
          Le Café des Murmures
        </h1>
      </div>
    </section>
  );
}
