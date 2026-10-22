"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export default function InscriptionPage() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    promotion: "",
  });
  const [message, setMessage] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    try {
      const response = await fetch(`${API_URL}/alumni`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          promotion: parseInt(form.promotion, 10),
        }),
      });
      if (!response.ok) throw new Error("Echec de l'inscription");
      setMessage("Inscription enregistree avec succes.");
      setForm({ nom: "", prenom: "", email: "", promotion: "" });
    } catch (err) {
      setMessage("Erreur : impossible de contacter le serveur backend.");
    }
  }

  return (
    <section className="card">
      <h1>Inscription d&apos;un alumni</h1>
      <p className="subtitle">
        En tant qu&apos;alumni, je souhaite creer mon compte afin de m&apos;inscrire
        dans l&apos;annuaire.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nom
          <input name="nom" value={form.nom} onChange={handleChange} required />
        </label>
        <label>
          Prenom
          <input name="prenom" value={form.prenom} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Promotion (annee)
          <input
            type="number"
            name="promotion"
            value={form.promotion}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">S&apos;inscrire</button>
      </form>
      {message && <p className="message">{message}</p>}
    </section>
  );
}
