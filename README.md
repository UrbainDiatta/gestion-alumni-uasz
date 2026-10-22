# Gestion des Alumni — Departement Informatique UASZ

Application de gestion des anciens diplomes du Departement Informatique de
l'Universite Assane Seck de Ziguinchor (UASZ).

## Contenu du projet

- `backend/` — API Spring Boot (Java 17, base H2 en memoire, aucune installation de base de donnees requise)
- `frontend/` — Interface Next.js (React)

## Lancer le backend

```
cd backend
mvn spring-boot:run
```

L'API est disponible sur http://localhost:8080/api

## Lancer le frontend

```
cd frontend
npm install
npm run dev
```

L'application est disponible sur http://localhost:3000

## Fonctionnalites prevues

- Inscription d'un alumni
- Annuaire des alumni avec recherche par promotion
- Offres d'emploi
