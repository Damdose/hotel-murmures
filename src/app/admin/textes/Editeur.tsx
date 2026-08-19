"use client";

// L'éditeur de textes.
//
// Il affiche `textes.json` sous forme de champs nommés en français, page par
// page, en se servant du plan (`src/contenu/plan.ts`). Aucune connaissance du
// site n'est nécessaire pour s'en servir : on lit un intitulé, on écrit dedans,
// on publie.
//
// Le brouillon vit dans le navigateur tant qu'il n'est pas publié : fermer
// l'onglet par mégarde, ou perdre sa connexion au moment de publier, ne coûte
// pas le travail de la matinée.

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  PAGES,
  libelle as libelleDe,
  listeOuverte,
  titre as titreDe,
} from "@/contenu/plan";
import { compterChangements } from "@/lib/admin/validation";

type Noeud = string | Noeud[] | { [cle: string]: Noeud };
type Textes = Record<string, Noeud>;

const BROUILLON = "murmures.textes.brouillon.v1";

/* ── Lecture et écriture par chemin ─────────────────────────────────────── */

function ecrireChemin(racine: Noeud, segments: string[], valeur: Noeud): Noeud {
  if (!segments.length) return valeur;
  const [tete, ...reste] = segments;

  if (Array.isArray(racine)) {
    const copie = [...racine];
    copie[Number(tete)] = ecrireChemin(copie[Number(tete)], reste, valeur);
    return copie;
  }
  return {
    ...(racine as Record<string, Noeud>),
    [tete]: ecrireChemin((racine as Record<string, Noeud>)[tete], reste, valeur),
  };
}

/** Un élément vierge, calqué sur un existant : mêmes champs, textes vidés. */
function elementVierge(modele: Noeud): Noeud {
  if (typeof modele === "string") return "";
  if (Array.isArray(modele)) return modele.length ? [elementVierge(modele[0])] : [];
  return Object.fromEntries(
    Object.entries(modele).map(([cle, v]) => [cle, elementVierge(v)]),
  );
}

/** L'intitulé d'un élément de liste : son propre titre, sinon son rang. */
function nomElement(element: Noeud, rang: number): string {
  if (typeof element === "object" && !Array.isArray(element)) {
    for (const cle of ["titre", "question", "nom", "station", "auteur", "texte"]) {
      const v = element[cle];
      if (typeof v === "string" && v.trim()) {
        return v.length > 60 ? `${v.slice(0, 60)}…` : v;
      }
    }
  }
  if (typeof element === "string" && element.trim()) return element;
  return `Élément ${rang + 1}`;
}

/* ── Les champs ─────────────────────────────────────────────────────────── */

type ProprietesChamp = {
  chemin: string;
  valeur: Noeud;
  reference: Noeud;
  modifier: (chemin: string, valeur: Noeud) => void;
  profondeur: number;
};

function ChampTexte({ chemin, valeur, reference, modifier }: ProprietesChamp) {
  const texte = valeur as string;
  const initial = reference as string;
  const modifie = texte !== initial;
  // Un texte long, ou qui contient un retour à la ligne, mérite plusieurs lignes.
  const multiligne = initial.length > 90 || texte.length > 90 || texte.includes("\n");
  const id = `champ-${chemin.replace(/\./g, "-")}`;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-dark-chocolate/50"
      >
        {libelleDe(chemin)}
        {modifie ? (
          <span className="rounded-full bg-antique-white px-2 py-0.5 text-[10px] normal-case tracking-normal text-chocolate">
            modifié
          </span>
        ) : null}
      </label>
      {multiligne ? (
        <textarea
          id={id}
          value={texte}
          rows={Math.min(10, Math.max(3, Math.ceil(texte.length / 80) + 1))}
          onChange={(e) => modifier(chemin, e.target.value)}
          className={`w-full resize-y rounded border bg-white px-3 py-2 text-base leading-relaxed outline-none focus:border-pale-brown ${
            modifie ? "border-pale-brown" : "border-dark-chocolate/15"
          }`}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={texte}
          onChange={(e) => modifier(chemin, e.target.value)}
          className={`w-full rounded border bg-white px-3 py-2 text-base outline-none focus:border-pale-brown ${
            modifie ? "border-pale-brown" : "border-dark-chocolate/15"
          }`}
        />
      )}
    </div>
  );
}

