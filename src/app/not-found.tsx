import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-linen">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center md:py-40">
        <p className="mb-4 font-serif text-8xl font-light text-chocolate md:text-9xl">
          404
        </p>
        <h1 className="mb-4 text-2xl font-medium uppercase tracking-wide text-dark-chocolate">
          Page introuvable
        </h1>
        <p className="mb-10 max-w-md text-base font-light leading-7 text-dark-chocolate/60">
          La page que vous recherchez semble avoir disparu dans les murmures.
          Laissez-nous vous raccompagner.
        </p>
        <Link
          href="/"
          className="rounded-full bg-dark-chocolate px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider text-white no-underline transition-colors hover:bg-chocolate"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}
