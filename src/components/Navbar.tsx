"use client";

import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "./MenuIcon";
import { contenu } from "@/contenu";

function SymbolIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 197 245" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.0723 0C152.203 2.89053e-05 196.145 43.9415 196.145 98.0723V244.453H0V98.0723C0 43.9415 43.9415 6.60706e-05 98.0723 0ZM9.77734 234.678H46.5908V120.965C36.1152 114.628 25.7719 110.345 17.8535 107.61C14.7222 106.529 11.9817 105.693 9.77734 105.071V234.678ZM56.3682 234.678H93.1836V198.011C93.1833 164.313 75.9535 142.038 56.3682 127.513V234.678ZM186.367 105.182C184.232 105.791 181.627 106.591 178.676 107.61C170.659 110.379 160.156 114.736 149.547 121.203V234.678H186.367V105.182ZM139.77 127.806C120.347 142.337 103.346 164.538 103.346 198.011V234.678H139.77V127.806ZM98.0723 9.77734C82.9926 9.77736 68.7914 13.5669 56.3682 20.2432V115.582C73.3865 126.835 90.3105 143.572 98.2646 167.711C106.158 143.758 122.884 127.094 139.77 115.844V20.2393C127.348 13.5654 113.149 9.77735 98.0723 9.77734ZM149.547 109.894C159.115 104.578 168.277 100.859 175.484 98.3701C179.939 96.8317 183.668 95.7547 186.314 95.0566C185.363 66.7659 171.077 41.8322 149.547 26.3467V109.894ZM46.5908 26.3516C25.0896 41.8194 10.8132 66.711 9.83203 94.958C9.93178 94.984 10.0336 95.009 10.1367 95.0361C12.7872 95.7336 16.5464 96.8166 21.0449 98.3701C28.1539 100.825 37.1644 104.476 46.5908 109.677V26.3516Z"
        fill="currentColor"
      />
    </svg>
  );
}

const { navigation, global } = contenu;

// Les destinations restent dans le code : l'éditeur de textes ne touche qu'aux
// intitulés, jamais aux routes — une URL mal saisie enverrait sur un 404.
const navLinks = [
  { label: navigation.hotel, href: "/hotel" },
  { label: navigation.cafe, href: "/cafe" },
  { label: navigation.chambres, href: "/nos-chambres" },
  { label: navigation.services, href: "/services" },
  {
    label: navigation.commander,
    href: global.commanderUrl,
    external: true,
    description: navigation.commanderDescription,
  },
  { label: navigation.acces, href: "/acces" },
];

// « MURMURES HÔTEL & CAFÉ » ne tient pas sur une ligne de téléphone. Sans rien
// faire, la coupure tombe après l'esperluette et laisse « CAFÉ » seul en bas.
// On soude « HÔTEL & CAFÉ » par des espaces insécables : le seul retour encore
// possible est celui d'après « MURMURES ». La règle vaut pour n'importe quel
// libellé saisi dans l'éditeur, puisqu'elle vise l'esperluette et non le texte.
const marque = global.marque.replace(/ & /g, "\u00A0&\u00A0");

/**
 * Le logo cliquable : l'arche puis le nom. Identique dans le bandeau et dans
 * l'en-tête du tiroir, d'où le composant plutôt qu'un copier-coller.
 *
 * Tant que le nom se coupe en deux, l'arche fait `2lh`, soit exactement deux
 * interlignes : elle borde le bloc de texte au lieu de flotter à côté.
 *
 * Le seuil est à 460 px et non à `md` : le nom cesse de se couper vers
 * 465 px avec l'arche à deux lignes, et vers 445 px avec l'arche réduite —
 * n'importe quelle valeur entre les deux bascule proprement, sans largeur où
 * les deux règles se contrediraient. C'est bien avant la tablette. Caler la bascule sur `md` laissait une
 * plage de 300 px où l'arche gardait sa taille deux lignes en face d'une
 * seule ligne de texte. Au-delà, on reprend la taille d'origine (`h-5`).
 *
 * Ne pas tenter de remplacer `2lh` par `self-stretch` : un SVG inline dont
 * la hauteur vient du `stretch` calcule sa largeur `auto` à 100 % du parent
 * au lieu de suivre son `viewBox`, et le logo remplit tout l'écran. Ajouter
 * un `aspect-ratio` ne sauve rien, c'est alors la largeur qui pilote la
 * hauteur et l'arche regonfle pareil.
 */
