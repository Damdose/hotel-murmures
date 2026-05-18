import Image from "next/image";

const images = [
  { src: "/images/murmures-5.jpeg", alt: "Comptoir du café" },
  { src: "/images/murmures-6.jpeg", alt: "Salle du café" },
  { src: "/images/murmures-7.jpeg", alt: "Vue d'ensemble du café" },
];

export function CafeGallery() {
  return (
    <section className="flex w-full flex-col items-center px-5 pb-16 md:px-10">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-3">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-[4/3] w-full overflow-hidden rounded">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
