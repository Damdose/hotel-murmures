interface StarMarkProps {
  /** Taille et couleur (classes Tailwind). Le tracé suit `currentColor`. */
  className?: string;
}

/**
 * L'astérisque à six branches du logotype, celui qui sépare HÔTEL de CAFÉ.
 *
 * Le tracé est repris tel quel de `public/logos/logo-white.svg`, avec sa boîte
 * d'origine pour `viewBox` : redessiné à la main, il perdrait l'effilement des
 * branches, qui est ce qui le distingue d'un astérisque de clavier.
 *
 * C'est un signe de la charte sans être le logo : il ponctue là où l'arche
 * ferait redite (pied de page, séries de liens).
 */
export function StarMark({ className = "" }: StarMarkProps) {
  return (
    <svg
      viewBox="338 175.5 30.2 34.2"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M349.93 206C349.93 201.92 352.71 196.16 352.91 192.98C350.23 194.66 346.65 200.04 343.07 202.02C342.47 202.42 341.97 202.52 341.39 202.52C339.71 202.52 338.31 200.94 338.31 199.24C338.31 198.14 338.71 197.16 339.89 196.56C343.37 194.48 349.73 193.98 352.61 192.58C349.73 191.18 343.37 190.6 339.89 188.6C338.79 188 338.31 187 338.31 186.02C338.31 184.34 339.71 182.64 341.39 182.64C341.89 182.64 342.49 182.74 343.07 183.14C346.65 185.12 350.23 190.4 352.91 192.18C352.71 189 349.93 183.24 349.93 179.16C349.93 177.08 351.43 175.98 353.11 175.98C354.79 175.98 356.29 177.08 356.29 179.16C356.29 183.24 353.51 189 353.31 192.18C355.99 190.5 359.57 185.12 363.15 183.14C363.75 182.74 364.35 182.64 364.83 182.64C366.61 182.64 367.91 184.32 367.91 185.92C367.91 187.02 367.51 188 366.31 188.6C362.83 190.68 356.47 191.18 353.59 192.58C356.47 193.98 362.83 194.46 366.31 196.56C368.09 197.56 368.19 199.54 367.51 200.84C366.91 201.84 365.93 202.52 364.83 202.52C364.23 202.52 363.73 202.42 363.15 202.02C359.57 200.04 355.99 194.66 353.31 192.98C353.51 196.16 356.29 201.92 356.29 206C356.29 208.08 354.79 209.18 353.11 209.18C351.43 209.18 349.93 208.08 349.93 206Z" />
    </svg>
  );
}
