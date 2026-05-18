export function ServicesIntro() {
  return (
    <section
      id="intro-section"
      className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-16 md:px-10 md:pb-20"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-6">
        <p className="w-full text-center text-base uppercase tracking-[0] text-chocolate">
          Un service à votre mesure
        </p>
        <div className="flex w-full max-w-screen-md flex-col gap-5 text-center text-base leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
          <p>Tout ici s&apos;accorde au rythme de vos envies.</p>
          <p>
            Rien n&apos;est laissé au hasard, mais rien ne cherche à
            impressionner. Chaque geste porte notre signature : le silence. La
            confidence.
          </p>
          <p>
            Un verre de vin, un parfum discret sur les draps, une invitation à
            franchir un rideau de velours pour savourer un moment hors du temps.
            Voilà une adresse où l&apos;on se sent invité, attendu.
          </p>
        </div>
      </div>
    </section>
  );
}
