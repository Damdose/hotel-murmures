import { contenu } from "@/contenu";

const { carte } = contenu.cafe;

export function CafeMenu() {
  return (
    <section className="flex w-full flex-col items-center bg-antique-white px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2 text-center">
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

        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          {carte.categories.map((cat) => (
            <div key={cat.titre} className="flex flex-col gap-6">
              <h3 className="text-lg font-medium uppercase tracking-wide text-chocolate">
                {cat.titre}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.nom}
                    className="flex items-baseline justify-between gap-4 border-b border-chocolate/10 pb-3"
                  >
                    <span className="text-base font-light text-dark-chocolate">
                      {item.nom}
                    </span>
                    <span className="shrink-0 text-sm font-medium text-pale-brown">
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
