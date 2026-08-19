// Publier les textes.
//
// La forme reçue est vérifiée contre celle qui est EN LIGNE (pas contre celle
// du bundle) : si quelqu'un a publié entre-temps, on valide contre sa version.
// Puis on écrit — sur le disque en local, en un commit sur GitHub en ligne.

import { estAutorise, estLocal, refus } from "@/lib/admin/auth";
import { ecrire, lire } from "@/lib/admin/depot";
import { compterChangements, valider } from "@/lib/admin/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!estAutorise(request.headers)) {
    return refus("Session expirée. Reconnectez-vous, vos textes sont conservés.");
  }

  let recu: unknown;
  try {
    recu = ((await request.json()) as { textes?: unknown }).textes;
  } catch {
    return Response.json({ ok: false, message: "Requête illisible." }, { status: 400 });
  }

  const { textes: actuels } = await lire();

  const verdict = valider(recu, actuels);
  if (!verdict.ok) {
    return Response.json({ ok: false, message: verdict.message }, { status: 400 });
  }

  const changements = compterChangements(actuels, verdict.valeur);
  if (!changements) {
    return Response.json({ ok: true, changements: 0, message: "Aucune modification à publier." });
  }

  const resultat = await ecrire(
    verdict.valeur,
    `Textes du site : ${changements} modification${changements > 1 ? "s" : ""}`,
  );

  if (!resultat.ok) {
    return Response.json({ ok: false, message: resultat.message }, { status: 502 });
  }

  return Response.json({
    ok: true,
    changements,
    origine: resultat.origine,
    commit: resultat.commit,
    message: estLocal()
      ? `${changements} modification${changements > 1 ? "s" : ""} enregistrée${changements > 1 ? "s" : ""}. La page se recharge toute seule.`
      : `${changements} modification${changements > 1 ? "s" : ""} publiée${changements > 1 ? "s" : ""}. Le site se met à jour dans une minute environ.`,
  });
}