function Liste(props: ProprietesChamp) {
  const { chemin, valeur, reference, modifier, profondeur } = props;
  const elements = valeur as Noeud[];
  const originaux = reference as Noeud[];
  const ouverte = listeOuverte(chemin);
  const modele = elements[0] ?? originaux[0];

  const ajouter = () =>
    modifier(chemin, [...elements, elementVierge(modele)] as Noeud);

  const supprimer = (rang: number) =>
    modifier(chemin, elements.filter((_, i) => i !== rang) as Noeud);

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-sm font-medium uppercase tracking-wide text-chocolate">
        {titreDe(chemin)}
      </h3>

      <div className="flex flex-col gap-3">
        {elements.map((element, rang) => (
          <div
            key={rang}
            className="rounded-lg border border-dark-chocolate/10 bg-white/60 p-4"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-dark-chocolate/70">
                {nomElement(element, rang)}
              </p>
              {ouverte && elements.length > 1 ? (
                <button
                  type="button"
                  onClick={() => supprimer(rang)}
                  className="shrink-0 cursor-pointer border-none bg-transparent p-0 text-xs uppercase tracking-wide text-red-700/70 hover:text-red-700"
                >
                  Supprimer
                </button>
              ) : null}
            </div>
            <Champ
              chemin={`${chemin}.${rang}`}
              valeur={element}
              reference={originaux[rang] ?? elementVierge(modele)}
              modifier={modifier}
              profondeur={profondeur + 1}
            />
          </div>
        ))}
      </div>

      {ouverte ? (
        <button
          type="button"
          onClick={ajouter}
          className="self-start cursor-pointer rounded-full border border-dark-chocolate/20 bg-transparent px-4 py-1.5 text-xs uppercase tracking-wide text-dark-chocolate/70 hover:border-pale-brown hover:text-chocolate"
        >
          + Ajouter
        </button>
      ) : null}
    </section>
  );
}

function Champ(props: ProprietesChamp) {
  const { chemin, valeur, reference, modifier, profondeur } = props;

  if (typeof valeur === "string") return <ChampTexte {...props} />;
  if (Array.isArray(valeur)) return <Liste {...props} />;

  const entrees = Object.entries(valeur);
  const corps = (
    <div className="flex flex-col gap-4">
      {entrees.map(([cle, sousValeur]) => (
        <Champ
          key={cle}
          chemin={`${chemin}.${cle}`}
          valeur={sousValeur}
          reference={(reference as Record<string, Noeud>)?.[cle] ?? sousValeur}
          modifier={modifier}
          profondeur={profondeur + 1}
        />
      ))}
    </div>
  );

  // Au premier niveau d'une page, chaque objet est une section titrée. Plus
  // profond, on n'ajoute plus de titre : la carte de l'élément suffit.
  if (profondeur === 0) {
    return (
      <section className="flex flex-col gap-4 border-t border-dark-chocolate/10 pt-6">
        <h3 className="text-sm font-medium uppercase tracking-wide text-chocolate">
          {titreDe(chemin)}
        </h3>
        {corps}
      </section>
    );
  }
  return corps;
}

/* ── L'éditeur ──────────────────────────────────────────────────────────── */

