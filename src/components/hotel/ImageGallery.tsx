import Image from "next/image";

const galleryImages = [
  {
    src: "/images/murmures-6.jpeg",
    alt: "Galerie 1",
  },
  {
    src: "/images/murmures-3.jpeg",
    alt: "Galerie 2",
    showButton: true,
  },
  {
    src: "/images/murmures-4.jpeg",
    alt: "Galerie 3",
  },
];

export function ImageGallery() {
  return (
    <section className="flex w-full flex-col items-center gap-14 bg-gradient-to-b from-[#f4e6d7] to-[#fdf8f2] px-5 py-12 md:px-10">
      <div className="flex w-full items-start gap-4 overflow-x-auto md:gap-12">
        {galleryImages.map((img) => (
          <div
            key={img.src}
            className="relative w-[85vw] shrink-0 rounded md:w-[1272px]"
            style={{ aspectRatio: "2.06276" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="rounded object-cover object-center"
              sizes="1272px"
              loading="lazy"
            />
            {img.showButton && (
              <div className="absolute right-6 bottom-6 flex items-center gap-2 rounded-full bg-white px-4 py-2">
                <p className="text-base uppercase leading-5 text-dark-chocolate">
                  Voir la galerie
                </p>
                <div className="relative h-6 w-6">
                  <Image
                    src="/images/murmures-6.jpeg"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="24px"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
