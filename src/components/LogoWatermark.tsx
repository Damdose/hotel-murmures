import { LogoMark } from "./LogoMark";

interface LogoWatermarkProps {
  /**
   * Positionnement et taille (classes Tailwind). Le composant est déjà en
   * absolute et se dimensionne seul sur mobile : ne donner ici que des tailles
   * préfixées `md:`, sans quoi les deux règles se disputeraient la cascade.
   */
  className?: string;
}

/**
 * Symbole du logo décliné en filigrane, dans un beige plus soutenu que le fond.
 * À poser dans une section `relative overflow-hidden`, avant le contenu.
 *
 * Sur mobile, l'arche se cale sur la largeur de l'écran plutôt que sur la
 * hauteur de sa section : une hauteur relative gonfle avec le texte, et sur un
 * écran étroit le motif finit par déborder des deux côtés.
 *
 * Elle est calée à 68 % de la largeur, pas plus : l'arche est un tracé haut
 * (197 × 245, soit une hauteur d'environ 1,24 fois sa largeur), donc pleine
 * largeur elle dépasse la hauteur de l'écran et se lit comme une illustration
 * au lieu d'un fond. À 68 % elle encadre le texte sans le concurrencer, et
 * reste entière quel que soit le téléphone.
 *
 * `max-h-full` la rattrape dans les sections courtes : l'arche y rétrécit plutôt
 * que de se faire rogner en haut et en bas par l'`overflow-hidden`.
 */
export function LogoWatermark({ className = "" }: LogoWatermarkProps) {
  return (
    <LogoMark
      className={`pointer-events-none absolute h-auto max-h-full w-[68vw] max-w-none select-none text-pale-brown/[0.16] ${className}`}
    />
  );
}
