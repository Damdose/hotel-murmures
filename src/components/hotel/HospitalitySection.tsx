import Image from "next/image";
import { contenu } from "@/contenu";

const { hospitalite } = contenu.hotel;

export function HospitalitySection() {
  return (
    <section className="relative flex w-full flex-col items-center px-5 py-20 md:px-10 md:py-28">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center gap-16 md:flex-row md:items-start md:gap-20">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-6 md:sticky md:top-32">
          <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
            {hospitalite.titre}
          </h2>
          <p className="max-w-md text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
            {hospitalite.paragraphe1}
          </p>
          <p className="max-w-md text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
            {hospitalite.paragraphe2}
          </p>
        </div>

        {/* Image */}
        <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded md:flex-1">
          <Image
            src="/images/murmures-3.jpeg"
            alt="Portrait hospitalité"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
