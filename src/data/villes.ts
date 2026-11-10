import type { PhotoSlug } from './photos';

export interface Ville {
  slug: string;
  nom: string;
  departement: string; // code
  maison: string; // slug
  photo: PhotoSlug;
  alentours: string[];
  accroche: string;
  patrimoine: string;
  objets: string[];
  conseil: string;
}

export const villes: Ville[] = [
  {
    slug: 'dijon', nom: 'Dijon', departement: '21', maison: 'cote-d-or-grands-crus', photo: 'dijon-climats-unesco',
    alentours: ['Fontaine-lès-Dijon', 'Talant', 'Chenôve', 'Plombières-lès-Dijon', 'Is-sur-Tille'],
    accroche: 'Hôtels particuliers, appartements bourgeois et maisons de la banlieue résidentielle dijonnaise.',
    patrimoine: 'Ancienne capitale des ducs de Bourgogne, Dijon a conservé de nombreux hôtels particuliers et appartements de magistrats. On y trouve du mobilier Louis XV et Louis XVI, des pendules, des tableaux de l’école bourguignonne et de l’argenterie de table.',
    objets: ['mobilier de magistrat', 'pendules de cheminée', 'tableaux anciens', 'argenterie', 'cartes et gravures'],
    conseil: 'Pour un appartement dijonnais, un inventaire pièce par pièce évite d’oublier les objets rangés au grenier ou à la cave.',
  },
  {
    slug: 'beaune', nom: 'Beaune', departement: '21', maison: 'cote-d-or-grands-crus', photo: 'vignoble-bourgogne',
    alentours: ['Savigny-lès-Beaune', 'Pommard', 'Meursault', 'Aloxe-Corton', 'Chorey-lès-Beaune'],
    accroche: 'Maisons de négoce, domaines viticoles et caves de la Côte de Beaune.',
    patrimoine: 'Capitale des vins de Bourgogne, Beaune abrite des maisons de négoce où se mêlent caves de garde, argenterie de table et mobilier familial. Les domaines viticoles alentour conservent aussi tapisseries, faïences et peintures.',
    objets: ['caves et grands crus', 'argenterie de table', 'faïences', 'mobilier de négoce', 'tapisseries'],
    conseil: 'Dans une maison de vigneron, pensez à inclure les dépendances, caves voûtées et pressoirs : on y trouve parfois des pièces rares.',
  },
  {
    slug: 'nuits-saint-georges', nom: 'Nuits-Saint-Georges', departement: '21', maison: 'cote-d-or-grands-crus', photo: 'cote-de-beaune',
    alentours: ['Vosne-Romanée', 'Gevrey-Chambertin', 'Vougeot', 'Morey-Saint-Denis', 'Fixin'],
    accroche: 'Domaines et caves de la Côte de Nuits, des Hautes-Côtes aux grands crus.',
    patrimoine: 'Au cœur de la Côte de Nuits, les maisons de vignerons transmettent, en plus de leurs bouteilles, du mobilier rustique et bourgeois, des pièces d’argenterie et de nombreux objets du quotidien rural.',
    objets: ['caves et vieux millésimes', 'mobilier régional', 'cuivres et étains', 'faïences', 'tableaux de famille'],
    conseil: 'Une cave de succession doit être inventoriée avant tout déplacement des bouteilles : la conservation fait la valeur.',
  },
  {
    slug: 'macon', nom: 'Mâcon', departement: '71', maison: 'saone-et-charolais', photo: 'macon-hotel-dieu',
    alentours: ['Cluny', 'Tournus', 'Charnay-lès-Mâcon', 'Saint-Gengoux-le-National', 'La Chapelle-de-Guinchay'],
    accroche: 'Demeures du Mâconnais, quais de Saône et maisons de maître alentour.',
    patrimoine: 'Au bord de la Saône, Mâcon a développé un commerce actif au XVIIIe siècle. Les demeures bourgeoises renferment des commodes, pendules, faïences et bibliothèques ; dans le Mâconnais, on trouve aussi un mobilier rustique en chêne et noyer.',
    objets: ['commodes et secrétaires', 'faïences', 'tableaux anciens', 'argenterie', 'objets d’art religieux'],
    conseil: 'Nous nous déplaçons dans tout le Mâconnais et jusqu’à Cluny ou Tournus pour une estimation à domicile.',
  },
  {
    slug: 'chalon-sur-saone', nom: 'Chalon-sur-Saône', departement: '71', maison: 'saone-et-charolais', photo: 'chalon-port',
    alentours: ['Givry', 'Mercurey', 'Saint-Rémy', 'Chagny', 'Verdun-sur-le-Doubs'],
    accroche: 'Maisons de négociants, villas de la Côte chalonnaise et demeures de la vallée de la Saône.',
    patrimoine: 'Ancien port fluvial prospère, Chalon-sur-Saône possède de nombreux intérieurs de négociants et d’industriels. Les villages viticoles de la Côte chalonnaise ajoutent des maisons de vignerons et des demeures de campagne.',
    objets: ['mobilier d’acajou', 'pendules et bronzes', 'faïences', 'caves de la Côte chalonnaise', 'photographies anciennes'],
    conseil: 'À Chalon, pensez à signaler les objets liés à la navigation ou à l’industrie locale : ils intéressent certains collectionneurs.',
  },
  {
    slug: 'autun', nom: 'Autun', departement: '71', maison: 'saone-et-charolais', photo: 'autun-remparts',
    alentours: ['Le Creusot', 'Épinac', 'Couches', 'Saint-Léger-sur-Dheune', 'Montceau-les-Mines'],
    accroche: 'Maisons d’Autun, du Morvan et du bassin minier, jusqu’aux abords du Charolais.',
    patrimoine: 'Cité romaine devenue ville épiscopale, Autun a gardé des fonds d’art religieux, des hôtels particuliers et des maisons de campagne dans le Morvan. Le mobilier massif en chêne et les objets de dévotion y sont fréquents.',
    objets: ['objets d’art religieux', 'mobilier de chêne et de noyer', 'faïences', 'tableaux religieux', 'pendules'],
    conseil: 'Pour les objets religieux, apportez tout document de provenance : paroisse, don, legs de famille.',
  },
  {
    slug: 'auxerre', nom: 'Auxerre', departement: '89', maison: 'yonne-et-nivernais', photo: 'auxerre-panorama',
    alentours: ['Chablis', 'Joigny', 'Avallon', 'Saint-Bris-le-Vineux', 'Appoigny'],
    accroche: 'Maisons de la vallée de l’Yonne, domaines de Chablis et hôtels particuliers du centre ancien.',
    patrimoine: 'Auxerre, au bord de l’Yonne, a des quartiers anciens riches en intérieurs bourgeois. Le vignoble de Chablis et de l’Auxerrois conserve des maisons de vignerons, des caves et du mobilier régional.',
    objets: ['mobilier de la vallée de l’Yonne', 'faïences', 'tableaux anciens', 'caves de Chablis', 'argenterie'],
    conseil: 'Pour une estimation dans l’Auxerrois, envoyez dès la première prise de contact quelques photographies : cela accélère le rendez-vous.',
  },
  {
    slug: 'sens', nom: 'Sens', departement: '89', maison: 'yonne-et-nivernais', photo: 'decor-peint-chateau',
    alentours: ['Villeneuve-sur-Yonne', 'Joigny', 'Pont-sur-Yonne', 'Saint-Clément', 'Villeneuve-l’Archevêque'],
    accroche: 'Le Sénonais : demeures du centre de Sens, villages de l’Yonne et maisons de campagne.',
    patrimoine: 'Siège d’un archevêché, Sens a transmis un patrimoine d’art religieux et de nombreux intérieurs de notables. Le Sénonais renferme du mobilier classique, des objets d’orfèvrerie et des peintures de qualité.',
    objets: ['orfèvrerie religieuse', 'mobilier classique', 'peintures', 'faïences', 'livres anciens'],
    conseil: 'Pour des objets de culte ou de legs, nous vous orientons sur les règles de cession applicables.',
  },
  {
    slug: 'vezelay', nom: 'Vézelay', departement: '89', maison: 'yonne-et-nivernais', photo: 'reliquaire-dore',
    alentours: ['Avallon', 'Clamecy', 'Saint-Père', 'Asquins', 'Montréal'],
    accroche: 'Maisons de Vézelay, du Morvan et du Vézelien, loin des grandes routes.',
    patrimoine: 'Village de pèlerinage au pied de la basilique, Vézelay et son pays offrent un patrimoine d’objets religieux, de mobilier rural et de maisons d’artistes et d’écrivains.',
    objets: ['objets religieux', 'mobilier rural', 'faïences', 'tableaux et dessins', 'livres anciens'],
    conseil: 'Dans le Morvan et le Vézelien, nous organisons des tournées pour estimer plusieurs maisons dans la même journée.',
  },
  {
    slug: 'nevers', nom: 'Nevers', departement: '58', maison: 'yonne-et-nivernais', photo: 'nevers-cathedrale',
    alentours: ['Decize', 'La Charité-sur-Loire', 'Cosne-Cours-sur-Loire', 'Imphy', 'Clamecy'],
    accroche: 'Berceau de la faïence de grand feu, en Nièvre et sur les bords de Loire.',
    patrimoine: 'Nevers est connue dans le monde entier pour sa faïence. Les maisons de la ville et de la Nièvre conservent plats, bouquetières, assiettes révolutionnaires et services complets, ainsi que du mobilier nivernais.',
    objets: ['faïence de Nevers', 'plats de grand feu', 'assiettes patriotiques', 'mobilier nivernais', 'orfèvrerie'],
    conseil: 'Pour une collection de faïences, ne séparez pas les pièces avant l’estimation : l’ensemble peut avoir plus de valeur.',
  },
  {
    slug: 'besancon', nom: 'Besançon', departement: '25', maison: 'franche-comte-et-jura', photo: 'besancon-citadelle-2',
    alentours: ['Ornans', 'Pontarlier', 'Baume-les-Dames', 'Morteau', 'Saint-Vit'],
    accroche: 'Hôtels de la boucle du Doubs, maisons horlogères et fermes du Haut-Doubs.',
    patrimoine: 'Capitale de la Franche-Comté et de l’horlogerie française, Besançon et le Haut-Doubs possèdent d’importantes collections privées d’horloges, de pendules et de mobilier comtois. Les hôtels particuliers de la boucle du Doubs recèlent peintures, bronzes et argenterie.',
    objets: ['horloges comtoises', 'pendules et montres', 'mobilier comtois', 'tableaux anciens', 'argenterie'],
    conseil: 'Pour une horloge comtoise, indiquez si elle fonctionne encore et si la caisse est d’origine.',
  },
  {
    slug: 'dole', nom: 'Dole', departement: '39', maison: 'franche-comte-et-jura', photo: 'dole-collegiale',
    alentours: ['Poligny', 'Arbois', 'Salins-les-Bains', 'Mont-sous-Vaudrey', 'Auxonne'],
    accroche: 'Hôtels dolois, maisons vigneronnes d’Arbois et du vignoble jurassien.',
    patrimoine: 'Ancienne capitale de la Franche-Comté, Dole offre un patrimoine d’hôtels particuliers, d’églises et de maisons de notables. Le vignoble jurassien (Arbois, Poligny) ajoute mobilier vigneron et peintures de campagne.',
    objets: ['mobilier de notables', 'tableaux religieux', 'horloges', 'faïences', 'argenterie'],
    conseil: 'Dans le vignoble jurassien, pensez aux caves et aux dépendances : elles recèlent souvent des meubles oubliés.',
  },
  {
    slug: 'belfort', nom: 'Belfort', departement: '90', maison: 'franche-comte-et-jura', photo: 'belfort-lion',
    alentours: ['Montbéliard', 'Delle', 'Giromagny', 'Héricourt', 'Sochaux'],
    accroche: 'Territoire de Belfort et pays de Montbéliard : maisons bourgeoises et fermes comtoises.',
    patrimoine: 'Place forte au pied de la citadelle, Belfort et son territoire réunissent des maisons de commerçants et d’industriels, des fermes comtoises et des collections d’objets liés à l’histoire militaire et horlogère de la région.',
    objets: ['horloges et pendules', 'mobilier comtois', 'tableaux', 'objets militaires anciens', 'argenterie'],
    conseil: 'Pour le Territoire de Belfort, nous planifions les rendez-vous en tournée avec Montbéliard et le Haut-Doubs.',
  },
  {
    slug: 'lons-le-saunier', nom: 'Lons-le-Saunier', departement: '39', maison: 'franche-comte-et-jura', photo: 'lons-le-saunier',
    alentours: ['Champagnole', 'Saint-Claude', 'Orgelet', 'Clairvaux-les-Lacs', 'Arbois'],
    accroche: 'Maisons du Revermont, forêts du Jura et fermes comtoises.',
    patrimoine: 'Préfecture du Jura, Lons-le-Saunier possède des maisons bourgeoises du XVIIIe siècle et un arrière-pays de fermes comtoises. Le mobilier de la forêt jurassienne et les horloges comtoises y sont particulièrement fréquents.',
    objets: ['horloges comtoises', 'mobilier jurassien', 'cuivres et étains', 'tableaux', 'faïences'],
    conseil: 'Pour une ferme isolée du Haut-Jura, un premier échange de photographies nous permet de préparer le déplacement.',
  },
];

export const villeBySlug = (slug: string) => {
  const v = villes.find((x) => x.slug === slug);
  if (!v) throw new Error(`Ville inconnue : ${slug}`);
  return v;
};
