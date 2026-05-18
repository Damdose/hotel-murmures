import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Hôtel des Murmures",
  description: "Mentions légales de l'Hôtel des Murmures, hôtel & café à Paris.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <main className="w-full max-w-screen-md px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <h1 className="mb-12 font-serif text-4xl font-light text-dark-chocolate md:text-5xl">
          Mentions légales
        </h1>

        <div className="flex flex-col gap-10 text-base leading-7 text-dark-chocolate/80">
          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Éditeur du site
            </h2>
            <p>
              <strong>Hôtel des Murmures</strong>
              <br />
              Société par actions simplifiée (SAS)
              <br />
              Capital social : 10 000 &euro;
              <br />
              Siège social : Paris 1er, France
              <br />
              RCS Paris : [numéro RCS]
              <br />
              N° TVA intracommunautaire : [numéro TVA]
              <br />
              Directeur de la publication : [Nom du directeur]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Contact
            </h2>
            <p>
              Email :{" "}
              <a
                href="mailto:contact@hoteldesmurmures.com"
                className="text-pale-brown underline"
              >
                contact@hoteldesmurmures.com
              </a>
              <br />
              Téléphone : [numéro de téléphone]
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Hébergement du site
            </h2>
            <p>
              Le site hoteldesmurmures.com est hébergé par :
              <br />
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              Site web : vercel.com
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images,
              photographies, logos, vidéos, éléments graphiques, etc.) est
              protégé par le droit d&apos;auteur et demeure la propriété
              exclusive de l&apos;Hôtel des Murmures, sauf mention contraire.
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans
              l&apos;autorisation écrite préalable de l&apos;Hôtel des
              Murmures.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Crédits photographiques
            </h2>
            <p>
              Photographies : [Nom du photographe / agence]
              <br />
              Tous droits réservés.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Responsabilité
            </h2>
            <p>
              L&apos;Hôtel des Murmures s&apos;efforce de fournir sur ce site
              des informations aussi précises que possible. Toutefois, il ne
              pourra être tenu responsable des omissions, des inexactitudes ou
              des carences dans la mise à jour, qu&apos;elles soient de son
              fait ou du fait des tiers partenaires qui lui fournissent ces
              informations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Cookies
            </h2>
            <p>
              Le site peut utiliser des cookies pour améliorer
              l&apos;expérience de navigation. En naviguant sur le site, vous
              acceptez l&apos;utilisation de cookies conformément à notre{" "}
              <a
                href="/politique-confidentialite"
                className="text-pale-brown underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
