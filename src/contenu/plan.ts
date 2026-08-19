// Le plan de l'éditeur : ce que la personne qui écrit voit, et dans quel ordre.
//
// Rien ici n'influence le rendu du site. C'est uniquement la carte qui permet à
// /admin/textes d'afficher `textes.json` sous forme de champs nommés en français
// plutôt que d'un objet JSON brut.
//
// Le même module sert à VALIDER une publication (voir `src/lib/admin/contenu.ts`) :
// seules les listes déclarées ouvertes ici peuvent gagner ou perdre des éléments.
// Toutes les autres sont adossées à des images ou à une mise en page fixées dans
// le code — en changer le nombre depuis l'éditeur casserait la page.

export type PagePlan = {
  cle: string;
  libelle: string;
  /** Page publique correspondante, pour le lien « voir sur le site ». */
  url: string;
  resume: string;
};

export const PAGES: PagePlan[] = [
  {
    cle: "global",
    libelle: "Coordonnées & réservation",
    url: "/",
    resume:
      "Nom de l’hôtel, adresse, email, téléphone. Ces informations sont reprises partout sur le site.",
  },
  {
    cle: "navigation",
    libelle: "Menu du site",
    url: "/",
    resume: "Les intitulés du menu qui s’ouvre en haut à droite.",
  },
  {
    cle: "pied",
    libelle: "Pied de page",
    url: "/",
    resume: "Le bas de page, présent sur toutes les pages.",
  },
  {
    cle: "accueil",
    libelle: "Page d’accueil",
    url: "/",
    resume: "La page d’arrivée : présentation, services, chambres, plan.",
  },
  {
    cle: "hotel",
    libelle: "Page « L’Hôtel »",
    url: "/hotel",
    resume: "L’esprit du lieu, l’emplacement, les avis clients.",
  },
  {
    cle: "chambres",
    libelle: "Page « Nos chambres »",
    url: "/nos-chambres",
    resume: "Les trois catégories de chambres et leur présentation.",
  },
  {
    cle: "cafe",
    libelle: "Page « Le Café »",
    url: "/cafe",
    resume: "Le café, la carte et les informations pratiques.",
  },
  {
    cle: "services",
    libelle: "Page « Services »",
    url: "/services",
    resume: "L’expérience, l’art de recevoir et la foire aux questions.",
  },
  {
    cle: "acces",
    libelle: "Page « Accès »",
    url: "/acces",
    resume: "Comment venir : métro, voiture, aéroports.",
  },
];

/**
 * Les listes dont on peut ajouter ou retirer des éléments depuis l'éditeur.
 * Le `*` remplace un indice de tableau.
 *
 * Tout ce qui n'est pas listé ici garde son nombre d'éléments : les cartes de
 * services, de chambres et du carrousel sont adossées à des photos choisies dans
 * le code, et la grille « expérience » à six icônes. En ajouter une depuis
 * l'éditeur donnerait une carte sans image.
 */
export const LISTES_OUVERTES = [
  "services.faq.questions",
  "hotel.temoignages.avis",
  "cafe.carte.categories",
  "cafe.carte.categories.*.items",
  "acces.metro",
  "acces.aeroports",
];

/** Vrai si la liste à ce chemin accepte des ajouts et des suppressions. */
export function listeOuverte(chemin: string): boolean {
  const gabarit = chemin.replace(/\.\d+(?=\.|$)/g, ".*");
  return LISTES_OUVERTES.includes(gabarit);
}

/** Titres de section, quand le nom de la clé ne suffit pas. */
export const TITRES: Record<string, string> = {
  "global.reservation": "Widget de réservation",
  "global.referencement": "Référencement (Google)",
  "accueil.intro": "Bloc de présentation",
  "accueil.services": "Bandeau « L’art de recevoir »",
  "accueil.chambres": "Bandeau « Nos chambres »",
  "accueil.carte": "Bloc plan",
  "hotel.hero": "Grande image d’en-tête",
  "hotel.intro": "Bloc d’introduction",
  "hotel.hospitalite": "Bloc « L’hospitalité en creux »",
  "hotel.esprit": "Carrousel « L’esprit du lieu »",
  "hotel.emplacement": "Bloc emplacement",
  "hotel.galerie": "Galerie photos",
  "hotel.temoignages": "Avis clients",
  "hotel.explorer": "Bloc « Raffinement discret »",
  "chambres.hero": "Grande image d’en-tête",
  "chambres.intro": "Texte d’introduction",
  "chambres.cartes": "Les trois chambres",
  "cafe.hero": "Grande image d’en-tête",
  "cafe.intro": "Bloc d’introduction",
  "cafe.carte": "La carte",
  "cafe.infos": "Informations pratiques",
  "services.intro": "Bloc d’introduction",
  "services.experience": "Grille « L’expérience des Murmures »",
  "services.artDeRecevoir": "Bandeau « L’art de recevoir »",
  "services.faq": "Questions fréquentes",
  "acces.referencement": "Référencement (Google)",
};

