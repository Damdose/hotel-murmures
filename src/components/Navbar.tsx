"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "./MenuIcon";

const navLinks = [
  { label: "Hôtel", href: "/hotel" },
  { label: "Café", href: "/cafe" },
  { label: "Chambres", href: "/nos-chambres" },
  { label: "Services", href: "/services" },
  { label: "Accès", href: "https://app.sunver.app/fr/guest/hotel-des-murmures?submenu=home" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 w-full">
        <div className="pointer-events-auto flex w-full items-center justify-between overflow-hidden bg-dark-chocolate/60 px-6 py-4 backdrop-blur-[5px] md:px-24">
          <Link
            href="/"
            className="text-base font-medium uppercase tracking-[0.2em] text-white no-underline hover:text-white/70"
          >
            MURMURES HÔTEL
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-white/10 px-4 py-2 text-white backdrop-blur-[5px]"
          >
            <span className="text-base font-medium text-white">MENU</span>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark-chocolate/50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-dark-chocolate transition-transform duration-300 ease-in-out sm:w-[420px] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-base font-medium uppercase tracking-[0.2em] text-white no-underline hover:text-white/70"
          >
            MURMURES HÔTEL
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-white/10"
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-6 pt-8 md:px-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center gap-3 rounded-lg px-2 py-4 text-xl font-light uppercase tracking-wide no-underline transition-colors hover:bg-white/5 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  pathname === link.href
                    ? "bg-antique-white"
                    : "bg-white/20 group-hover:bg-white/50"
                }`}
              />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-8 md:px-10">
          <p className="text-sm font-light text-white/40">
            À deux pas de Notre-Dame de Paris
          </p>
          <p className="text-sm font-light text-white/40">
            contact@hoteldesmurmures.com
          </p>
        </div>
      </div>
    </>
  );
}
