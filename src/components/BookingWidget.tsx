"use client";

import { useRef } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { ChevronIcon } from "./ChevronIcon";

const GUESTY_URL = "https://hotelmurmures.guestybookings.com/";

function getTomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function getDayAfterTomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  return d.toISOString().split("T")[0];
}

export function BookingWidget() {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLSelectElement>(null);

  function handleBook() {
    const checkIn = checkInRef.current?.value || getTomorrow();
    const checkOut = checkOutRef.current?.value || getDayAfterTomorrow();
    const guests = guestsRef.current?.value || "2";

    const url = new URL(GUESTY_URL);
    url.searchParams.set("checkIn", checkIn);
    url.searchParams.set("checkOut", checkOut);
    url.searchParams.set("adults", guests);

    window.open(url.toString(), "_blank", "noopener");
  }

  return (
    <div className="flex w-full max-w-4xl items-center justify-center">
      <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-dark-chocolate/40 px-6 py-6 backdrop-blur-[5px] lg:flex-row lg:justify-between lg:gap-16 lg:rounded-full lg:px-8 lg:py-4">
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:w-auto">
          <div className="flex w-full flex-col gap-0.5 border-b border-white pb-2 text-white lg:min-w-52">
            <label className="text-base font-medium">Dates</label>
            <div className="flex items-center gap-2">
              <input
                ref={checkInRef}
                type="date"
                defaultValue={getTomorrow()}
                min={getTomorrow()}
                onClick={() => checkInRef.current?.showPicker()}
                className="w-full cursor-pointer border-none bg-transparent py-px text-base text-white outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
              />
              <span className="text-white/70">&rarr;</span>
              <input
                ref={checkOutRef}
                type="date"
                defaultValue={getDayAfterTomorrow()}
                min={getDayAfterTomorrow()}
                onClick={() => checkOutRef.current?.showPicker()}
                className="w-full cursor-pointer border-none bg-transparent py-px text-base text-white outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
              />
              <ChevronIcon className="shrink-0 text-white" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-0.5 border-b border-white pb-2 text-white lg:min-w-52">
            <label className="text-base font-medium">Voyageurs</label>
            <div className="flex items-center">
              <select
                ref={guestsRef}
                defaultValue="2"
                className="w-full appearance-none border-none bg-transparent text-base text-white outline-none pr-5 [color-scheme:dark]"
              >
                <option value="1">1 voyageur</option>
                <option value="2">2 voyageurs</option>
                <option value="3">3 voyageurs</option>
                <option value="4">4 voyageurs</option>
                <option value="5">5 voyageurs</option>
                <option value="6">6 voyageurs</option>
                <option value="7">7 voyageurs</option>
                <option value="8">8 voyageurs</option>
                <option value="9">9 voyageurs</option>
                <option value="10">10 voyageurs</option>
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
            RÉSERVER
          </span>
          <ArrowIcon className="h-6 w-6 text-chocolate" />
        </button>
      </div>
    </div>
  );
}
