import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "./InstagramIcon";
import { contenu } from "@/contenu";

const { pied, global } = contenu;

/** Numéro composable : on ne garde que le `+` et les chiffres. */
const telHref = `tel:${global.telephone.replace(/[^\d+]/g, "")}`;

/**
 * Intitulé de colonne suivi de son filet, comme les titres de section du reste
 * du site. Le filet porte `rule-draw` : il se déploie à l'arrivée du pied.
 */
function TitreColonne({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-2xl font-medium uppercase leading-7 text-white">
        {children}
      </p>
      <span className="rule-draw h-px w-12 bg-antique-white/30" />
    </div>
  );
}

export function FooterInfo() {
  return (
    <div className="flex w-full flex-col items-start border-t border-white/15 md:w-px md:shrink-0 md:grow md:basis-0 md:border-l md:border-t-0">
      <Link
        href="/"
        className="flex w-full flex-col items-start gap-1.5 border-b border-white/15 px-6 py-10 no-underline md:px-10 md:py-14"
      >
        <Image
          src="/logos/logo-white.svg"
          alt="Murmures — Hôtel & Café"
          width={380}
          height={119}
          className="w-56"
        />
      </Link>

      <div className="stagger flex w-full flex-col items-start gap-9 px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-0">
        <div className="flex w-full flex-col items-start gap-4">
          <TitreColonne>{pied.titreAdresse}</TitreColonne>
          <div>
            {/* `numerals` : le numéro de rue et le code postal prennent la même
                largeur de chiffre que les prix de la carte. */}
            <p className="numerals text-base leading-6 text-white">
              {global.adresseLigne1}
            </p>
            <p className="numerals text-base leading-6 text-white">
              {global.adresseLigne2}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <TitreColonne>{pied.titreContact}</TitreColonne>
          <div className="flex flex-col items-start gap-1.5">
            <a
              href={`mailto:${global.email}`}
              className="link-rule w-fit text-base leading-6 text-white no-underline hover:text-antique-white"
            >
              {global.email}
            </a>
            <a
              href={telHref}
              className="link-rule numerals w-fit text-base leading-6 text-white no-underline hover:text-antique-white"
            >
              {global.telephone}
            </a>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <a
            href={global.instagramUrl}
            target="_blank"
            rel="noopener"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-white no-underline transition-colors duration-500 hover:bg-white hover:text-dark-chocolate"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
