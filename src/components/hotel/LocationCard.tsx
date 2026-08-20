import Image from "next/image";
import type { CSSProperties } from "react";
import { contenu } from "@/contenu";

const { emplacement } = contenu.hotel;
const { adresseLigne1, adresseLigne2, email, telephone } = contenu.global;

// La carte affichait « 75005 Paris » sans le pays : on retire le dernier segment.
const villeSeule = adresseLigne2.split(",")[0].trim();

export function LocationCard() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-antique-white px-5 py-16 md:px-10 md:py-24">
      <div className="reveal reveal-lift flex w-full max-w-screen-xl flex-col overflow-hidden rounded bg-white md:min-h-[586px] md:flex-row">
        <div className="flex h-full w-full flex-col md:w-[640px] md:max-w-screen-sm md:shrink-0">
          <div className="flex flex-col gap-4 px-8 pt-10 pb-14 md:px-16 md:pt-16">
            <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
              {emplacement.titre}
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
                {emplacement.paragraphe1}
              </p>
              <p className="text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
                {emplacement.paragraphe2}
              </p>
            </div>
          </div>

          <div className="mx-8 h-px bg-black/10 md:mx-16" />

          <div
            className="stagger flex flex-1 gap-14 px-8 pt-6 pb-12 max-md:flex-col max-md:gap-6 md:px-16 md:pt-14 md:pb-16"
            style={{ "--stagger-step": "160ms" } as CSSProperties}
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-pale-brown" />
                <p className="text-sm font-medium uppercase tracking-wide text-dark-chocolate">
                  {emplacement.titreAdresse}
                </p>
              </div>
              <p className="text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
                {adresseLigne1}
                <br />
                {villeSeule}
              </p>
            </div>

            <div className="hidden h-full w-px bg-black/10 md:block" />

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-pale-brown" />
                <p className="text-sm font-medium uppercase tracking-wide text-dark-chocolate">
                  {emplacement.titreContact}
                </p>
              </div>
              <p className="text-base font-light leading-7 text-dark-chocolate md:text-sm xl:text-base">
                {telephone}
                <br />
                {email}
              </p>
            </div>
          </div>
        </div>

        <div
          className="reveal-image zoom-host relative h-60 w-full overflow-hidden md:h-auto md:min-h-[586px] md:flex-1 md:self-stretch"
          style={{ "--reveal-delay": "260ms" } as CSSProperties}
        >
          <Image
            src="/images/murmures-12.jpeg"
            alt="Vue sur Notre-Dame de Paris depuis l'hôtel"
            fill
            className="zoom-slow object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
