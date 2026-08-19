import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textes du site — Murmures",
  // L'éditeur n'a rien à faire dans Google, même si personne n'y fait de lien.
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-linen text-dark-chocolate">{children}</div>;
}
