/**
 * Configuration centrale du site.
 * Nom de marque provisoire : à remplacer en une seule ligne (et vérifier sa disponibilité).
 * Aucune coordonnée (adresse, téléphone) n'est inventée : le contact passe par le formulaire Tally.
 */
export const site = {
  name: 'Maison Vergy',
  legalName: 'Maison Vergy – Antiquaires & Expertise d’Art',
  tagline: 'Antiquaires & expertise d’art en Bourgogne-Franche-Comté',
  url: (import.meta.env.SITE_URL as string | undefined) ?? 'https://www.maison-vergy.example',
  locale: 'fr-FR',
  tallyFormId: (import.meta.env.PUBLIC_TALLY_FORM_ID as string | undefined) ?? '',
  contactPath: '/contact/',
  estimationAnchor: '/contact/#estimation',
};

export const departements = [
  { code: '21', nom: 'Côte-d’Or', prefecture: 'Dijon' },
  { code: '25', nom: 'Doubs', prefecture: 'Besançon' },
  { code: '39', nom: 'Jura', prefecture: 'Lons-le-Saunier' },
  { code: '58', nom: 'Nièvre', prefecture: 'Nevers' },
  { code: '70', nom: 'Haute-Saône', prefecture: 'Vesoul' },
  { code: '71', nom: 'Saône-et-Loire', prefecture: 'Mâcon' },
  { code: '89', nom: 'Yonne', prefecture: 'Auxerre' },
  { code: '90', nom: 'Territoire de Belfort', prefecture: 'Belfort' },
] as const;

export const nav = [
  { label: 'Expertise', href: '/expertise-estimation-antiquites/' },
  { label: 'Spécialités', href: '/specialites/' },
  { label: 'Zones d’intervention', href: '/zones-intervention/' },
  { label: 'Successions', href: '/rachat-succession-antiquites/' },
];
