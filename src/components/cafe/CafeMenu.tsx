import type { CSSProperties } from "react";
import { ArchDivider } from "../ArchDivider";
import { contenu } from "@/contenu";

const { carte } = contenu.cafe;

// Numérotation des catégories : les chiffres romains d'une carte imprimée.
// Au-delà de la sixième, le folio disparaît plutôt que de devenir illisible.
const FOLIOS = ["I", "II", "III", "IV", "V", "VI"];

export function CafeMenu() {
  return (
    <section className="flex w-full flex-col items-center bg-antique-white px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <div className="stagger flex flex-col items-center gap-2 text-center">
          <h2
            className="text-3xl font-light text-pale-brown md:text-4xl"
            style={{ fontFamily: "var(--font-pf-marlet-display)" }}
          >
            {carte.surTitre}
          </h2>
          <p className="text-2xl font-normal uppercase tracking-wide text-chocolate md:text-3xl">
            {carte.titre}
          </p>
        </div>

        <ArchDivider />

        <div
          className="stagger grid w-full grid-cols-1 gap-12 md:grid-cols-3"
          style={{ "--stagger-step": "150ms" } as CSSProperties}
        >
          {carte.categories.map((cat, index) => (
            <div key={cat.titre} className="flex flex-col gap-6">
              <h3 className="flex items-baseline gap-3 text-lg font-medium uppercase tracking-wide text-chocolate">
                {FOLIOS[index] && (
                  <span className="folio text-sm font-normal text-pale-brown">
                    {FOLIOS[index]}
                  </span>
                )}
                {cat.titre}
              </h3>
              <div className="flex flex-col gap-5">
                {cat.items.map((item) => (
                  // Points de conduite plutôt qu'un filet plein : le regard
                  // relie le plat à son prix comme sur une carte imprimée.
                  <div
                    key={item.nom}
                    className="flex items-baseline gap-3"
                  >
                    <span className="text-base font-light text-dark-chocolate">
                      {item.nom}
                    </span>
                    <span className="leader" aria-hidden="true" />
                    <span className="numerals shrink-0 text-sm font-medium text-pale-brown">
                      {item.prix}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
