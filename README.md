# Maison Vergy – site d'antiquaires et d'expertise d'art (Bourgogne-Franche-Comté)

Site statique multi-pages (Astro 5 + React pour le formulaire), optimisé SEO local.

## Démarrer

```bash
npm install
npm run dev          # http://localhost:4321
npm run build:check  # build + contrôle SEO (title, description, h1, alt, JSON-LD)
```

## À configurer avant mise en ligne

1. **Formulaire Tally** : copier `.env.example` en `.env` et renseigner `PUBLIC_TALLY_FORM_ID`. Tant qu'il est vide, `src/components/TallyForm.tsx` affiche un placeholder.
2. **Domaine** : `SITE_URL` (sitemap, canonical, JSON-LD) et `public/robots.txt`.
3. **Marque** : le nom « Maison Vergy » est provisoire (`src/data/site.ts`) ; vérifier sa disponibilité ou le remplacer.
4. **Mentions légales** : compléter éditeur, hébergeur (`src/pages/mentions-legales`).
5. **Photographies** : stand-ins libres de droits (Wikimedia Commons, crédits dans `/credits-photos/`) à remplacer par les photos du client dans `src/assets/photos/` (mêmes noms de fichiers) ; textes alt/title dans `src/data/photos.ts`.

## Structure

- `src/data/` : maisons, spécialités, villes, FAQ (le contenu des pages dynamiques)
- `src/pages/` : accueil, `/maisons/`, `/specialites/`, `/antiquaire/<ville>/`, `/zones-intervention/`, `/expertise-estimation-antiquites/`, `/rachat-succession-antiquites/`, `/a-propos/`, `/faq/`, `/contact/`
- `src/lib/schema.ts` : JSON-LD (AntiqueStore, ProfessionalService, LocalBusiness, Service, FAQPage, BreadcrumbList)
- `scripts/check-seo.mjs` : contrôle automatique du build
