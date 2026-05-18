export function HotelIntro() {
  return (
    <section className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-20 md:px-10">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-6">
        <p className="text-center text-base font-medium uppercase leading-5 tracking-[0] text-chocolate">
          Votre secret parisien
        </p>
        <p className="w-full max-w-screen-md text-center text-base leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
          L&apos;Hôtel des Murmures s&apos;inspire de l&apos;atmosphère feutrée
          des clubs privés parisiens des années 70. Non comme un décor figé, mais
          comme une&nbsp;expérience immersive, où chaque détail murmure
          l&apos;histoire d&apos;un Paris discret, raffiné, à l&apos;écart du
          monde.
        </p>
      </div>
    </section>
  );
}
