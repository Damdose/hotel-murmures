// Moteur de réservation Guesty.
//
// On reproduit le contrat d'URL du widget "search bar" officiel de Guesty au
// lieu d'injecter son script S3 : le formulaire du site est déjà dessiné aux
// couleurs de la marque, et la destination reste strictement la même.
//
//   https://{siteUrl}/{locale}/properties?guests=…&minOccupancy=…&checkOut=…&checkIn=…
//
// Comme chez Guesty, les paramètres vides sont omis plutôt qu'envoyés vides.

export const GUESTY_SITE_URL = "hotelmurmures.guestybookings.com";

// Le moteur sert bien /fr (locale activée côté Guesty) ; sans préfixe il
// redirige vers /en.
export const GUESTY_LOCALE = "fr";

// Couleur de marque configurée dans le tableau de bord Guesty.
export const GUESTY_BRAND_COLOR = "#553725";

export type GuestySearchParams = {
  /** Date d'arrivée au format YYYY-MM-DD. */
  checkIn?: string;
  /** Date de départ au format YYYY-MM-DD. */
  checkOut?: string;
  /** Nombre de voyageurs. */
  guests?: string | number;
};

export function guestyBookingUrl({
  checkIn,
  checkOut,
  guests,
}: GuestySearchParams = {}): string {
  const params = new URLSearchParams();

  if (guests) {
    // Guesty envoie les deux : `guests` filtre l'affichage, `minOccupancy`
    // filtre la capacité des logements.
    params.set("guests", String(guests));
    params.set("minOccupancy", String(guests));
  }
  if (checkOut) params.set("checkOut", checkOut);
  if (checkIn) params.set("checkIn", checkIn);

  const query = params.toString();

  return `https://${GUESTY_SITE_URL}/${GUESTY_LOCALE}/properties${
    query ? `?${query}` : ""
  }`;
}
