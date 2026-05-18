import Image from "next/image";

const features = [
  {
    icon: "/images/murmures-1.jpeg",
    label: "Un raffinement discret,\njusque dans les détails",
  },
  {
    icon: "/images/murmures-2.jpeg",
    label: "Un service attentif,\njamais intrusif",
  },
  {
    icon: "/images/murmures-3.jpeg",
    label: "L\u2019esthétique feutrée\ndes années 70",
  },
  {
    icon: "/images/murmures-4.jpeg",
    label: "L\u2019intimité d\u2019un\nhôtel particulier",
  },
  {
    icon: "/images/murmures-5.jpeg",
    label: "Une adresse privilégiée,\nParis à vos pieds",
  },
  {
    icon: "/images/murmures-6.jpeg",
    label: "Un bar caché,\nréservé aux initiés",
  },
];

function FeatureItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-hidden px-4 py-6 md:px-14 md:py-8">
      <div className="relative h-10 w-10">
        <Image
          src={icon}
          alt=""
          fill
          className="object-cover object-center"
          sizes="40px"
        />
      </div>
      <p className="whitespace-pre-wrap text-center text-base leading-[140%] text-dark-chocolate md:text-lg xl:text-xl">
        {label}
      </p>
    </div>
  );
}

export function ExperienceFeatures() {
  const columns = [
    [features[0], features[3]],
    [features[1], features[4]],
    [features[2], features[5]],
  ];

  return (
    <section
      id="services-section"
      className="flex w-full flex-col items-center gap-14 px-5 pt-16 pb-20 md:px-10"
    >
      <h2 className="w-full text-center text-2xl font-normal uppercase text-chocolate md:text-3xl">
        L&apos;expérience des Murmures
      </h2>
      <div className="w-full max-w-screen-lg">
        <div className="flex w-full flex-col md:flex-row">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-1 flex-col items-start gap-4"
            >
              <FeatureItem {...col[0]} />
              <div className={`h-px w-full bg-black/10 ${colIdx === 0 ? "pr-4" : colIdx === 2 ? "pl-4" : "px-4"}`} />
              <FeatureItem {...col[1]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
