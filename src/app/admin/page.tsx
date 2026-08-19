import { redirect } from "next/navigation";

// /admin est l'adresse qu'on retient et qu'on transmet ; l'éditeur vit un cran
// plus bas, ce qui laisse la place à d'autres outils un jour.
export default function AdminPage() {
  redirect("/admin/textes");
}
