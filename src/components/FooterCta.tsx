import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

export function FooterCta() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden bg-chocolate px-5 py-6 md:px-10 md:py-8">
      <div className="flex w-full max-w-screen-lg flex-col items-start gap-4 md:flex-row md:items-center md:gap-14">
        <p className="shrink-0 text-xl font-medium uppercase leading-7 text-white md:whitespace-pre md:text-2xl">
          Réservez votre séjour
        </p>
        <p className="text-sm leading-5 text-white/80 md:w-px md:shrink-0 md:grow md:basis-0 md:text-base">
          Chambres élégantes et suite raffinée vous attendent pour une
          parenthèse inoubliable au cœur de Paris.
        </p>
        <Link
          href="/nos-chambres"
          className="flex items-center gap-2 whitespace-pre rounded-full bg-antique-white px-4 py-2 no-underline"
        >
          <span className="text-base uppercase leading-5 text-chocolate">
            Réserver
          </span>
          <span className="h-6 w-6 overflow-hidden">
            <ArrowIcon className="text-chocolate" />
          </span>
        </Link>
      </div>
    </div>
  );
}
