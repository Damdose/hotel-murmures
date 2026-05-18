import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-start gap-6 overflow-hidden">
      <div className="relative h-[480px] w-full overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3 className="text-lg font-medium uppercase text-chocolate md:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-light leading-6 text-dark-chocolate md:text-sm xl:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
