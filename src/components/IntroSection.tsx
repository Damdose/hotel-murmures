export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative flex w-full flex-col items-center gap-14 border-b border-chocolate/10 px-5 pt-16 pb-16 md:px-10 md:pt-20"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-6">
        <h2 className="w-full text-center text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
          Hôtel &amp; Café à Paris
        </h2>
        <div className="flex w-full max-w-4xl flex-col text-center text-lg font-light leading-[140%] text-dark-chocolate md:text-xl">
          <p>
            À deux pas de Notre-Dame de Paris, l&apos;Hôtel des Murmures
            dévoile une adresse confidentielle où le raffinement se vit
            en douceur. Ce lieu hybride, à la fois hôtel intimiste et café
            feutré, invite à ralentir dans une atmosphère enveloppante.
          </p>
          <p className="mt-4">
            Les matières sont chaudes, les lumières tamisées, chaque
            détail pensé pour créer une bulle cozy et élégante. Ici, on
            séjourne comme on s&apos;attarde autour d&apos;un café : avec
            discrétion, confort et une touche de luxe silencieux.
          </p>
        </div>
      </div>
    </section>
  );
}