function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex min-w-0 items-center gap-3 font-serif text-base font-normal uppercase tracking-[0.2em] text-white no-underline hover:text-white/70"
    >
      <SymbolIcon className="h-[2lh] w-auto shrink-0 text-white min-[460px]:-mt-px min-[460px]:h-5" />
      <span className="min-w-0">{marque}</span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Dès qu'on quitte la couverture, la barre se pose sur un fond chocolat :
  // sans lui, le logotype et « MENU », tous deux blancs, se perdaient sur le
  // lin de toutes les sections suivantes — flagrant sur téléphone, où la barre
  // tombe en permanence sur du texte. Le seuil est bas (24 px) pour que la
  // bascule se fasse pendant le premier geste, jamais au milieu de l'écran.
  useEffect(() => {
    let frame = 0;
    const lire = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(lire);
    };
    lire();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* `reveal` est porté par cette enveloppe, dont la classe est fixe.
          `ScrollReveal` pose `is-revealed` directement sur le noeud ; si la
          classe venait d'un `template` piloté par un état React, le premier
          rendu déclenché par le défilement la réécrirait, et la barre
          disparaîtrait pour de bon (`.reveal` est à `opacity: 0`). */}
      <div
        className="reveal pointer-events-none fixed left-0 top-0 z-30 w-full"
        style={{ "--reveal-shift": "-14px", "--reveal-duration": "1100ms" } as CSSProperties}
      >
        {/* En haut de page, aucun fond propre : un bandeau teinté ne couvrirait
            que le haut de la photo et la couperait en deux tons. Le voile est
            porté par l'image elle-même, et la barre se contente d'une ombre
            portée sur son texte. Passé la couverture, l'ombre ne suffit plus et
            c'est le fond chocolat qui prend le relais. */}
        <div
          className={`pointer-events-auto relative flex w-full items-center justify-between px-6 transition-[background-color,padding,box-shadow] duration-500 ease-[var(--ease-murmure)] md:px-24 ${
            scrolled
              ? "bg-dark-chocolate/95 py-3 shadow-[0_1px_0_0_rgb(255_255_255/0.10)] backdrop-blur-md md:py-4"
              : "py-4 [text-shadow:0_1px_12px_rgb(50_32_22/0.55)]"
          }`}
        >
          <BrandLink />
          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-white/10 px-4 py-2 text-white backdrop-blur-[5px] transition-colors duration-500 hover:bg-white/20"
          >
            <span className="font-serif text-base font-medium text-white">MENU</span>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark-chocolate/50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-dark-chocolate transition-transform duration-300 ease-in-out sm:w-[420px] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <BrandLink onClick={() => setOpen(false)} />
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10"
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav
          className={`nav-stagger flex flex-1 flex-col gap-1 px-6 pt-8 md:px-10 ${open ? "is-open" : ""}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener" }
                : {})}
              className={`group flex items-start gap-3 rounded-lg px-2 py-4 font-serif no-underline transition-colors hover:bg-white/5 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span
                className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                  pathname === link.href
                    ? "bg-antique-white"
                    : "bg-white/20 group-hover:bg-white/50"
                }`}
              />
              <span className="flex flex-col gap-1">
                <span className="text-xl font-light uppercase tracking-wide">
                  {link.label}
                </span>
                {link.description ? (
                  <span className="text-xs font-light normal-case tracking-normal text-white/40">
                    {link.description}
                  </span>
                ) : null}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-8 md:px-10">
          <p className="text-sm font-light text-white/40">
            {navigation.phraseDeFin}
          </p>
          <p className="text-sm font-light text-white/40">{global.email}</p>
        </div>
      </div>
    </>
  );
}
