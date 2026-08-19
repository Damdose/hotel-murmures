// D'où viennent les textes, et où ils repartent.
//
//   en local   le disque. Lire et écrire `src/contenu/textes.json` ; Next
//              recharge la page tout seul, la modification est immédiate.
//
//   en ligne   GitHub. Lire la branche déployée, écrire un commit. Le push
//              déclenche le redéploiement Vercel : publier depuis le site met
//              le site à jour tout seul, en une minute environ.
//
// Lire sur GitHub plutôt que dans le bundle de la fonction n'est pas un détour :
// le bundle est figé au dernier déploiement, alors qu'une publication a pu
// passer entre-temps. La branche dit la vérité du moment, et deux personnes qui
// écrivent à quelques minutes d'intervalle ne s'effacent pas l'une l'autre.

import fs from "node:fs";
import path from "node:path";
import { estLocal } from "./auth";
import textesEmbarques from "@/contenu/textes.json";

/** Chemin du fichier, relatif à la racine du dépôt (GitHub) comme du projet (disque). */
export const CHEMIN = "src/contenu/textes.json";

const DEPOT = () => process.env.GITHUB_REPO || "Damdose/hotel-murmures";
const BRANCHE = () => process.env.GITHUB_BRANCH || "main";

export type Origine = "disque" | "github" | "embarque";

async function github(
  route: string,
  init: RequestInit = {},
  accept = "application/vnd.github+json",
) {
  const jeton = process.env.GITHUB_TOKEN;
  if (!jeton) throw new Error("GITHUB_TOKEN manquant");

  const res = await fetch(`https://api.github.com${route}`, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${jeton}`,
      Accept: accept,
      "Content-Type": "application/json",
      "User-Agent": "murmures-textes",
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    throw new Error(
      `GitHub ${route} → ${res.status} ${(await res.text()).slice(0, 300)}`,
    );
  }
  return accept.endsWith(".raw") ? res.text() : res.json();
}

/**
 * Les textes actuels. En ligne, on interroge GitHub ; si l'appel échoue, on
 * retombe sur la copie embarquée dans le déploiement — l'éditeur reste
 * utilisable même quand GitHub est muet, il affiche simplement la version
 * déployée.
 */
export async function lire(): Promise<{ textes: unknown; origine: Origine }> {
  if (estLocal()) {
    const fichier = path.join(process.cwd(), CHEMIN);
    return { textes: JSON.parse(fs.readFileSync(fichier, "utf8")), origine: "disque" };
  }

  try {
    const [proprietaire, depot] = DEPOT().split("/");
    const brut = (await github(
      `/repos/${proprietaire}/${depot}/contents/${CHEMIN}?ref=${BRANCHE()}`,
      {},
      "application/vnd.github.raw",
    )) as string;
    return { textes: JSON.parse(brut), origine: "github" };
  } catch {
    return { textes: textesEmbarques, origine: "embarque" };
  }
}

export type Publication =
  | { ok: true; origine: Origine; commit?: string }
  | { ok: false; message: string };

/** Enregistre les textes : sur le disque en local, en un commit en ligne. */
export async function ecrire(
  textes: unknown,
  message: string,
): Promise<Publication> {
  const contenu = JSON.stringify(textes, null, 2) + "\n";

  if (estLocal()) {
    fs.writeFileSync(path.join(process.cwd(), CHEMIN), contenu);
    return { ok: true, origine: "disque" };
  }

  try {
    const [proprietaire, depot] = DEPOT().split("/");
    const base = `/repos/${proprietaire}/${depot}`;

    // On récupère le SHA du fichier tel qu'il est sur la branche : l'API le
    // réclame pour une mise à jour, et il garantit qu'on écrit bien par-dessus
    // la version qu'on a lue.
    let sha: string | undefined;
    try {
      const fichier = await github(
        `${base}/contents/${CHEMIN}?ref=${BRANCHE()}`,
      );
      sha = fichier.sha as string;
    } catch {
      sha = undefined; // le fichier n'existe pas encore sur la branche
    }

    const commit = await github(`${base}/contents/${CHEMIN}`, {
      method: "PUT",
      body: JSON.stringify({
        message,
        content: Buffer.from(contenu, "utf8").toString("base64"),
        branch: BRANCHE(),
        ...(sha ? { sha } : {}),
      }),
    });

    return {
      ok: true,
      origine: "github",
      commit: String(commit.commit?.sha || "").slice(0, 7),
    };
  } catch (err) {
    return { ok: false, message: expliquer(err) };
  }
}

/** Un message destiné à la personne qui publie : il doit dire quoi faire. */
function expliquer(err: unknown): string {
  const brut = String(err);
  if (brut.includes("GITHUB_TOKEN manquant")) {
    return (
      "La publication en ligne n’est pas encore configurée (accès GitHub absent). " +
      "Vos textes sont conservés dans le navigateur."
    );
  }
  if (/\b(401|403)\b/.test(brut)) {
    return "GitHub a refusé l’accès : le jeton est probablement expiré. Vos textes sont conservés.";
  }
  if (/\b(409|422)\b/.test(brut)) {
    return "Quelqu’un a publié entre-temps. Rechargez la page, puis republiez.";
  }
  return "La publication a échoué. Vos textes sont conservés dans le navigateur : réessayez.";
}
