// Connexion et déconnexion de l'éditeur.
//   POST { motDePasse } → pose le cookie signé
//   DELETE              → le retire

import {
  estConfigure,
  motDePasseValide,
  poserCookie,
  retirerCookie,
} from "@/lib/admin/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!estConfigure()) {
    return Response.json(
      {
        ok: false,
        erreur: "non_configure",
        message:
          "Aucun mot de passe n’est défini pour l’éditeur (variable ADMIN_PASSWORD).",
      },
      { status: 503 },
    );
  }

  let motDePasse = "";
  try {
    const corps = (await request.json()) as { motDePasse?: string };
    motDePasse = String(corps.motDePasse ?? "");
  } catch {
    return Response.json({ ok: false, erreur: "requete_invalide" }, { status: 400 });
  }

  // Freine l'essai systématique de mots de passe : environ une tentative par
  // seconde, ce qui reste imperceptible pour quelqu'un qui tape le bon.
  await new Promise((r) => setTimeout(r, 600));

  if (!motDePasseValide(motDePasse)) {
    return Response.json(
      { ok: false, erreur: "mot_de_passe_incorrect", message: "Mot de passe incorrect." },
      { status: 401 },
    );
  }

  return Response.json({ ok: true }, { headers: { "Set-Cookie": poserCookie() } });
}

export async function DELETE() {
  return Response.json({ ok: true }, { headers: { "Set-Cookie": retirerCookie() } });
}
