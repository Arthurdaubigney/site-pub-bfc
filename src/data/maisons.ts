import type { PhotoSlug } from './photos';

export interface Maison {
  slug: string;
  nom: string;
  court: string;
  departements: string[];
  villes: string[]; // slugs de src/data/villes.ts
  zone: string;
  photo: PhotoSlug;
  photoSecondaire: PhotoSlug;
  accroche: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  terroir: { titre: string; texte: string };
  specialites: string[]; // slugs de src/data/specialites.ts
  numero: string;
}

export const maisons: Maison[] = [
  {
    slug: 'cote-d-or-grands-crus',
    nom: 'La Maison Côte-d’Or & Grands Crus',
    court: 'Côte-d’Or & Grands Crus',
    numero: 'I',
    departements: ['21'],
    villes: ['dijon', 'beaune', 'nuits-saint-georges'],
    zone: 'Dijon, Beaune, Nuits-Saint-Georges et toute la Côte-d’Or',
    photo: 'clos-de-vougeot',
    photoSecondaire: 'dijon-climats-unesco',
    accroche: 'Des hôtels particuliers dijonnais aux domaines viticoles de la Côte de Nuits et de la Côte de Beaune.',
    title: 'Antiquaire expert en Côte-d’Or : Dijon, Beaune, Nuits',
    description: 'Expertise et estimation gratuite d’antiquités, tableaux, argenterie et caves en Côte-d’Or. Déplacement à Dijon, Beaune et Nuits-Saint-Georges.',
    h1: 'Antiquaire et expert d’art en Côte-d’Or : Dijon, Beaune, Nuits-Saint-Georges',
    intro: [
      'La Côte-d’Or concentre un patrimoine mobilier d’une densité rare : hôtels particuliers de Dijon, maisons de négoce de Beaune, demeures de vignerons de la Côte de Nuits. Nos experts s’y déplacent pour estimer mobilier d’époque, tableaux anciens, argenterie, faïences et objets de collection, sans frais ni engagement.',
      'Cette maison accompagne aussi les successions et les partages : inventaire sur place, rapport écrit, estimation argumentée. Elle est le point d’entrée naturel pour une cave de garde, un grand cru ou une collection transmise de père en fils dans les Climats de Bourgogne.',
    ],
    terroir: {
      titre: 'Un territoire de négociants, de parlementaires et de vignerons',
      texte: 'Dijon, ancienne capitale des ducs, a laissé des hôtels particuliers meublés par des générations de magistrats. Plus au sud, les caves de Beaune et de Nuits-Saint-Georges ont longtemps abrité, à côté des bouteilles, de l’argenterie de table, des tapisseries et des meubles de famille.',
    },
    specialites: ['mobilier-d-epoque', 'grands-crus-de-garde', 'argenterie-orfevrerie', 'tableaux-anciens'],
  },
  {
    slug: 'saone-et-charolais',
    nom: 'La Maison Saône & Charolais',
    court: 'Saône & Charolais',
    numero: 'II',
    departements: ['71'],
    villes: ['macon', 'chalon-sur-saone', 'autun'],
    zone: 'Mâcon, Chalon-sur-Saône, Autun et toute la Saône-et-Loire',
    photo: 'autun-rue',
    photoSecondaire: 'macon-quai-lamartine',
    accroche: 'Du Mâconnais au Charolais, des bords de Saône aux remparts d’Autun.',
    title: 'Expert antiquités en Saône-et-Loire : Mâcon, Chalon',
    description: 'Estimation gratuite de mobilier, tableaux, argenterie et successions en Saône-et-Loire. Experts à Mâcon, Chalon-sur-Saône, Autun et Charolles.',
    h1: 'Expert en antiquités en Saône-et-Loire : Mâcon, Chalon-sur-Saône, Autun',
    intro: [
      'Entre vignobles du Mâconnais, bocage du Charolais et vieilles cités romaines, la Saône-et-Loire possède des intérieurs bourgeois et des maisons de maître longtemps restés dans les mêmes familles. Notre maison y expertise mobilier régional et d’époque, peintures, argenterie, faïences et objets de dévotion.',
      'Nous intervenons rapidement à Mâcon, Chalon-sur-Saône, Autun, Le Creusot, Paray-le-Monial et dans les villages alentour, pour une estimation à domicile, un inventaire de succession ou le rachat d’un lot complet.',
    ],
    terroir: {
      titre: 'Maisons de maître, abbayes et ports de la Saône',
      texte: 'Le commerce fluvial a enrichi Chalon et Mâcon dès le XVIIIe siècle ; les familles de négociants y ont accumulé mobilier d’acajou, pendules et faïences. À Autun et dans le Charolais, les demeures rurales conservent un mobilier régional massif en chêne et noyer.',
    },
    specialites: ['mobilier-d-epoque', 'faience-de-nevers-desvres', 'tableaux-anciens', 'objets-de-curiosite'],
  },
  {
    slug: 'yonne-et-nivernais',
    nom: 'La Maison Yonne & Nivernais',
    court: 'Yonne & Nivernais',
    numero: 'III',
    departements: ['89', '58'],
    villes: ['auxerre', 'sens', 'vezelay', 'nevers'],
    zone: 'Auxerre, Sens, Vézelay, Nevers et les départements de l’Yonne et de la Nièvre',
    photo: 'nevers-cathedrale',
    photoSecondaire: 'reliquaire-dore',
    accroche: 'Des rives de l’Yonne à la Loire nivernaise, terre de faïence et d’abbayes.',
    title: 'Antiquaire Yonne et Nièvre : Auxerre, Sens, Nevers',
    description: 'Expertise d’antiquités et de faïence de Nevers dans l’Yonne et la Nièvre. Estimation gratuite à Auxerre, Sens, Vézelay et Nevers, sans engagement.',
    h1: 'Antiquaire et expertise de faïence de Nevers : Auxerre, Sens, Vézelay, Nevers',
    intro: [
      'De Sens à Nevers, l’Yonne et la Nièvre réunissent une des plus belles traditions céramiques de France et un patrimoine religieux et bourgeois très riche. Notre maison y expertise faïences de Nevers, mobilier d’époque, orfèvrerie, objets d’art sacré et tableaux anciens.',
      'Elle est particulièrement attentive aux pièces de faïence de grand feu, aux services de table et aux objets de piété souvent conservés dans les demeures familiales et les presbytères, et accompagne les successions dans toute la Nièvre et le Sénonais.',
    ],
    terroir: {
      titre: 'Faïence de Nevers, abbayes et maisons de maître',
      texte: 'Nevers a produit dès le XVIe siècle une faïence de grand feu reconnaissable à son bleu persan et à ses décors polychromes. Vézelay, Auxerre et Sens ont laissé, autour de leurs cathédrales et abbayes, un mobilier d’art religieux et de nombreux intérieurs de notables.',
    },
    specialites: ['faience-de-nevers-desvres', 'objets-de-curiosite', 'argenterie-orfevrerie', 'tableaux-anciens'],
  },
  {
    slug: 'franche-comte-et-jura',
    nom: 'La Maison Franche-Comté & Jura',
    court: 'Franche-Comté & Jura',
    numero: 'IV',
    departements: ['25', '39', '70', '90'],
    villes: ['besancon', 'dole', 'belfort', 'lons-le-saunier'],
    zone: 'Besançon, Dole, Belfort, Lons-le-Saunier et les départements du Doubs, du Jura, de la Haute-Saône et du Territoire de Belfort',
    photo: 'besancon-citadelle',
    photoSecondaire: 'poligny-jura',
    accroche: 'Des forêts du Jura à la citadelle de Besançon, terre d’horlogerie et de mobilier rustique.',
    title: 'Expert horloges comtoises et antiquités à Besançon, Jura',
    description: 'Estimation gratuite d’horloges comtoises, mobilier et tableaux anciens en Franche-Comté : Besançon, Dole, Belfort, Lons-le-Saunier et le Jura.',
    h1: 'Expert en horloges comtoises et antiquités : Besançon, Dole, Belfort, Jura',
    intro: [
      'La Franche-Comté est la patrie de l’horloge comtoise et d’un mobilier rustique en bois de la forêt jurassienne. Notre maison y expertise horloges de parquet, mobilier régional, tableaux anciens, argenterie et objets d’art, du Haut-Doubs au Territoire de Belfort.',
      'Nous nous déplaçons à Besançon, Dole, Belfort, Lons-le-Saunier, Vesoul, Pontarlier et dans les fermes comtoises, pour estimer un mouvement, authentifier une caisse ou conseiller une famille lors d’une succession.',
    ],
    terroir: {
      titre: 'Horlogerie, forêts du Jura et fermes comtoises',
      texte: 'Dès le XVIIIe siècle, les horlogers du Haut-Doubs ont diffusé la comtoise dans toutes les campagnes. Bois de sapin, noyer et cerisier, balanciers en laiton repoussé : la région a produit un mobilier d’une identité très marquée, que nos experts savent dater et authentifier.',
    },
    specialites: ['horloges-comtoises', 'mobilier-d-epoque', 'tableaux-anciens', 'objets-de-curiosite'],
  },
];

export const maisonBySlug = (slug: string) => {
  const m = maisons.find((x) => x.slug === slug);
  if (!m) throw new Error(`Maison inconnue : ${slug}`);
  return m;
};
