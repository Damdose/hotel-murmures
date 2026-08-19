import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Hôtel des Murmures",
  description:
    "Politique de confidentialité et protection des données personnelles de l'Hôtel des Murmures.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <main className="w-full max-w-screen-md px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <h1 className="mb-12 font-serif text-4xl font-light text-dark-chocolate md:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="flex flex-col gap-10 text-base leading-7 text-dark-chocolate/80">
          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Introduction
            </h2>
            <p>
              L&apos;Hôtel des Murmures accorde une importance capitale à la
              protection de vos données personnelles. La présente politique de
              confidentialité décrit les données que nous collectons, les
              raisons pour lesquelles nous les collectons et la manière dont
              nous les utilisons, conformément au Règlement Général sur la
              Protection des Données (RGPD) et à la loi Informatique et
              Libertés.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Responsable du traitement
            </h2>
            <p>
              <strong>Hôtel des Murmures</strong>
              <br />
              Paris 1er, France
              <br />
              Email :{" "}
              <a
                href="mailto:hotelmurmures@gmail.com"
                className="text-pale-brown underline"
              >
                hotelmurmures@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Données collectées
            </h2>
            <p>
              Dans le cadre de votre utilisation du Site et de nos services,
              nous sommes susceptibles de collecter les données suivantes :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Données d&apos;identification : nom, prénom, adresse email,
                numéro de téléphone
              </li>
              <li>
                Données de réservation : dates de séjour, nombre de personnes,
                préférences de chambre
              </li>
              <li>
                Données de navigation : adresse IP, type de navigateur, pages
                visitées, durée de visite
              </li>
              <li>
                Données de paiement : traitées de manière sécurisée par notre
                prestataire de réservation (Guesty)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Finalités du traitement
            </h2>
            <p>Vos données personnelles sont collectées pour :</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                La gestion de vos réservations et de votre séjour
              </li>
              <li>
                La communication relative à votre réservation (confirmations,
                rappels)
              </li>
              <li>
                L&apos;amélioration de nos services et de votre expérience sur
                le Site
              </li>
              <li>
                Le respect de nos obligations légales et réglementaires
              </li>
              <li>
                L&apos;envoi de communications commerciales, uniquement avec
                votre consentement préalable
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Base légale du traitement
            </h2>
            <p>Les traitements de données reposent sur :</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                L&apos;exécution du contrat (réservation et séjour)
              </li>
              <li>
                Votre consentement (newsletters, cookies non essentiels)
              </li>
              <li>
                L&apos;intérêt légitime de l&apos;Hôtel des Murmures
                (amélioration des services, sécurité)
              </li>
              <li>
                Le respect d&apos;obligations légales
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant une durée
              n&apos;excédant pas celle nécessaire aux finalités pour
              lesquelles elles sont collectées :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Données de réservation : 5 ans après le dernier séjour</li>
              <li>Données de navigation : 13 mois maximum</li>
              <li>
                Données de facturation : 10 ans (obligation légale comptable)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Partage des données
            </h2>
            <p>
              Vos données peuvent être partagées avec des tiers strictement
              nécessaires à la réalisation des finalités décrites ci-dessus :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Prestataire de réservation en ligne (Guesty)
              </li>
              <li>Prestataires de paiement sécurisé</li>
              <li>
                Hébergeur du site (Vercel)
              </li>
              <li>
                Autorités compétentes en cas d&apos;obligation légale
              </li>
            </ul>
            <p className="mt-3">
              Vos données ne sont jamais vendues à des tiers à des fins
              commerciales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> demander la
                suppression de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format structuré
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos données
              </li>
              <li>
                <strong>Droit à la limitation :</strong> restreindre le
                traitement de vos données
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:hotelmurmures@gmail.com"
                className="text-pale-brown underline"
              >
                hotelmurmures@gmail.com
              </a>
              . Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la CNIL (Commission Nationale de
              l&apos;Informatique et des Libertés).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Cookies
            </h2>
            <p>
              Le Site utilise des cookies pour assurer son bon fonctionnement
              et améliorer votre expérience. Les cookies essentiels sont
              nécessaires au fonctionnement du Site. Les cookies analytiques
              nous aident à comprendre comment les visiteurs interagissent avec
              le Site.
            </p>
            <p className="mt-3">
              Vous pouvez à tout moment modifier vos préférences en matière de
              cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Sécurité
            </h2>
            <p>
              L&apos;Hôtel des Murmures met en œuvre des mesures techniques et
              organisationnelles appropriées pour protéger vos données
              personnelles contre tout accès non autorisé, toute perte ou toute
              altération.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-medium text-dark-chocolate">
              Mise à jour
            </h2>
            <p>
              La présente politique de confidentialité peut être mise à jour à
              tout moment. La version en vigueur est celle publiée sur cette
              page.
            </p>
            <p className="mt-4 text-sm text-dark-chocolate/50">
              Dernière mise à jour : mai 2025
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
