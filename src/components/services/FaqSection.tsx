"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Quels sont les horaires d\u2019arriv\u00e9e et de d\u00e9part ?",
    answer:
      "L\u2019arriv\u00e9e est possible \u00e0 partir de 15h, et jusqu\u2019\u00e0 2h du matin. Le d\u00e9part se fait avant 11h. Un d\u00e9part tardif peut \u00eatre organis\u00e9, sous r\u00e9serve de disponibilit\u00e9 \u2014 il vous suffit d\u2019en faire la demande.",
  },
  {
    question: "Les services sont-ils disponibles 24h/24 ?",
    answer:
      "Oui, notre \u00e9quipe est \u00e0 votre disposition \u00e0 toute heure pour r\u00e9pondre \u00e0 vos demandes, organiser vos transferts ou vous servir en chambre.",
  },
  {
    question: "Le caf\u00e9 est-il ouvert \u00e0 tous ?",
    answer:
      "Le Caf\u00e9 des Murmures est r\u00e9serv\u00e9 aux clients de l\u2019h\u00f4tel et aux d\u00e9tenteurs d\u2019une carte d\u2019acc\u00e8s. Un lieu discret, pour ceux qui savent.",
  },
  {
    question:
      "Proposez-vous un service de transfert ou de taxi ?",
    answer:
      "Oui. Qu\u2019il s\u2019agisse d\u2019un d\u00e9part pour l\u2019a\u00e9roport ou d\u2019une escapade impr\u00e9vue, nous arrangeons vos d\u00e9placements en toute simplicit\u00e9.",
  },
  {
    question: "Acceptez-vous les animaux de compagnie ?",
    answer:
      "L\u2019h\u00f4tel ne peut pas accueillir d\u2019animaux de compagnie.",
  },
  {
    question:
      "Puis-je demander une attention particuli\u00e8re en chambre ?",
    answer:
      "Tout est possible. Une fragrance, un vin, une surprise\u2026 chaque d\u00e9tail peut \u00eatre pens\u00e9 pour vous.",
  },
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-start gap-4 overflow-hidden border-none bg-white p-6 text-left"
        aria-expanded={open}
      >
        <div className="flex flex-1 items-center gap-3">
          <p className="text-lg font-medium leading-7 text-chocolate md:text-2xl">
            {item.question}
          </p>
        </div>
        <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-dark-chocolate">
          <span
            className={`absolute h-3 w-px bg-white transition-transform duration-300 ${
              open ? "rotate-0" : "-rotate-90"
            }`}
          />
          <span className="absolute h-3 w-px rotate-180 bg-white" />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="text-base leading-5 text-dark-chocolate">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="flex w-full flex-col items-center gap-2 bg-gradient-to-b from-[#f4e6d7] to-[#fdf8f2] px-5 py-16 md:px-10 md:py-24">
      <div className="flex w-full max-w-screen-lg flex-col items-center gap-12">
        <h2 className="w-full text-center text-2xl font-normal uppercase text-chocolate md:text-3xl">
          Questions fréquentes
        </h2>
        <div className="flex w-full flex-col gap-3 rounded-2xl overflow-hidden p-3">
          {faqItems.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