/** Intitulés de champs. La clé exacte l'emporte sur le nom de champ seul. */
export const LIBELLES_PAR_CHEMIN: Record<string, string> = {
  "global.marque": "Nom affiché dans le bandeau du haut",
  "global.instagramUrl": "Lien Instagram",
  "global.commanderUrl": "Lien « Commander un service »",
  "global.adresseLigne1": "Adresse — 1re ligne",
  "global.adresseLigne2": "Adresse — 2e ligne",
  "navigation.phraseDeFin": "Phrase en bas du menu",
  "navigation.commanderDescription": "Précision sous « Commander un service »",
  "pied.ctaTitre": "Bandeau de réservation — titre",
  "pied.ctaTexte": "Bandeau de réservation — texte",
  "pied.ctaBouton": "Bandeau de réservation — bouton",
  "accueil.carte.adresse": "Adresse affichée sous le titre",
  "hotel.temoignages.note": "Note affichée (ex. 4,84)",
  "hotel.temoignages.mention": "Mention sous les étoiles",
  "acces.chapeau": "Texte d’introduction",
  "acces.noteAeroports": "Note sous la liste des aéroports",
};

/** Intitulés par nom de champ, valables partout. */
export const LIBELLES: Record<string, string> = {
  titre: "Titre",
  surTitre: "Sur-titre",
  sousTitre: "Sous-titre",
  texte: "Texte",
  description: "Description",
  resume: "Résumé",
  bouton: "Bouton",
  prix: "Prix",
  nom: "Nom",
  question: "Question",
  reponse: "Réponse",
  citation: "Citation",
  auteur: "Auteur",
  contexte: "Contexte",
  badge: "Pastille (laisser vide si aucune)",
  station: "Station",
  detail: "Détail",
  email: "Adresse email",
  telephone: "Téléphone",
  nomHotel: "Nom de l’hôtel",
  labelDates: "Libellé « Dates »",
  labelVoyageurs: "Libellé « Voyageurs »",
  voyageurSingulier: "Voyageur (au singulier)",
  voyageurPluriel: "Voyageurs (au pluriel)",
  titreMenu: "Titre du bloc menu",
  titreAdresse: "Titre du bloc adresse",
  titreContact: "Titre du bloc contact",
  titreHoraires: "Titre du bloc horaires",
  titreReservation: "Titre du bloc réservation",
  titreAcces: "Titre du bloc accès",
  titreMetro: "Titre du bloc métro",
  titreVoiture: "Titre du bloc voiture",
  titreAeroports: "Titre du bloc aéroports",
  titreCarte: "Titre du bloc plan",
  labelTelephone: "Libellé avant le téléphone",
  labelEmail: "Libellé avant l’email",
  adresseComplement: "Complément d’adresse",
  reservation: "Réservation",
  acces: "Accès",
  equipements: "Équipements",
  points: "Points",
  cartes: "Cartes",
  slides: "Diapositives",
  avis: "Avis",
  questions: "Questions",
  categories: "Catégories",
  items: "Éléments",
  metro: "Stations de métro",
  aeroports: "Aéroports",
};

/** « paragraphe1 » → « Paragraphe 1 », « surTitre » → « Sur titre ». */
export function humaniser(cle: string): string {
  const mots = cle
    .replace(/([a-zà-ÿ])([A-ZÀ-Þ])/g, "$1 $2")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2")
    .toLowerCase();
  return mots.charAt(0).toUpperCase() + mots.slice(1);
}

/** L'intitulé à afficher pour un champ, du plus précis au plus général. */
export function libelle(chemin: string): string {
  if (LIBELLES_PAR_CHEMIN[chemin]) return LIBELLES_PAR_CHEMIN[chemin];
  const cle = chemin.split(".").pop() || chemin;
  return LIBELLES[cle] || humaniser(cle);
}

/** Le titre à afficher pour une section (objet ou liste). */
export function titre(chemin: string): string {
  return TITRES[chemin] || libelle(chemin);
}
