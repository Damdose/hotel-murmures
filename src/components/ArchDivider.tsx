import { LogoMark } from "./LogoMark";

interface ArchDividerProps {
  /** Largeur et marges (classes Tailwind). */
  className?: string;
}

/**
 * Ponctuation de section : deux filets qui se déploient depuis le centre, et
 * l'arche du logo posée entre les deux.
 *
 * Le filigrane donne déjà l'arche en grand une fois par page. Ici elle sert de
 * signe de ponctuation, répété à petite échelle : c'est la répétition qui la
 * fait entrer dans l'œil, pas la taille.
 *
 * Les deux filets portent `rule-draw` et sont observés directement par
 * `ScrollReveal` : le composant reste serveur, aucun wrapper client.
 */
export function ArchDivider({ className = "" }: ArchDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full max-w-[15rem] items-center gap-5 ${className}`}
    >
      <span className="rule-draw h-px flex-1 bg-chocolate/15" />
      <LogoMark className="h-4 w-auto shrink-0 text-pale-brown/60" />
      <span className="rule-draw h-px flex-1 bg-chocolate/15" />
    </div>
  );
}
