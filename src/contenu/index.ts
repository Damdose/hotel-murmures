// Les textes du site, en un seul endroit.
//
// `textes.json` est la source de vérité : les composants le lisent, l'éditeur
// (/admin/textes) l'écrit. Un import JSON plutôt qu'une lecture de fichier —
// le contenu est donc figé au build, comme le reste des pages, et publier
// revient à committer le fichier puis à laisser Vercel redéployer.
//
// Le type se déduit du fichier : retirer une clé ici casse la compilation là
// où elle est utilisée, ce qui est exactement le filet qu'on veut.

import textes from "./textes.json";

export const contenu = textes;
export type Contenu = typeof textes;

export const global = textes.global;
