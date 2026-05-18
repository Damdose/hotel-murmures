import Image from "next/image";

export function LocationCard() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-antique-white px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-xl flex-col overflow-hidden rounded bg-white md:h-[586px] md:flex-row">
        <div className="flex h-full w-full flex-col md:w-[640px] md:max-w-screen-sm md:shrink-0">
          <div className="flex flex-col gap-4 px-8 pt-10 pb-14 md:pl-16 md:pt-16 md:pr-16">
            <h2 className="text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
              Le 1er arrondissement, autrement
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
                Le cœur historique de Paris, un hôtel niché dans l&apos;ombre de
                l&apos;agitation. Ici, tout est à portée : une exposition au
                Louvre, un café au Palais-Royal, une flânerie sous les passages
                couverts ou sur les quais de Seine.
              </p>
              <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
                Mais à l&apos;angle de la rue de Richelieu, le rythme change. On
                pousse la porte du 45, et le monde s&apos;efface doucement.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-black/10 md:w-[511px] md:ml-16" />

          <div className="flex flex-1 gap-14 px-8 pt-4 pb-8 md:pl-16 md:pt-14 max-md:flex-col max-md:gap-6">
            <div className="flex flex-1 flex-col gap-4 pt-0 md:pt-0">
              <div className="flex items-center gap-2">
                <div className="relative h-2.5 w-2.5 rounded-full overflow-hidden">
                  <Image
                    src="/images/murmures-5.jpeg"
                    alt=""
                    fill
                    className="object-center"
                    sizes="10px"
                    loading="lazy"
                  />
                </div>
                <p className="text-base uppercase leading-5 text-dark-chocolate">
                  Adresse
                </p>
              </div>
              <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
                À deux pas de Notre-Dame de Paris
              </p>
            </div>

            <div className="hidden h-full w-px bg-black/10 md:block" />

            <div className="flex flex-1 flex-col gap-4 pt-0 md:pt-0">
              <div className="flex items-center gap-2">
                <div className="relative h-2.5 w-2.5 rounded-full overflow-hidden">
                  <Image
                    src="/images/murmures-5.jpeg"
                    alt=""
                    fill
                    className="object-center"
                    sizes="10px"
                    loading="lazy"
                  />
                </div>
                <p className="text-base uppercase leading-5 text-dark-chocolate">
                  Contact
                </p>
              </div>
              <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
                01 56 55 55 22
                <br />
                contact@hoteldesmurmures.com
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-60 w-full md:h-[586px] md:flex-1">
          <Image
            src="/images/murmures-5.jpeg"
            alt="Localisation de l'hôtel"
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
