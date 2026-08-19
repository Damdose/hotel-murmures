import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | Hôtel des Murmures",
  description:
    "Conditions générales d'utilisation du site de l'Hôtel des Murmures.",
};

export default function ConditionsGeneralesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <main className="w-full max-w-screen-md px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <h1 className="mb-12 font-serif text-4xl font-light text-dark-chocolate md:text-5xl">
          Conditions générales d&apos;utilisation
        </h1>

        <div className="flex flex-col gap-10 text-base leading-7 text-dark-chocolate/80">
          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes conditions générales d&apos;utilisation (ci-après
              &laquo;&nbsp;CGU&nbsp;&raquo;) ont pour objet de définir les
              modalités et conditions d&apos;utilisation du site internet
              hotelmurmures.com (ci-après &laquo;&nbsp;le
              Site&nbsp;&raquo;), édité par l&apos;Hôtel des Murmures.
            </p>
            <p className="mt-3">
              L&apos;accès et l&apos;utilisation du Site impliquent
              l&apos;acceptation sans réserve des présentes CGU par
              l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 2 — Accès au site
            </h2>
            <p>
              Le Site est accessible gratuitement depuis tout lieu à tout
              utilisateur disposant d&apos;un accès à Internet. Tous les frais
              nécessaires pour l&apos;accès aux services (matériel
              informatique, connexion Internet, etc.) sont à la charge de
              l&apos;utilisateur.
            </p>
            <p className="mt-3">
              L&apos;Hôtel des Murmures met en œuvre tous les moyens
              raisonnables à sa disposition pour assurer un accès de qualité au
              Site, mais n&apos;est tenu à aucune obligation d&apos;y parvenir.
              L&apos;Hôtel des Murmures se réserve le droit de suspendre,
              modifier ou interrompre l&apos;accès au Site sans préavis.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 3 — Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments constituant le Site (textes, images,
              photographies, vidéos, logos, icônes, sons, logiciels, etc.) est
              protégé par les lois en vigueur sur la propriété intellectuelle
              et appartient à l&apos;Hôtel des Murmures ou fait l&apos;objet
              d&apos;une autorisation d&apos;utilisation.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication,
              transmission ou dénaturation, totale ou partielle, du Site ou de
              son contenu, par quelque procédé que ce soit, et sur quelque
              support que ce soit, est interdite sans l&apos;autorisation
              écrite préalable de l&apos;Hôtel des Murmures.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 4 — Réservations
            </h2>
            <p>
              Les réservations effectuées via le Site sont soumises aux
              conditions générales de vente et aux politiques d&apos;annulation
              de l&apos;Hôtel des Murmures, consultables lors du processus de
              réservation. Le système de réservation est opéré par un
              prestataire tiers (Guesty) dont les conditions
              d&apos;utilisation propres s&apos;appliquent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 5 — Responsabilité
            </h2>
            <p>
              L&apos;Hôtel des Murmures ne pourra être tenu responsable des
              dommages directs ou indirects causés au matériel de
              l&apos;utilisateur lors de l&apos;accès au Site.
            </p>
            <p className="mt-3">
              L&apos;Hôtel des Murmures décline toute responsabilité quant à
              l&apos;utilisation qui pourrait être faite des informations et
              contenus présents sur le Site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 6 — Liens hypertextes
            </h2>
            <p>
              Le Site peut contenir des liens hypertextes vers d&apos;autres
              sites internet. L&apos;Hôtel des Murmures n&apos;exerce aucun
              contrôle sur ces sites et décline toute responsabilité quant à
              leur contenu ou aux éventuels traitements de données personnelles
              qu&apos;ils effectuent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 7 — Protection des données personnelles
            </h2>
            <p>
              Les données personnelles collectées sur le Site font l&apos;objet
              d&apos;un traitement conformément à notre{" "}
              <a
                href="/politique-confidentialite"
                className="text-pale-brown underline"
              >
                politique de confidentialité
              </a>
              . Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez de
              droits sur vos données que vous pouvez exercer en contactant
              l&apos;Hôtel des Murmures.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 8 — Cookies
            </h2>
            <p>
              Le Site peut utiliser des cookies pour améliorer la navigation et
              personnaliser les contenus. L&apos;utilisateur peut configurer
              son navigateur pour refuser les cookies, étant entendu que cela
              pourrait affecter certaines fonctionnalités du Site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 9 — Modification des CGU
            </h2>
            <p>
              L&apos;Hôtel des Murmures se réserve le droit de modifier les
              présentes CGU à tout moment. Les CGU applicables sont celles en
              vigueur à la date de la dernière mise à jour affichée sur cette
              page.
            </p>
            <p className="mt-4 text-sm text-dark-chocolate/50">
              Dernière mise à jour : mai 2025
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Article 10 — Droit applicable et juridiction
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. En cas de
              litige relatif à l&apos;interprétation ou l&apos;exécution des
              présentes, les tribunaux de Paris seront seuls compétents.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
