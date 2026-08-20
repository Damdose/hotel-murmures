"use client";

import { useEffect } from "react";

// Un seul observateur pour tout le site : les sections restent des composants
// serveur et se contentent d'une classe (`reveal`, `reveal-image`, `stagger`).
const SELECTEUR =
  ".reveal, .reveal-image, .fade-in, .stagger, .rule-draw";

export function ScrollReveal() {
  useEffect(() => {
    const reveler = (element: Element) => element.classList.add("is-revealed");
    const tout = () =>
      document.querySelectorAll(SELECTEUR).forEach(reveler);

    // Mouvement réduit ou navigateur sans observateur : tout est déjà en place.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      tout();
      return;
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          reveler(entree.target);
          observateur.unobserve(entree.target);
        }
      },
      // L'élément doit être entré de 64 px : l'arrivée se joue sous les yeux
      // du visiteur, jamais au ras du bord. Une marge en pixels plutôt qu'en
      // pourcentage — sur un grand écran, un pourcentage laisserait le bandeau
      // de pied de page sous le seuil, donc invisible à jamais.
      { rootMargin: "0px 0px -64px 0px", threshold: 0 },
    );

    const observer = (element: Element) => {
      if (!element.classList.contains("is-revealed")) {
        observateur.observe(element);
      }
    };

    document.querySelectorAll(SELECTEUR).forEach(observer);

    // Carrousels, galerie plein écran : ce qui arrive après coup est suivi aussi.
    const mutations = new MutationObserver((liste) => {
      for (const mutation of liste) {
        for (const noeud of mutation.addedNodes) {
          if (!(noeud instanceof HTMLElement)) continue;
          if (noeud.matches(SELECTEUR)) observer(noeud);
          noeud.querySelectorAll(SELECTEUR).forEach(observer);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observateur.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
