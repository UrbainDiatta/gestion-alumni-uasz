export default function HomePage() {
  return (
    <section className="card">
      <h1>Bienvenue</h1>
      <p>
        Cette application permet de gerer les anciens diplomes du Departement
        Informatique de l&apos;Universite Assane Seck de Ziguinchor : inscription
        des alumni, consultation de l&apos;annuaire par promotion, et diffusion
        des offres d&apos;emploi.
      </p>
      <div className="home-links">
        <a href="/inscription">S&apos;inscrire</a>
        <a href="/annuaire">Consulter l&apos;annuaire</a>
        <a href="/offres-emploi">Voir les offres d&apos;emploi</a>
      </div>
    </section>
  );
}
