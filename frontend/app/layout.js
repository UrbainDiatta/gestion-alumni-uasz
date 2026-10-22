import "./globals.css";

export const metadata = {
  title: "Gestion des Alumni - UASZ",
  description:
    "Application de gestion des anciens diplomes du Departement Informatique de l'UASZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <div className="brand">Gestion des Alumni · UASZ</div>
          <nav>
            <a href="/">Accueil</a>
            <a href="/inscription">Inscription</a>
            <a href="/annuaire">Annuaire</a>
            <a href="/offres-emploi">Offres d&apos;emploi</a>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          Departement Informatique — Universite Assane Seck de Ziguinchor
        </footer>
      </body>
    </html>
  );
}
