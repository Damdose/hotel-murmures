"use client";

import { useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { ChevronIcon } from "./ChevronIcon";
import { guestyBookingUrl } from "@/lib/guesty";
import { contenu } from "@/contenu";

const { reservation } = contenu.global;

const NOMBRES_VOYAGEURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// L'hôtel est à Paris : on calcule les dates par défaut dans ce fuseau pour que
// le rendu serveur et le rendu client tombent sur le même jour.
const TIMEZONE = "Europe/Paris";

function todayInParis() {
  // "en-CA" formate en YYYY-MM-DD, le format attendu par <input type="date">.
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE }).format(
    new Date(),
  );
}

function addDays(isoDate: string, days: number) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function BookingWidget() {
  const today = todayInParis();

  const [checkIn, setCheckIn] = useState(() => addDays(today, 1));
  const [checkOut, setCheckOut] = useState(() => addDays(today, 2));
  const [guests, setGuests] = useState("2");

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  // Une nuit minimum : le départ ne peut pas précéder le lendemain de l'arrivée.
  const minCheckOut = addDays(checkIn, 1);
  const departure = checkOut > checkIn ? checkOut : minCheckOut;

  function handleCheckInChange(value: string) {
    if (!value) return;
    setCheckIn(value);
    if (value >= checkOut) setCheckOut(addDays(value, 1));
  }

  function handleBook() {
    const url = guestyBookingUrl({ checkIn, checkOut: departure, guests });
    window.open(url, "_blank", "noopener");
  }

  return (
    <div className="flex w-full max-w-4xl items-center justify-center">
      <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-dark-chocolate/40 px-6 py-6 backdrop-blur-[5px] lg:flex-row lg:justify-between lg:gap-16 lg:rounded-full lg:px-8 lg:py-4">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:w-auto">
          <div className="flex w-full flex-col gap-0.5 border-b border-white pb-2 text-white lg:min-w-52">
            <label className="text-base font-medium">{reservation.labelDates}</label>
            <div className="flex items-center gap-2">
              <input
                ref={checkInRef}
                type="date"
                aria-label="Date d'arrivée"
                value={checkIn}
                min={addDays(today, 1)}
                onChange={(e) => handleCheckInChange(e.target.value)}
                onClick={() => checkInRef.current?.showPicker?.()}
                className="w-full cursor-pointer border-none bg-transparent py-px text-base text-white outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
              />
              <span className="text-white/70">&rarr;</span>
              <input
                ref={checkOutRef}
                type="date"
                aria-label="Date de départ"
                value={departure}
                min={minCheckOut}
                onChange={(e) => e.target.value && setCheckOut(e.target.value)}
                onClick={() => checkOutRef.current?.showPicker?.()}
                className="w-full cursor-pointer border-none bg-transparent py-px text-base text-white outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
              />
              <ChevronIcon className="shrink-0 text-white" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-0.5 border-b border-white pb-2 text-white lg:min-w-52">
            <label className="text-base font-medium">
              {reservation.labelVoyageurs}
            </label>
            <div className="flex items-center">
              <select
                aria-label="Nombre de voyageurs"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full appearance-none border-none bg-transparent text-base text-white outline-none pr-5 [color-scheme:dark]"
              >
                {NOMBRES_VOYAGEURS.map((n) => (
                  <option key={n} value={n}>
                    {n}{" "}
                    {n === 1
                      ? reservation.voyageurSingulier
                      : reservation.voyageurPluriel}
                  </option>
                ))}
              </select>
              <ChevronIcon className="shrink-0 text-white" />
            </div>
          </div>
        </div>
        <button
          onClick={handleBook}
          className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border-none bg-antique-white px-4 py-2"
        >
          <span className="whitespace-pre font-serif uppercase text-chocolate text-base">
            {reservation.bouton}
          </span>
          <ArrowIcon className="h-6 w-6 text-chocolate" />
        </button>
      </div>
    </div>
  );
}
