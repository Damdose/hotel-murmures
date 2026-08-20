import Link from "next/link";
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

export function FooterMenu() {
  return (
    <div className="flex w-full flex-col items-start justify-between self-stretch px-6 md:w-px md:shrink-0 md:grow md:basis-0 md:px-0">
      <div className="flex w-full items-start justify-between">
        <div className="stagger flex w-full flex-col items-start gap-8 pt-10 md:gap-16 md:pt-14">
          <p className="text-2xl font-medium uppercase leading-7 text-white">
            {pied.titreMenu}
          </p>
          <nav className="flex w-full flex-col items-start gap-9">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-rule w-fit text-lg text-white no-underline hover:text-antique-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 pb-8 md:flex-row md:items-center md:pb-0">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="link-rule text-sm leading-5 text-white/60 no-underline hover:text-antique-white md:w-px md:shrink-0 md:grow md:basis-0 md:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
