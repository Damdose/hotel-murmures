import Image from "next/image";

export function HospitalitySection() {
  return (
    <section className="relative flex w-full flex-col items-center gap-14 px-5 pt-24 pb-20 md:px-10">
      <div className="relative flex h-[550px] w-full max-w-screen-xl flex-col items-center gap-14 overflow-hidden md:h-[700px]">
        <div className="z-[3] flex w-full flex-col items-start gap-6">
          <h2 className="w-full text-center text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
            L&apos;hospitalité en creux
          </h2>
          <p className="w-full text-center text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
            Recevoir, pour nous, ne relève ni du protocole ni de la mise en
            scène.
            <br />
            C&apos;est un art silencieux, qui se glisse dans les détails.
            <br />
            Chaque attention est pensée avec justesse, chaque service,
            <br />
            ajusté au rythme de nos hôtes.
            <br />
            Une forme d&apos;élégance qui nous est personnelle : sobre,
            maîtrisée, mais toujours présente.
          </p>
        </div>

        <div className="absolute left-[calc(50%-160px)] -top-20 bottom-0 z-[2] w-[620px] max-w-screen-sm max-md:-inset-x-32 max-md:-top-6 max-md:-bottom-9 max-md:w-auto bg-gradient-to-b from-white/[0.22] via-white/90 via-34% to-transparent to-65%" />

        <div className="absolute bottom-0 left-[calc(50%-160px)] z-[1] h-[780px] w-[620px] max-w-screen-sm max-md:inset-x-0 max-md:top-0 max-md:bottom-auto max-md:h-[550px] max-md:w-auto md:max-xl:inset-x-0 md:max-xl:w-auto">
          <Image
            src="/images/murmures-3.jpeg"
            alt="Portrait hospitalité"
            fill
            className="object-cover object-center"
            sizes="620px"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
