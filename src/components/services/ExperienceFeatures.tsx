import { contenu } from "@/contenu";

const { experience } = contenu.services;

function StarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CupIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

// Une icône par point, dans l'ordre. Les six intitulés viennent de `textes.json`.
const icones = [
  <StarIcon key="star" />,
  <HeartIcon key="heart" />,
  <ClockIcon key="clock" />,
  <HomeIcon key="home" />,
  <MapPinIcon key="map" />,
  <CupIcon key="cup" />,
];

const features = experience.points.map((point, i) => ({
  icon: icones[i],
  label: point.texte,
}));

function FeatureItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-hidden px-4 py-6 md:px-14 md:py-8">
      <div className="h-10 w-10 text-dark-chocolate/70">
        {icon}
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
        {experience.titre}
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
