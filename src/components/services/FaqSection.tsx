"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { ArchDivider } from "../ArchDivider";
import { contenu } from "@/contenu";

const { faq } = contenu.services;

type FaqItem = (typeof faq.questions)[number];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark-chocolate/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent px-0 py-5 text-left transition-colors duration-500 hover:text-chocolate"
        aria-expanded={open}
      >
        <p className="text-base font-light leading-7 text-dark-chocolate md:text-lg">
          {item.question}
        </p>
        {/* Croix tracée au filet plutôt qu'un « + » typographique : la barre
            verticale se rétracte à l'ouverture, et le signe reste dessiné dans
            la même épaisseur que les filets du reste du site. */}
        <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-pale-brown" />
          <span
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-pale-brown transition-transform duration-500 ease-[var(--ease-murmure)] ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[var(--ease-murmure)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">
            <p className="text-sm font-light leading-6 text-dark-chocolate/70 md:text-base">
              {item.reponse}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="flex w-full flex-col items-center px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-md flex-col items-center gap-14">
        <div className="stagger flex flex-col items-center gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pale-brown">
            {faq.surTitre}
          </p>
          <h2 className="w-full text-center font-serif text-3xl font-light text-dark-chocolate md:text-4xl">
            {faq.titre}
          </h2>
        </div>
        <ArchDivider className="-mt-4" />
        <div className="stagger w-full" style={{ "--stagger-step": "90ms" } as CSSProperties}>
          {faq.questions.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
