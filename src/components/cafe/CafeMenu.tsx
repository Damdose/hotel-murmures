const menuCategories = [
  {
    title: "Boissons chaudes",
    items: [
      { name: "Espresso", price: "3,50€" },
      { name: "Café allongé", price: "4€" },
      { name: "Cappuccino", price: "5€" },
      { name: "Latte", price: "5,50€" },
      { name: "Thé & infusions", price: "5€" },
      { name: "Chocolat chaud maison", price: "6€" },
    ],
  },
  {
    title: "Pâtisseries & Gourmandises",
    items: [
      { name: "Croissant pur beurre", price: "3€" },
      { name: "Pain au chocolat", price: "3,50€" },
      { name: "Tartine avocat & œuf poché", price: "12€" },
      { name: "Granola maison & yaourt", price: "9€" },
      { name: "Cake du jour", price: "5€" },
      { name: "Cookie aux éclats de chocolat", price: "4€" },
    ],
  },
  {
    title: "Déjeuner",
    items: [
      { name: "Salade de saison", price: "14€" },
      { name: "Tartine du marché", price: "13€" },
      { name: "Soupe du jour", price: "9€" },
      { name: "Croque-Monsieur truffe", price: "15€" },
      { name: "Assiette de fromages affinés", price: "16€" },
      { name: "Dessert du jour", price: "8€" },
    ],
  },
];

export function CafeMenu() {
  return (
    <section className="flex w-full flex-col items-center bg-antique-white px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2
            className="text-3xl font-light text-pale-brown md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            Notre carte
          </h2>
          <p className="text-2xl font-normal uppercase tracking-wide text-chocolate md:text-3xl">
            À déguster sur place
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
          {menuCategories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-6">
              <h3 className="text-lg font-medium uppercase tracking-wide text-chocolate">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-chocolate/10 pb-3"
                  >
                    <span className="text-base font-light text-dark-chocolate">
                      {item.name}
                    </span>
                    <span className="shrink-0 text-sm font-medium text-pale-brown">
                      {item.price}
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
