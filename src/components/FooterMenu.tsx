import Link from "next/link";
import { StarMark } from "./StarMark";
import { contenu } from "@/contenu";

const { pied, global } = contenu;

const menuLinks = [
  { label: pied.lienHotel, href: "/hotel" },
  { label: pied.lienCafe, href: "/cafe" },
  { label: pied.lienChambres, href: "/nos-chambres" },
  { label: pied.lienServices, href: "/services" },
  { label: pied.lienCommander, href: global.commanderUrl },
];

const legalLinks = [
  { label: pied.lienCgu, href: "/conditions-generales-utilisation" },
  { label: pied.lienMentions, href: "/mentions-legales" },
  { label: pied.lienConfidentialite, href: "/politique-confidentialite" },
];

// Numérotation des entrées, comme les catégories de la carte du café.
const FOLIOS = ["I", "II", "III", "IV", "V", "VI"];

export function FooterMenu() {
  return (
    <div className="flex w-full flex-col items-start justify-between self-stretch px-6 md:w-px md:shrink-0 md:grow md:basis-0 md:px-0">
      <div className="flex w-full items-start justify-between">
        <div className="stagger flex w-full flex-col items-start gap-8 pt-10 md:gap-16 md:pt-14">
          <div className="flex w-full flex-col items-start gap-4">
            <p className="text-2xl font-medium uppercase leading-7 text-white">
              {pied.titreMenu}
            </p>
            <span className="rule-draw h-px w-12 bg-antique-white/30" />
          </div>
          <nav className="flex w-full flex-col items-start gap-9">
            {menuLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex w-fit items-baseline gap-4 text-lg text-white no-underline"
              >
                <span className="folio w-5 shrink-0 text-xs text-antique-white/45 transition-colors duration-500 ease-[var(--ease-murmure)] group-hover:text-antique-white/70">
                  {FOLIOS[index]}
                </span>
                <span className="link-rule group-hover:text-antique-white">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {/* Les mentions légales touchaient la dernière entrée du menu : un filet
          et une respiration les rendent à leur statut de bas de page. */}
      <div className="flex w-full flex-col gap-2 border-t border-white/10 pt-8 pb-8 md:flex-row md:items-center md:gap-3 md:pt-8 md:pb-0">
        {legalLinks.map((link, index) => (
          <div key={link.href} className="flex items-center gap-3">
            {index > 0 && (
              <StarMark className="hidden h-2 w-auto shrink-0 text-antique-white/35 md:block" />
            )}
            <Link
              href={link.href}
              className="link-rule text-sm leading-5 text-white/60 no-underline hover:text-antique-white md:text-base"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
