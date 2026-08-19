// Le filtre entre l'éditeur et le fichier de textes.
//
// `textes.json` est importé par les composants : sa FORME fait partie du code.
// Une clé qui disparaît, une valeur qui n'est plus une chaîne, et le prochain
// build échoue — le site resterait en ligne dans sa version précédente, mais
// plus aucune publication ne passerait. On refuse donc en amont tout ce qui
// s'écarte de la forme actuelle.
//
// Ce qui est autorisé :
//   · changer le texte de n'importe quelle chaîne ;
//   · ajouter ou retirer des éléments dans les listes déclarées ouvertes
//     (`LISTES_OUVERTES` dans `src/contenu/plan.ts`).
//
// Ce qui est refusé :
//   · ajouter, renommer ou supprimer une clé ;
//   · changer le type d'une valeur ;
//   · allonger une liste adossée à des photos fixées dans le code.

import { listeOuverte } from "@/contenu/plan";

/** Une valeur trop longue trahit un copier-coller malheureux, pas un texte. */
const LONGUEUR_MAX = 5000;

export type Resultat =
  | { ok: true; valeur: unknown }
  | { ok: false; message: string };

const chemin = (base: string, cle: string | number) =>
  base ? `${base}.${cle}` : String(cle);

/**
 * Vérifie `recu` contre la forme de `reference` et retourne la valeur nettoyée.
 * Les messages sont écrits pour la personne qui publie, pas pour un journal.
 */
export function valider(recu: unknown, reference: unknown, ou = ""): Resultat {
  if (typeof reference === "string") {
    if (typeof recu !== "string") {
      return { ok: false, message: `« ${ou} » doit rester du texte.` };
    }
    if (recu.length > LONGUEUR_MAX) {
      return {
        ok: false,
        message: `« ${ou} » dépasse ${LONGUEUR_MAX} caractères.`,
      };
    }
    // Les retours chariot de Windows perturbent les comparaisons de textes.
    return { ok: true, valeur: recu.replace(/\r\n/g, "\n") };
  }

  if (Array.isArray(reference)) {
    if (!Array.isArray(recu)) {
      return { ok: false, message: `« ${ou} » doit rester une liste.` };
    }
    if (recu.length !== reference.length && !listeOuverte(ou)) {
      return {
        ok: false,
        message:
          `La liste « ${ou} » doit garder ses ${reference.length} éléments : ` +
          "chacun est associé à une photo ou à une icône choisie dans le code.",
      };
    }
    if (!reference.length && recu.length) {
      return { ok: false, message: `Impossible d’ajouter à « ${ou} ».` };
    }

    // Les nouveaux éléments sont comparés au premier élément existant : c'est
    // lui qui décrit la forme attendue (mêmes champs, tous en texte).
    const gabarit = reference[0];
    const sortie: unknown[] = [];
    for (let i = 0; i < recu.length; i++) {
      const r = valider(recu[i], reference[i] ?? gabarit, chemin(ou, i));
      if (!r.ok) return r;
      sortie.push(r.valeur);
    }
    return { ok: true, valeur: sortie };
  }

  if (reference && typeof reference === "object") {
    if (!recu || typeof recu !== "object" || Array.isArray(recu)) {
      return { ok: false, message: `« ${ou} » a changé de nature.` };
    }
    const attendues = Object.keys(reference as Record<string, unknown>);
    const recues = Object.keys(recu as Record<string, unknown>);

    const enTrop = recues.filter((c) => !attendues.includes(c));
    if (enTrop.length) {
      return {
        ok: false,
        message: `Champ inconnu dans « ${ou || "les textes"} » : ${enTrop[0]}.`,
      };
    }
    const manquantes = attendues.filter((c) => !recues.includes(c));
    if (manquantes.length) {
      return {
        ok: false,
        message: `Champ manquant dans « ${ou || "les textes"} » : ${manquantes[0]}.`,
      };
    }

    const sortie: Record<string, unknown> = {};
    for (const cle of attendues) {
      const r = valider(
        (recu as Record<string, unknown>)[cle],
        (reference as Record<string, unknown>)[cle],
        chemin(ou, cle),
      );
      if (!r.ok) return r;
      sortie[cle] = r.valeur;
    }
    return { ok: true, valeur: sortie };
  }

  return { ok: false, message: `Valeur inattendue en « ${ou} ».` };
}

/** Compte les chaînes qui diffèrent entre deux versions des textes. */
export function compterChangements(avant: unknown, apres: unknown): number {
  if (typeof avant === "string" || typeof apres === "string") {
    return avant === apres ? 0 : 1;
  }
  if (Array.isArray(avant) && Array.isArray(apres)) {
    const n = Math.max(avant.length, apres.length);
    let total = 0;
    for (let i = 0; i < n; i++) total += compterChangements(avant[i], apres[i]);
    return total;
  }
  if (avant && apres && typeof avant === "object" && typeof apres === "object") {
    const cles = new Set([
      ...Object.keys(avant as object),
      ...Object.keys(apres as object),
    ]);
    let total = 0;
    for (const cle of cles) {
      total += compterChangements(
        (avant as Record<string, unknown>)[cle],
        (apres as Record<string, unknown>)[cle],
      );
    }
    return total;
  }
  return avant === apres ? 0 : 1;
}
