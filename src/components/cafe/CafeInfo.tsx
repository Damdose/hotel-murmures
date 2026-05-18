import Image from "next/image";

export function CafeInfo() {
  return (
    <section className="flex w-full flex-col items-center px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-14 md:flex-row md:gap-20">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded md:w-1/2">
          <Image
            src="/images/murmures-5.jpeg"
            alt="Intérieur du Café des Murmures"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-2">
            <h2
              className="text-3xl font-light text-pale-brown md:text-4xl"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Informations pratiques
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-chocolate">
                Horaires
              </p>
              <p className="text-base font-light text-dark-chocolate">
                Lundi — Vendredi : 8h — 18h
              </p>
              <p className="text-base font-light text-dark-chocolate">
                Samedi — Dimanche : 9h — 19h
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-chocolate">
                Adresse
              </p>
              <p className="text-base font-light text-dark-chocolate">
                À deux pas de Notre-Dame de Paris
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-chocolate">
                Réservation
              </p>
              <p className="text-base font-light text-dark-chocolate">
                Sans réservation — dans la limite des places disponibles
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-chocolate">
                Accès
              </p>
              <p className="text-base font-light text-dark-chocolate">
                Ouvert à tous, résidents comme visiteurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
