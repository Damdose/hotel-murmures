/**
 * L'en-tête de section du site : la ligne évocatrice en display brun clair,
 * le nom de la section en capitales espacées juste dessous. Le motif est né
 * sur la page d'accueil ; il sert désormais partout où une section s'annonce.
 */
export function TitreSection({
  surTitre,
  titre,
}: {
  surTitre: string;
  titre: string;
}) {
  return (
    <div className="stagger flex w-full flex-col items-center gap-2">
      <h3
        className="w-full text-center text-3xl font-light leading-9 text-pale-brown md:leading-10 md:text-4xl xl:text-5xl"
        style={{ fontFamily: "var(--font-pf-marlet-display)" }}
      >
        {surTitre}
      </h3>
      <h2 className="w-full text-center text-base font-normal uppercase leading-6 tracking-[0.15em] text-chocolate md:text-lg">
        {titre}
      </h2>
    </div>
  );
}
