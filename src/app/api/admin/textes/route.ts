// Les textes actuels, pour remplir l'éditeur.

import { estAutorise, refus } from "@/lib/admin/auth";
import { lire } from "@/lib/admin/depot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!estAutorise(request.headers)) {
    return refus("Session expirée. Reconnectez-vous.");
  }

  const { textes, origine } = await lire();
  return Response.json({ ok: true, textes, origine });
}
