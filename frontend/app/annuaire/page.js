"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export default function AnnuairePage() {
  const [alumni, setAlumni] = useState([]);
  const [promotion, setPromotion] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadAll() {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/alumni`);
      const data = await res.json();
      setAlumni(data);
    } catch (err) {
      setAlumni([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!promotion) {
      loadAll();
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/alumni/promotion/${promotion}`);
      const data = await res.json();
      setAlumni(data);
    } catch (err) {
      setAlumni([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <section className="card">
      <h1>Annuaire des alumni</h1>
      <p className="subtitle">
        En tant qu&apos;alumni, je souhaite rechercher un ancien par promotion afin
        de retrouver mes camarades.
      </p>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="number"
          placeholder="Filtrer par promotion (ex. 2022)"
          value={promotion}
          onChange={(e) => setPromotion(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>

      {loading && <p>Chargement...</p>}

      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Promotion</th>
          </tr>
        </thead>
        <tbody>
          {alumni.map((a) => (
            <tr key={a.id}>
              <td>{a.nom}</td>
              <td>{a.prenom}</td>
              <td>{a.email}</td>
              <td>{a.promotion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
