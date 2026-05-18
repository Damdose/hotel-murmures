import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "./InstagramIcon";

export function FooterInfo() {
  return (
    <div className="flex w-full flex-col items-start border-t border-white/15 md:w-px md:shrink-0 md:grow md:basis-0 md:border-l md:border-t-0">
      <Link
        href="/"
        className="flex w-full flex-col items-start gap-1.5 border-b border-white/15 px-6 py-10 no-underline md:px-10 md:py-14"
      >
        <Image
          src="/logos/logo-white.svg"
          alt="Murmures — Hôtel & Café"
          width={380}
          height={119}
          className="w-56"
        />
      </Link>

      <div className="flex w-full flex-col items-start gap-9 px-6 pt-10 pb-10 md:px-10 md:pt-14 md:pb-0">
        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-2xl font-medium uppercase leading-7 text-white">
            Adresse
          </p>
          <div>
            <p className="text-base leading-5 text-white">
              À deux pas de Notre-Dame,
            </p>
            <p className="text-base leading-5 text-white">
              Paris, France
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-2xl font-medium uppercase leading-7 text-white">
            Contact
          </p>
          <div>
            <p className="text-base leading-5 text-white">
              contact@hoteldesmurmures.com
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-white no-underline"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
