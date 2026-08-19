// La porte de /admin.
//
// Pas de base d'utilisateurs : l'équipe de l'hôtel tient dans une pièce et le
// site est statique. Un mot de passe partagé, posé dans les variables
// d'environnement Vercel, et une session de douze heures dans un cookie signé.
//
// En local, la porte est ouverte : le poste de développement écrit sur son
// propre disque, il n'y a rien à protéger. En ligne, si aucun mot de passe
// n'est défini, la porte reste FERMÉE — une installation oubliée ne doit pas
// laisser n'importe qui republier le site.
//
// ── L'EXCEPTION, ET CE QU'ELLE COÛTE ────────────────────────────────────────
//
// `ADMIN_OUVERT=1` retire le mot de passe en ligne. C'est un choix délibéré,
// pas un oubli : il faut poser la variable pour l'obtenir. Ce qu'il faut avoir
// en tête — l'éditeur publie en committant sur le dépôt GitHub avec le jeton du
// serveur. Ouvert, il donne donc à QUICONQUE trouve l'adresse le droit de
// réécrire les textes du site et de déclencher un déploiement. La page est en
// `noindex` et exclue de `robots.txt`, ce qui la garde hors des moteurs, mais
// une adresse ne reste pas secrète longtemps.
//
// Poser `ADMIN_PASSWORD` referme la porte immédiatement, sans rien retirer
// d'autre : le mot de passe l'emporte toujours sur `ADMIN_OUVERT`.

import crypto from "node:crypto";

export const COOKIE = "murmures_admin";
const DUREE_MS = 12 * 60 * 60 * 1000; // 12 h, une journée de travail

/** Le poste de développement : disque accessible en écriture, pas de mot de passe. */
export const estLocal = (): boolean =>
  process.env.NODE_ENV !== "production" && !process.env.VERCEL;

/** Le mot de passe attendu, ou `null` si l'éditeur n'est pas configuré. */
const motDePasseAttendu = (): string | null =>
  process.env.ADMIN_PASSWORD || process.env.CMS_PASSWORD || null;

/**
 * Vrai si l'éditeur est délibérément ouvert sans mot de passe. Un mot de passe
 * défini l'emporte : ajouter `ADMIN_PASSWORD` referme la porte sans avoir à
 * penser à retirer `ADMIN_OUVERT`.
 */
export const estOuvert = (): boolean =>
  process.env.ADMIN_OUVERT === "1" && !motDePasseAttendu();

/** Vrai dès que l'éditeur est utilisable : en local, ouvert, ou avec mot de passe. */
export const estConfigure = (): boolean =>
  estLocal() || estOuvert() || !!motDePasseAttendu();

/* ── Comparaison ───────────────────────────────────────────────────────── */

// On compare les empreintes plutôt que les chaînes : le temps de comparaison ne
// renseigne alors ni sur le contenu ni sur la LONGUEUR du mot de passe.
const sha = (s: string) => crypto.createHash("sha256").update(s, "utf8").digest();

export function motDePasseValide(saisi: string): boolean {
  const attendu = motDePasseAttendu();
  if (!attendu) return false;
  return crypto.timingSafeEqual(sha(String(saisi)), sha(attendu));
}

/* ── Le cookie ─────────────────────────────────────────────────────────── */

// Le secret qui SIGNE le cookie est distinct du mot de passe quand `ADMIN_SECRET`
// existe : changer le mot de passe ne déconnecte alors personne. À défaut, on
// signe avec ce qu'on a — un jeton signé avec une valeur que le dehors ignore
// vaut toujours mieux qu'un jeton constant, qui se recopie.
const secret = (): string =>
  process.env.ADMIN_SECRET ||
  motDePasseAttendu() ||
  "murmures-admin-local";

const signer = (donnee: string): string =>
  crypto.createHmac("sha256", secret()).update(donnee).digest("base64url");

/** Un jeton `<expiration>.<signature>`. */
function jeton(): string {
  const fin = String(Date.now() + DUREE_MS);
  return `${fin}.${signer(fin)}`;
}

function jetonValide(brut: string | undefined | null): boolean {
  if (!brut) return false;
  const [fin, signature] = brut.split(".");
  if (!fin || !signature) return false;
  if (!Number(fin) || Number(fin) < Date.now()) return false;
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(signer(fin)),
    );
  } catch {
    return false;
  }
}

export function poserCookie(): string {
  const morceaux = [
    `${COOKIE}=${jeton()}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${Math.floor(DUREE_MS / 1000)}`,
  ];
  if (!estLocal()) morceaux.push("Secure");
  return morceaux.join("; ");
}

export const retirerCookie = (): string =>
  `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;

/** Vrai si la requête a le droit de lire et d'écrire les textes. */
export function estAutorise(entetes: { get(nom: string): string | null }): boolean {
  if (estLocal() || estOuvert()) return true;

  const part = (entetes.get("cookie") || "")
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE}=`));

  return part ? jetonValide(part.slice(COOKIE.length + 1)) : false;
}

export const refus = (message: string, code = 401) =>
  Response.json({ ok: false, erreur: "non_autorise", message }, { status: code });
