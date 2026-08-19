"use client";

import { useState } from "react";

export function Connexion() {
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");
  const [envoi, setEnvoi] = useState(false);

  async function entrer(e: React.FormEvent) {
    e.preventDefault();
    setEnvoi(true);
    setErreur("");
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ motDePasse }),
      });
      const data = await res.json();
      if (data.ok) {
        window.location.reload();
        return;
      }
      setErreur(data.message || "Mot de passe incorrect.");
    } catch {
      setErreur("Connexion impossible. Réessayez.");
    }
    setEnvoi(false);
  }

  return (
    <div className="grid min-h-screen place-items-center px-6">
      <form onSubmit={entrer} className="w-full max-w-sm">
        <h1 className="font-serif text-3xl font-light">Textes du site</h1>
        <p className="mt-2 mb-8 text-sm text-dark-chocolate/60">
          Modifier les textes de murmures — Hôtel &amp; Café.
        </p>

        <label
          htmlFor="motdepasse"
          className="mb-2 block text-sm font-medium uppercase tracking-wide"
        >
          Mot de passe
        </label>
        <input
          id="motdepasse"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          className="w-full rounded border border-dark-chocolate/20 bg-white px-4 py-3 text-base outline-none focus:border-pale-brown"
        />

        {erreur ? (
          <p className="mt-3 text-sm text-red-700">{erreur}</p>
        ) : null}

        <button
          type="submit"
          disabled={envoi || !motDePasse}
          className="mt-6 w-full cursor-pointer rounded-full border-none bg-chocolate px-6 py-3 font-serif text-base uppercase text-white disabled:opacity-40"
        >
          {envoi ? "Vérification…" : "Entrer"}
        </button>
      </form>
    </div>
  );
}
