import Link from "next/link";

const menuLinks = [
  { label: "L'Hôtel", href: "/hotel" },
  { label: "Café", href: "/cafe" },
  { label: "Chambres", href: "/nos-chambres" },
  { label: "Services", href: "/services" },
  { label: "Accès", href: "https://app.sunver.app/fr/guest/hotel-des-murmures?submenu=home" },
];

const legalLinks = [
  {
    label: "Conditions générales d'utilisation",
    href: "/conditions-generales-utilisation",
  },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export function FooterMenu() {
  return (
    <div className="flex w-full flex-col items-start justify-between self-stretch px-6 md:w-px md:shrink-0 md:grow md:basis-0 md:px-0">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-full flex-col items-start gap-8 pt-10 md:gap-16 md:pt-14">
          <p className="text-2xl font-medium uppercase leading-7 text-white">
            Menu
          </p>
          <nav className="flex w-full flex-col items-start gap-9">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-white no-underline hover:text-antique-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 pb-8 md:flex-row md:items-center md:pb-0">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm leading-5 text-white/60 no-underline hover:text-antique-white md:w-px md:shrink-0 md:grow md:basis-0 md:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
