import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contenu } from "@/contenu";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

const { acces, global } = contenu;

// Le plan suit l'adresse de l'éditeur, comme le bloc plan de l'accueil.
const requeteCarte = encodeURIComponent(
  `${global.adresseLigne1}, ${global.adresseLigne2}`,
);

export const metadata: Metadata = {
  title: acces.referencement.titre,
  description: acces.referencement.description,
};

export default function AccesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <main className="w-full max-w-screen-xl px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <h1 className="reveal mb-4 font-serif text-4xl font-light text-dark-chocolate md:text-5xl">
          {acces.titre}
        </h1>
        <p
          className="reveal mb-16 max-w-xl text-base font-light leading-7 text-dark-chocolate/60"
          style={{ "--reveal-delay": "140ms" } as CSSProperties}
        >
          {acces.chapeau}
        </p>

        <div
          className="stagger grid gap-x-16 gap-y-12 md:grid-cols-2"
          style={{ "--stagger-step": "120ms" } as CSSProperties}
        >
          <div className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-8">
            <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
              {acces.titreAdresse}
            </h2>
            <p className="text-base font-light leading-7 text-dark-chocolate/80">
              {global.nomHotel}
              <br />
              {global.adresseLigne1}
              <br />
              {global.adresseLigne2}
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-8">
            <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
              {acces.titreContact}
            </h2>
            <p className="text-base font-light leading-7 text-dark-chocolate/80">
              {acces.labelTelephone}{" "}
              <a
                href={`tel:${global.telephone.replace(/\s/g, "")}`}
                className="link-rule text-pale-brown no-underline"
              >
                {global.telephone}
              </a>
              <br />
              {acces.labelEmail}{" "}
              <a
                href={`mailto:${global.email}`}
                className="link-rule text-pale-brown no-underline"
              >
                {global.email}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-8">
            <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
              {acces.titreMetro}
            </h2>
            <ul className="space-y-2 text-base font-light leading-7 text-dark-chocolate/80">
              {acces.metro.map((ligne) => (
                <li key={ligne.station}>
                  <strong>{ligne.station}</strong> {ligne.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-8">
            <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
              {acces.titreVoiture}
            </h2>
            <p className="text-base font-light leading-7 text-dark-chocolate/80">
              {acces.voiture1}
              <br />
              {acces.voiture2}
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-8 md:col-span-2">
            <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
              {acces.titreAeroports}
            </h2>
            <ul className="space-y-2 text-base font-light leading-7 text-dark-chocolate/80">
              {acces.aeroports.map((aeroport) => (
                <li key={aeroport.nom}>
                  <strong>{aeroport.nom}</strong> {aeroport.detail}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-base font-light leading-7 text-dark-chocolate/80">
              {acces.noteAeroports}
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="stagger mt-20 flex flex-col gap-6">
          <h2 className="text-xl font-medium uppercase tracking-wide text-dark-chocolate">
            {acces.titreCarte}
          </h2>
          <div className="relative h-64 w-full overflow-hidden rounded bg-chocolate/10 md:h-[420px]">
            <iframe
              src={`https://www.google.com/maps?q=${requeteCarte}&output=embed`}
              className="map-tint absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localisation de l'${global.nomHotel}`}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
