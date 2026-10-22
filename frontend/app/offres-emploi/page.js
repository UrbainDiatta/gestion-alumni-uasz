"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export default function OffresEmploiPage() {
  const [offres, setOffres] = useState([]);
  const [form, setForm] = useState({ titre: "", entreprise: "", description: "" });

  async function loadOffres() {
    try {
      const res = await fetch(`${API_URL}/offres-emploi`);
      const data = await res.json();
      setOffres(data);
    } catch (err) {
      setOffres([]);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/offres-emploi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({ titre: "", entreprise: "", description: "" });
      loadOffres();
    } catch (err) {
      // en tant qu'administrateur, je souhaite publier une offre d'emploi
      // afin d'informer les alumni (Story vue dans le TP Jira)
    }
  }

  useEffect(() => {
    loadOffres();
  }, []);

  return (
    <section className="card">
      <h1>Offres d&apos;emploi</h1>
      <p className="subtitle">
        En tant qu&apos;administrateur, je souhaite publier une offre d&apos;emploi
        afin d&apos;informer les alumni.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Titre du poste
          <input name="titre" value={form.titre} onChange={handleChange} required />
        </label>
        <label>
          Entreprise
          <input
            name="entreprise"
            value={form.entreprise}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Publier l&apos;offre</button>
      </form>

      <table className="table" style={{ marginTop: 30 }}>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Entreprise</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {offres.map((o) => (
            <tr key={o.id}>
              <td>{o.titre}</td>
              <td>{o.entreprise}</td>
              <td>{o.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
