import type { CSSProperties } from "react";
import { TitreSection } from "../TitreSection";
import { contenu } from "@/contenu";

const { experience } = contenu.services;

// Six dessins au trait, tracés dans une grille de 48 pour rester fins une fois
// posés à 44 px : un trait de 1,25 y pèse moins d'un pixel à l'écran, ce qui
// tient l'ensemble du côté de la gravure plutôt que du pictogramme.
function Trait({
  children,
  ...rest
}: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Éclat à quatre branches : le détail que l'on remarque sans le chercher. */
function EclatIcon() {
  return (
    <Trait>
      <path d="M22 6c1.1 7.5 5.4 11.8 12.9 12.9C27.4 20 23.1 24.3 22 31.8 20.9 24.3 16.6 20 9.1 18.9 16.6 17.8 20.9 13.5 22 6Z" />
      <path d="M35 28c.5 3.3 2.4 5.2 5.7 5.7-3.3.5-5.2 2.4-5.7 5.7-.5-3.3-2.4-5.2-5.7-5.7 3.3-.5 5.2-2.4 5.7-5.7Z" />
    </Trait>
  );
}

/** Sonnette de comptoir : le service qui répond sans jamais s'imposer. */
function SonnetteIcon() {
  return (
    <Trait>
      <path d="M10 32a14 14 0 0 1 28 0" />
      <path d="M6.5 32h35" />
      <path d="M11 36h26" />
      <path d="M24 18v-2.5" />
      <circle cx="24" cy="13" r="2.5" />
    </Trait>
  );
}

/** Lampe à abat-jour : la lumière basse et chaude des années 70. */
function LampeIcon() {
  return (
    <Trait>
      <path d="M17.5 9h13l6.5 15h-26L17.5 9Z" />
      <path d="M24 24v15" />
      <path d="M16.5 39h15" />
      <path d="M13 29.5 9.5 33M35 29.5l3.5 3.5M24 29.5v-1" />
    </Trait>
  );
}

/** L'arche du logo : l'intimité d'un hôtel particulier. */
function ArcheIcon() {
  return (
    <Trait>
      <path d="M10 40V23a14 14 0 0 1 28 0v17" />
      <path d="M17 40V23.5a7 7 0 0 1 14 0V40" />
      <path d="M6 40h36" />
      <path d="M24 40V16.5" />
    </Trait>
  );
}

/** Rose des vents : une adresse d'où tout Paris se rejoint. */
function BoussoleIcon() {
  return (
    <Trait>
      <circle cx="24" cy="24" r="14.5" />
      <path d="m31.5 16.5-5 10-10 5 5-10 10-5Z" />
      <path d="M24 6.5V9M24 39v2.5M6.5 24H9M39 24h2.5" />
    </Trait>
  );
}

/** Tasse et soucoupe : le comptoir du rez-de-chaussée. */
function TasseIcon() {
  return (
    <Trait>
      <path d="M13 21h20v6a10 10 0 0 1-20 0v-6Z" />
      <path d="M33 23h3a4.5 4.5 0 0 1 0 9h-1.5" />
      <path d="M8.5 39h31" />
      <path d="M20 11c1.8 2 1.8 3.6 0 5.5M27 11c1.8 2 1.8 3.6 0 5.5" />
    </Trait>
  );
}

// Une icône par point, dans l'ordre. Les six intitulés viennent de `textes.json`.
const icones = [
  <EclatIcon key="eclat" />,
  <SonnetteIcon key="sonnette" />,
  <LampeIcon key="lampe" />,
  <ArcheIcon key="arche" />,
  <BoussoleIcon key="boussole" />,
  <TasseIcon key="tasse" />,
];

const features = experience.points.map((point, i) => ({
  icon: icones[i],
  label: point.texte,
}));

function FeatureItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-hidden px-4 py-6 md:px-14 md:py-8">
      <div className="h-11 w-11 text-pale-brown md:h-12 md:w-12">
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
      <TitreSection surTitre={experience.surTitre} titre={experience.titre} />
      <div className="w-full max-w-screen-lg">
        <div
          className="stagger flex w-full flex-col md:flex-row"
          style={{ "--stagger-step": "160ms" } as CSSProperties}
        >
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-1 flex-col items-start gap-4"
            >
              <FeatureItem {...col[0]} />
              <div className={`rule-draw h-px w-full bg-black/10 ${colIdx === 0 ? "pr-4" : colIdx === 2 ? "pl-4" : "px-4"}`} />
              <FeatureItem {...col[1]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
