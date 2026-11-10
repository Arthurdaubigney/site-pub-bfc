import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

/** Textes alternatifs et titres SEO rédigés pour le site (les titres Commons décrivent un autre lieu). */
const meta = {
  'chateau-chambre': ['Chambre d’apparat d’un château bourguignon avec lit à baldaquin, tentures lie-de-vin et lustre ancien', 'Intérieur de château en Bourgogne : mobilier d’époque et tentures'],
  'decor-peint-chateau': ['Décor peint et boiseries anciennes d’un salon de château, portrait ovale et vases en porcelaine', 'Boiseries peintes et objets d’art d’un château de Bourgogne'],
  'cote-de-beaune': ['Rangs de vignes de la Côte de Beaune au pied du coteau, en Côte-d’Or', 'Vignoble de la Côte de Beaune en Bourgogne'],
  'vignoble-bourgogne': ['Cabotte de vigneron en pierre sèche au milieu des vignes de Bourgogne', 'Cabotte et vignes des grands crus de Bourgogne'],
  'dijon-climats-unesco': ['Plaque en pierre dorée rappelant le classement des Climats du vignoble de Bourgogne à Dijon et Beaune', 'Climats du vignoble de Bourgogne, patrimoine mondial UNESCO'],
  'apothicairerie-ancienne': ['Table d’apothicairerie ancienne avec balances, mortier et pots en faïence', 'Objets de curiosité : instruments d’apothicaire anciens'],
  'faience-nevers-1': ['Grand plat en faïence de Nevers à décor bleu et jaune d’un personnage, bordure à lambrequins', 'Plat en faïence de Nevers ancienne'],
  'faience-nevers-2': ['Plat ovale en faïence de Nevers à décor bleu camaïeu de personnages dans un paysage', 'Faïence de Nevers à décor bleu : plat ancien'],
  'faience-nevers-vases': ['Paire de vases bouteilles en faïence de Nevers à décor bleu et blanc, vers 1700', 'Paire de vases en faïence de Nevers, XVIIe-XVIIIe siècle'],
  'faience-grand-feu': ['Bénitier en faïence polychrome de grand feu de Nevers, figure en pied', 'Faïence polychrome de grand feu de Nevers'],
  'horloges-comtoises': ['Cinq horloges comtoises anciennes à caisse rouge alignées, cadrans émaillés et balanciers', 'Collection d’horloges comtoises anciennes de Franche-Comté'],
  'horloge-comtoise-standuhr': ['Horloge comtoise de parquet du XIXe siècle à caisse en bois marqueté et cadran émaillé', 'Horloge comtoise ancienne en bois marqueté'],
  'horloge-comtoise-balancier': ['Détail du balancier en laiton repoussé d’une horloge comtoise ancienne', 'Balancier en laiton d’une horloge comtoise'],
  'argenterie-aiguiere': ['Aiguière en argent massif de style victorien à décor ciselé de volutes', 'Aiguière ancienne en argent massif ciselé'],
  'argenterie-chateau': ['Service d’argenterie ancienne : théières, plats et boîtes en argent présentés sur un chariot', 'Service d’argenterie et orfèvrerie ancienne'],
  'mobilier-exposition': ['Vitrine-buffet ancienne en bois devant une tenture à décor de service à thé', 'Buffet vitrine ancien en bois patiné'],
  'vitrine-ancienne': ['Bibliothèque vitrine en bois sombre exposant vases anciens et statuette de cheval', 'Vitrine en bois sombre et objets d’art anciens'],
  'commode-louis-xv-1': ['Commode tombeau d’époque Louis XV galbée en noyer, ornements en bronze doré', 'Commode tombeau Louis XV en noyer, XVIIIe siècle'],
  'commode-louis-xv-2': ['Commode d’époque Louis XV en bois fruitier à façade galbée et poignées de bronze', 'Commode Louis XV en bois fruitier'],
  'cabinet-curiosites': ['Cabinet de curiosités du XVIIe siècle en ébène, ouvert sur ses tiroirs, sur piétement tourné', 'Cabinet de curiosités en ébène du XVIIe siècle'],
  'cabinet-curiosites-2': ['Casiers de bois contenant une collection de coquillages rares, cabinet de naturaliste', 'Collection de coquillages d’un cabinet de naturaliste'],
  'porcelaine-sevres': ['Putti peints dans les nuages sur une porcelaine ancienne à fond blanc', 'Décor peint sur porcelaine ancienne'],
  'paysage-jura': ['Forêts et coteaux du Haut-Jura en automne, en Franche-Comté', 'Forêts du Jura en Franche-Comté'],
  'poligny-jura': ['Falaise calcaire et forêt dans le Jura près de Poligny', 'Falaise calcaire du Jura'],
  'besancon-citadelle': ['Citadelle de Besançon dominant les collines du Doubs, vue depuis le mont de Bregille', 'Citadelle de Besançon et vallée du Doubs'],
  'besancon-citadelle-2': ['Remparts et chemin de ronde de la citadelle de Besançon surplombant la vallée', 'Remparts de la citadelle de Besançon'],
  'dole-doubs': ['Le Doubs et les maisons de Dole, dans le Jura, au bord de l’eau', 'Bords du Doubs à Dole'],
  'dole-collegiale': ['Nef gothique de la collégiale de Dole ornée de tableaux anciens', 'Tableaux anciens dans la collégiale de Dole'],
  'lons-le-saunier': ['Place de la Liberté de Lons-le-Saunier, façades du XVIIIe siècle et bassins', 'Place de la Liberté à Lons-le-Saunier'],
  'auxerre-panorama': ['Panorama d’Auxerre sur l’Yonne avec la cathédrale Saint-Étienne et le port de plaisance', 'Auxerre, cathédrale et rives de l’Yonne'],
  'nevers-cathedrale': ['Intérieur gothique de la cathédrale de Nevers, chaire et horloge ancienne', 'Cathédrale Saint-Cyr-et-Sainte-Julitte de Nevers'],
  'reliquaire-dore': ['Reliquaire doré sous une voûte étoilée à Vézelay, orfèvrerie religieuse ancienne', 'Reliquaire doré à Vézelay'],
  'macon-hotel-dieu': ['Façade de l’Hôtel-Dieu de Mâcon, bâtiment classique du XVIIIe siècle en Saône-et-Loire', 'Hôtel-Dieu de Mâcon en Saône-et-Loire'],
  'chalon-port': ['Port de plaisance de Chalon-sur-Saône reflété dans la Saône', 'Port de plaisance de Chalon-sur-Saône'],
  'autun-rue': ['Rue piétonne d’Autun bordée de maisons anciennes en Saône-et-Loire', 'Rue ancienne d’Autun'],
  'autun-remparts': ['Remparts médiévaux et tour ronde d’Autun en pierre', 'Remparts d’Autun en Saône-et-Loire'],
  'belfort-lion': ['Lion de Belfort sculpté dans le grès rose au pied de la citadelle', 'Lion de Belfort, Territoire de Belfort'],
  'tableau-nature-morte-fyt': ['Nature morte flamande du XVIIe siècle à l’huile sur toile : lièvres, gibier à plume et drap de velours rouge', 'Nature morte ancienne, huile sur toile du XVIIe siècle'],
  'tableau-nature-morte-gibier': ['Nature morte au gibier : lièvre, canard et oiseaux sous un arbre, huile sur toile ancienne', 'Tableau ancien, nature morte au gibier'],
  'tableau-paysage-huile': ['Paysage lacustre romantique du XIXe siècle à l’huile sur toile, voilier et grands arbres', 'Paysage ancien à l’huile sur toile'],
} as const;

export type PhotoSlug = keyof typeof meta;

export function photo(slug: PhotoSlug) {
  const file = files[`/src/assets/photos/${slug}.jpg`];
  if (!file) throw new Error(`Photo introuvable : ${slug}`);
  const [alt, title] = meta[slug];
  return { src: file.default, alt, title, slug };
}


export const photoSlugs = Object.keys(meta) as PhotoSlug[];
