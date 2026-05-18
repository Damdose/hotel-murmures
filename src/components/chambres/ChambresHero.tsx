import Image from "next/image";

export function ChambresHero() {
  return (
    <section className="relative flex w-full flex-col items-center gap-14 bg-[linear-gradient(#fff_0%,#fef8f4_64%)] px-10 pt-96 pb-16 max-md:pt-96">
      <div className="absolute left-1/2 top-24 z-[1] aspect-[1.03645] w-96 -translate-x-1/2 max-md:top-36 max-md:w-96">
        <Image
          src="/images/murmures-2.jpeg"
          alt=""
          fill
          className="object-center"
          sizes="440px"
          priority
        />
      </div>

      <div className="z-[2] flex w-full max-w-screen-xl flex-col items-center gap-6">
        <div className="w-full break-words">
          <h2 className="text-center text-2xl font-normal uppercase leading-10 text-chocolate md:text-3xl">
            Six cl&eacute;s. Un h&ocirc;tel (tr&egrave;s) particulier.
            <br />
            L&apos;&eacute;l&eacute;gance &agrave; huis clos.
          </h2>
        </div>

        <div className="w-full max-w-screen-md break-words">
          <p className="text-center text-base font-light leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
            Au c&oelig;ur du 1er arrondissement, l&apos;H&ocirc;tel
            des Murmures ne d&eacute;voile que six portes. Cinq chambres et une
            suite, l&apos;essence m&ecirc;me de la confidentialit&eacute; pour
            esth&egrave;tes discrets. Elles s&apos;ouvrent sur une
            atmosph&egrave;re immersive des clubs priv&eacute;s des
            ann&eacute;es 70. Feutr&eacute;e, bois&eacute;e, marbr&eacute;e.
            Tout est singularit&eacute;.
          </p>
          <p className="mt-5 text-center text-base font-light leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
            Vous entrez dans un d&eacute;cor qui ne se donne pas en spectacle,
            mais vous enveloppe &agrave; la mani&egrave;re d&apos;un parfum ou
            d&apos;un souvenir. Chaque palier, chaque seuil, chaque
            lumi&egrave;re a &eacute;t&eacute; con&ccedil;u pour faire
            na&icirc;tre l&apos;exp&eacute;rience d&apos;un lieu o&ugrave;
            l&apos;on se sent attendu. Intimement.
          </p>
        </div>
      </div>
    </section>
  );
}