export function Editeur({
  local,
  ouvert,
}: {
  local: boolean;
  ouvert: boolean;
}) {
  const [publies, setPublies] = useState<Textes | null>(null);
  const [brouillon, setBrouillon] = useState<Textes | null>(null);
  const [pageActive, setPageActive] = useState(PAGES[0].cle);
  const [etat, setEtat] = useState<"chargement" | "pret" | "publication">("chargement");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");

  // Au chargement : les textes en ligne, puis le brouillon local par-dessus s'il
  // correspond encore à la même structure.
  useEffect(() => {
    let vivant = true;
    (async () => {
      try {
        const res = await fetch("/api/admin/textes", { cache: "no-store" });
        const data = await res.json();
        if (!vivant) return;
        if (!data.ok) {
          setErreur(data.message || "Impossible de charger les textes.");
          setEtat("pret");
          return;
        }
        setPublies(data.textes);

        const garde = localStorage.getItem(BROUILLON);
        let depart: Textes = data.textes;
        if (garde) {
          try {
            const repris = JSON.parse(garde);
            if (memeForme(repris, data.textes)) depart = repris;
            else localStorage.removeItem(BROUILLON);
          } catch {
            localStorage.removeItem(BROUILLON);
          }
        }
        setBrouillon(depart);
        setEtat("pret");
      } catch {
        if (vivant) {
          setErreur("Impossible de charger les textes.");
          setEtat("pret");
        }
      }
    })();
    return () => {
      vivant = false;
    };
  }, []);

  const modifier = useCallback((chemin: string, valeur: Noeud) => {
    setBrouillon((precedent) => {
      if (!precedent) return precedent;
      const suivant = ecrireChemin(precedent as Noeud, chemin.split("."), valeur) as Textes;
      localStorage.setItem(BROUILLON, JSON.stringify(suivant));
      return suivant;
    });
    setMessage("");
  }, []);

  const changements = useMemo(
    () => (publies && brouillon ? compterChangements(publies, brouillon) : 0),
    [publies, brouillon],
  );

  const changementsParPage = useMemo(() => {
    if (!publies || !brouillon) return {} as Record<string, number>;
    return Object.fromEntries(
      PAGES.map((p) => [p.cle, compterChangements(publies[p.cle], brouillon[p.cle])]),
    );
  }, [publies, brouillon]);

  async function publier() {
    if (!brouillon || !changements) return;
    setEtat("publication");
    setErreur("");
    setMessage("");
    try {
      const res = await fetch("/api/admin/textes/publier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ textes: brouillon }),
      });
      const data = await res.json();
      if (data.ok) {
        setPublies(brouillon);
        localStorage.removeItem(BROUILLON);
        setMessage(data.message || "Publié.");
      } else {
        setErreur(data.message || "La publication a échoué.");
      }
    } catch {
      setErreur("La publication a échoué. Vos textes sont conservés : réessayez.");
    }
    setEtat("pret");
  }

  function toutAnnuler() {
    if (!publies) return;
    if (!confirm("Annuler toutes les modifications non publiées ?")) return;
    setBrouillon(publies);
    localStorage.removeItem(BROUILLON);
    setMessage("");
  }

  async function seDeconnecter() {
    await fetch("/api/admin/session", { method: "DELETE" });
    window.location.reload();
  }

  if (etat === "chargement" || !brouillon || !publies) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-dark-chocolate/50">
        {erreur || "Chargement des textes…"}
      </div>
    );
  }

  const page = PAGES.find((p) => p.cle === pageActive) ?? PAGES[0];

  return (
    <div className="min-h-screen">
      {/* Bandeau */}
      <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-dark-chocolate/10 bg-linen/95 px-5 py-4 backdrop-blur md:px-8">
        <div>
          <h1 className="font-serif text-xl font-light">Textes du site</h1>
          <p className="text-xs text-dark-chocolate/50">
            {changements === 0
              ? "Tout est publié."
              : `${changements} modification${changements > 1 ? "s" : ""} en attente.`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {changements > 0 ? (
            <button
              type="button"
              onClick={toutAnnuler}
              className="cursor-pointer border-none bg-transparent p-0 text-xs uppercase tracking-wide text-dark-chocolate/50 hover:text-dark-chocolate"
            >
              Tout annuler
            </button>
          ) : null}
          <button
            type="button"
            onClick={publier}
            disabled={etat === "publication" || changements === 0}
            className="cursor-pointer rounded-full border-none bg-chocolate px-5 py-2.5 font-serif text-sm uppercase text-white disabled:opacity-30"
          >
            {etat === "publication"
              ? "Publication…"
              : local
                ? "Enregistrer"
                : "Publier sur le site"}
          </button>
          {local || ouvert ? null : (
            <button
              type="button"
              onClick={seDeconnecter}
              className="cursor-pointer border-none bg-transparent p-0 text-xs uppercase tracking-wide text-dark-chocolate/50 hover:text-dark-chocolate"
            >
              Quitter
            </button>
          )}
        </div>
      </header>

      {ouvert ? (
        <p className="border-b border-dark-chocolate/10 px-5 py-2 text-xs text-dark-chocolate/50 md:px-8">
          Éditeur ouvert sans mot de passe. Pour le refermer, ajouter la variable
          ADMIN_PASSWORD dans le projet Vercel.
        </p>
      ) : null}

      {message || erreur ? (
        <p
          className={`px-5 py-3 text-sm md:px-8 ${
            erreur ? "bg-red-50 text-red-800" : "bg-antique-white text-chocolate"
          }`}
        >
          {erreur || message}
        </p>
      ) : null}

      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 px-5 py-8 md:flex-row md:px-8">
        {/* Sommaire */}
        <nav className="flex shrink-0 flex-row gap-1 overflow-x-auto md:w-64 md:flex-col md:overflow-visible">
          {PAGES.map((p) => {
            const n = changementsParPage[p.cle] || 0;
            const actif = p.cle === pageActive;
            return (
              <button
                key={p.cle}
                type="button"
                onClick={() => setPageActive(p.cle)}
                className={`flex shrink-0 items-center justify-between gap-2 rounded px-3 py-2 text-left text-sm transition-colors ${
                  actif
                    ? "bg-chocolate text-white"
                    : "bg-transparent text-dark-chocolate/70 hover:bg-white"
                }`}
              >
                <span>{p.libelle}</span>
                {n > 0 ? (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      actif ? "bg-white/20" : "bg-antique-white text-chocolate"
                    }`}
                  >
                    {n}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Champs de la page choisie */}
        <main className="flex min-w-0 flex-1 flex-col gap-6">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-serif text-2xl font-light">{page.libelle}</h2>
              <a
                href={page.url}
                target="_blank"
                rel="noopener"
                className="text-xs uppercase tracking-wide text-pale-brown"
              >
                Voir la page ↗
              </a>
            </div>
            <p className="mt-1 text-sm text-dark-chocolate/60">{page.resume}</p>
          </div>

          <Champ
            chemin={page.cle}
            valeur={brouillon[page.cle]}
            reference={publies[page.cle]}
            modifier={modifier}
            profondeur={-1}
          />

          <p className="border-t border-dark-chocolate/10 pt-6 text-xs leading-relaxed text-dark-chocolate/50">
            {local
              ? "Enregistrer écrit directement dans le projet : la page se recharge et le texte est à jour."
              : "Publier envoie les textes sur le site. Comptez une minute avant de les voir en ligne, le temps que le site se reconstruise."}
          </p>
        </main>
      </div>
    </div>
  );
}

/** Deux versions ont la même forme si elles ont les mêmes clés aux mêmes places. */
function memeForme(a: unknown, b: unknown): boolean {
  if (typeof a === "string") return typeof b === "string";
  if (Array.isArray(a)) return Array.isArray(b);
  if (a && b && typeof a === "object" && typeof b === "object") {
    const clesA = Object.keys(a).sort();
    const clesB = Object.keys(b).sort();
    if (clesA.join("|") !== clesB.join("|")) return false;
    return clesA.every((cle) =>
      memeForme(
        (a as Record<string, unknown>)[cle],
        (b as Record<string, unknown>)[cle],
      ),
    );
  }
  return false;
}
