import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/site";
import { contenu } from "@/contenu";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const pfMarletDisplay = localFont({
  src: [
    {
      path: "../fonts/fonnts.com-PF_Marlet_Display_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/fonnts.com-PF_Marlet_Display_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/fonnts.com-PF_Marlet_Display_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/fonnts.com-PF_Marlet_Display_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pf-marlet-display",
});

const { titre: siteTitle, description: siteDescription } =
  contenu.global.referencement;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: contenu.global.nomHotel,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/murmures-3.jpeg",
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/murmures-3.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${pfMarletDisplay.variable}`}
    >
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
