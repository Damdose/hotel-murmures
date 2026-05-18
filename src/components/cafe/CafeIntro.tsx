export function CafeIntro() {
  return (
    <section className="flex w-full flex-col items-center px-5 pt-16 pb-16 md:px-10 md:pt-20">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-20">
        <div className="flex flex-col gap-2 md:w-1/3">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pale-brown">
            Le Café
          </p>
          <h2
            className="text-3xl font-light text-chocolate md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant-garamond)" }}
          >
            S&apos;attarder en douceur
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-base font-light leading-[1.7] text-dark-chocolate md:w-2/3 md:text-lg">
          <p>
            Au rez-de-chaussée de l&apos;Hôtel des Murmures, le café vous
            accueille dans un cadre chaleureux mêlant pierre apparente,
            verrières et boiseries. Un lieu pensé pour ralentir, où chaque
            détail invite à la contemplation.
          </p>
          <p>
            Du matin au soir, on y déguste cafés de spécialité, pâtisseries
            maison et une carte de petite restauration soignée. Le midi, des
            assiettes simples et gourmandes composées avec des produits frais
            et de saison.
          </p>
          <p>
            Ouvert à tous — résidents comme visiteurs — le Café des Murmures
            est une adresse confidentielle où l&apos;on revient pour
            l&apos;atmosphère autant que pour les saveurs.
          </p>
        </div>
      </div>
    </section>
  );
}
