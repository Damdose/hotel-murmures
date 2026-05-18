import Image from "next/image";
import { BookingWidget } from "./BookingWidget";

export function HeroSection() {
  return (
    <section className="relative flex h-[600px] w-full flex-col items-center justify-between px-4 pt-28 md:h-screen md:max-h-[980px] md:px-6 md:pt-40">
      <Image
        src="/images/murmures-3.jpeg"
        alt="Hôtel des Murmures"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-dark-chocolate/30" />
      <div className="relative z-[1] flex w-full flex-col items-center gap-10">
        <h1 className="flex flex-col items-center gap-3">
          <Image
            src="/logos/logo-white.svg"
            alt="Murmures — Hôtel & Café"
            width={380}
            height={119}
            className="w-64 md:w-96"
            priority
          />
        </h1>
        <BookingWidget />
      </div>
    </section>
  );
}
