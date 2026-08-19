// La porte de l'éditeur.
//
// En local elle est ouverte : le poste de développement écrit sur son propre
// disque. En ligne elle demande le mot de passe partagé, et la session tient
// douze heures dans un cookie signé.

import { headers } from "next/headers";
import { estAutorise, estConfigure, estLocal, estOuvert } from "@/lib/admin/auth";
import { Connexion } from "./Connexion";
import { Editeur } from "./Editeur";

export const dynamic = "force-dynamic";

export default async function PageTextes() {
  if (estAutorise(await headers())) {
    return <Editeur local={estLocal()} ouvert={estOuvert()} />;
  }

  if (!estConfigure()) {
    return (
      <div className="grid min-h-screen place-items-center px-6">
        <div className="max-w-md text-sm leading-relaxed">
          <h1 className="mb-2 font-serif text-2xl font-light">
            Éditeur non configuré
          </h1>
          <p className="text-dark-chocolate/70">
            Aucun mot de passe n’est défini. Ajoutez la variable
            d’environnement <code className="font-mono">ADMIN_PASSWORD</code>{" "}
            dans le projet Vercel, puis redéployez. La marche à suivre est dans{" "}
            <code className="font-mono">docs/GUIDE-TEXTES.md</code>.
          </p>
        </div>
      </div>
    );
  }

  return <Connexion />;
}
