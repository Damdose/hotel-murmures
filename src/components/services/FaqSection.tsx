"use client";

import { useState } from "react";
import { LogoWatermark } from "../LogoWatermark";
import { contenu } from "@/contenu";

const { faq } = contenu.services;

type FaqItem = (typeof faq.questions)[number];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark-chocolate/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent px-0 py-5 text-left"
        aria-expanded={open}
      >
        <p className="text-base font-light leading-7 text-dark-chocolate md:text-lg">
          {item.question}
        </p>
        <span
          className={`shrink-0 text-xl font-light text-pale-brown transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
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
    <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-16 md:px-10 md:py-24">
      <LogoWatermark className="left-1/2 top-10 w-[300px] -translate-x-1/2 md:top-14 md:w-[420px]" />
      <div className="relative z-10 flex w-full max-w-screen-md flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pale-brown">
            {faq.surTitre}
          </p>
          <h2 className="w-full text-center font-serif text-3xl font-light text-dark-chocolate md:text-4xl">
            {faq.titre}
          </h2>
        </div>
        <div className="w-full">
          {faq.questions.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
