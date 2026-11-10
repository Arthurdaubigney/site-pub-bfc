import type { PhotoSlug } from './photos';

export interface FaqItem { q: string; a: string }

export interface Specialite {
  slug: string;
  nom: string;
  court: string;
  photo: PhotoSlug;
  galerie: PhotoSlug[];
  h1: string;
  title: string;
  description: string;
  accroche: string;
  intro: string[];
  recherche: { titre: string; texte: string }[];
  conseil: string;
  mots: string[]; // champ lexical affiché sous forme de liste
  faq: FaqItem[];
  voisines: string[];
}

export const specialites: Specialite[] = [
  {
    slug: 'mobilier-d-epoque',
    nom: 'Mobilier d’époque',
    court: 'Mobilier d’époque',
    photo: 'commode-louis-xv-1',
    galerie: ['commode-louis-xv-2', 'fauteuil-a-la-reine', 'bureau-boulle'],
    h1: 'Estimation de mobilier d’époque et de meubles anciens en Bourgogne-Franche-Comté',
    title: 'Estimation mobilier d’époque et meubles anciens | Bourgogne',
    description: 'Commode Louis XV, buffet comtois, bureau de magistrat : estimation gratuite de mobilier ancien en Bourgogne-Franche-Comté, à domicile et sans engagement.',
    accroche: 'Commodes, bureaux, buffets, armoires, sièges : nous distinguons l’époque, l’ébénisterie et le style des copies.',
    intro: [
      'Un meuble d’époque se reconnaît à ses assemblages, à ses bois, à la patine laissée par les siècles et à la qualité de ses bronzes. Nos experts examinent chaque pièce sur place : mobilier Louis XIV, Régence, Louis XV, Louis XVI, Directoire, Empire, mais aussi mobilier régional bourguignon et comtois en chêne, noyer et bois fruitiers.',
      'Un même modèle peut valoir dix fois plus ou dix fois moins selon son état de conservation, sa provenance et d’éventuelles restaurations. Notre estimation est écrite, argumentée et indépendante de toute intention de rachat.',
    ],
    recherche: [
      { titre: 'Ébénisterie et estampilles', texte: 'Signatures d’ébénistes, estampilles de la jurande, marques de maîtrise : elles permettent de dater et d’attribuer un meuble.' },
      { titre: 'Assemblages et patine', texte: 'Queues-d’aronde, chevilles, traces d’outils et usure naturelle : ce que l’œil exercé lit en quelques minutes.' },
      { titre: 'Bronzes et marqueterie', texte: 'Bronze doré au mercure, placage, marqueterie de fleurs ou de bois de bout : autant d’indices de qualité.' },
      { titre: 'Mobilier régional', texte: 'Buffets-vaisseliers, bonnetières, pétrins et armoires de mariage : la valeur d’une pièce paysanne repose sur son état d’origine.' },
    ],
    conseil: 'Ne cirez, ne décapez et ne faites réparer aucun meuble avant l’estimation : une restauration maladroite peut diviser sa valeur.',
    mots: ['commode Louis XV', 'secrétaire à abattant', 'bureau plat', 'buffet-vaisselier', 'armoire comtoise', 'fauteuil à la reine', 'console dorée', 'table de milieu'],
    faq: [
      { q: 'Comment savoir si mon meuble est vraiment d’époque ?', a: 'On examine les assemblages, les traces d’outils, les bois, les bronzes et la patine. Les copies du XIXe siècle sont fréquentes et ont leur propre valeur ; l’expert précise toujours l’époque réelle du meuble.' },
      { q: 'Faut-il restaurer un meuble ancien avant de le vendre ?', a: 'Presque jamais. Une restauration faite sans conseil peut altérer la patine et réduire la valeur. Mieux vaut demander d’abord une estimation.' },
      { q: 'Estimez-vous aussi le mobilier de style et le mobilier régional ?', a: 'Oui. Nous estimons le mobilier d’époque, le mobilier de style du XIXe siècle et le mobilier régional de Bourgogne et de Franche-Comté.' },
    ],
    voisines: ['argenterie-orfevrerie', 'tableaux-anciens', 'objets-de-curiosite'],
  },
  {
    slug: 'argenterie-orfevrerie',
    nom: 'Argenterie & orfèvrerie',
    court: 'Argenterie & orfèvrerie',
    photo: 'argenterie-aiguiere',
    galerie: ['argenterie-chateau'],
    h1: 'Estimation d’argenterie ancienne et d’orfèvrerie en Bourgogne-Franche-Comté',
    title: 'Estimation argenterie ancienne et orfèvrerie | Bourgogne',
    description: 'Estimation gratuite d’argenterie, ménagères, aiguières et orfèvrerie ancienne en Bourgogne-Franche-Comté. Poinçons expertisés, rapport écrit, sans engagement.',
    accroche: 'Ménagères, théières, aiguières, couverts : poinçons lus, poids pesé, valeur d’art et valeur métal distinguées.',
    intro: [
      'L’argenterie d’une famille se transmet souvent sans que l’on en connaisse la valeur. Une pièce en argent massif d’un orfèvre réputé peut valoir bien plus que son poids de métal ; une pièce en métal argenté, bien plus modestement.',
      'Nos experts lisent les poinçons de maître, de titre et de garantie, vérifient le poids, identifient l’orfèvre et la période, et remettent un rapport distinguant valeur d’art et valeur de fonte.',
    ],
    recherche: [
      { titre: 'Poinçons et orfèvres', texte: 'Poinçon de maître, de titre et de garantie : ils permettent d’identifier l’atelier et d’authentifier la pièce.' },
      { titre: 'Argent massif ou argenté', texte: 'La distinction change tout : titre, usure, cuivre apparent, plaqué ou doublé.' },
      { titre: 'Service complet', texte: 'Une ménagère complète et d’origine vaut plus que la somme de ses pièces dépareillées.' },
      { titre: 'Orfèvrerie religieuse', texte: 'Calices, ciboires, reliquaires : un chapitre à part, soumis à des règles de transmission précises.' },
    ],
    conseil: 'Ne nettoyez pas vos pièces avec un produit abrasif : la patine d’une argenterie ancienne participe à sa valeur.',
    mots: ['ménagère en argent', 'poinçon de maître', 'argent massif', 'aiguière', 'théière', 'plat d’orfèvre', 'métal argenté', 'couverts Minerve'],
    faq: [
      { q: 'Comment reconnaître de l’argent massif ?', a: 'Un poinçon de titre (tête de Minerve pour l’argent 1er titre) en est le meilleur signe. Un expert vérifie aussi le poids, l’usure et la méthode de fabrication.' },
      { q: 'Mon argenterie est-elle plus précieuse que son poids ?', a: 'Parfois. Les pièces d’orfèvres reconnus ou de belle époque ont une valeur d’art supérieure à la valeur de fonte, ce que nous précisons dans notre rapport.' },
      { q: 'Estimez-vous les services dépareillés ?', a: 'Oui. Nous estimons aussi bien une ménagère complète que quelques pièces isolées.' },
    ],
    voisines: ['mobilier-d-epoque', 'objets-de-curiosite', 'faience-de-nevers-desvres'],
  },
  {
    slug: 'tableaux-anciens',
    nom: 'Tableaux anciens',
    court: 'Tableaux anciens',
    photo: 'tableau-nature-morte-fyt',
    galerie: ['tableau-paysage-huile', 'tableau-nature-morte-gibier'],
    h1: 'Expertise de tableaux anciens, peintures et dessins en Bourgogne-Franche-Comté',
    title: 'Expertise tableau ancien et peinture | Bourgogne-Franche-Comté',
    description: 'Estimation gratuite de tableaux anciens, huiles sur toile, portraits et dessins en Bourgogne-Franche-Comté. Attribution, état, cadre et cote argumentés.',
    accroche: 'Portraits, paysages, natures mortes, peintures religieuses : attribution, état de conservation, cote.',
    intro: [
      'Un tableau accroché depuis des générations dans une maison bourguignonne ou comtoise peut cacher une attribution inattendue. Nos experts examinent le support, la touche, les craquelures, les restaurations et le cadre pour proposer une attribution prudente et une estimation de marché.',
      'Peintures religieuses, portraits de notables, paysages du XIXe siècle, écoles françaises, flamandes et italiennes : toutes les périodes sont examinées. Quand une pièce mérite une recherche approfondie, nous vous orientons vers les bons spécialistes et laboratoires.',
    ],
    recherche: [
      { titre: 'Support et châssis', texte: 'Toile, bois ou cuivre ; châssis d’origine ou rentoilage : première lecture de l’âge de l’œuvre.' },
      { titre: 'Touche et signature', texte: 'Attribution à un artiste, à son atelier, à son entourage ou à son école, avec prudence et mention explicite.' },
      { titre: 'État de conservation', texte: 'Repeints, soulèvements, vernis jauni : un diagnostic clair avant toute restauration.' },
      { titre: 'Cadre et provenance', texte: 'Un cadre d’époque ou une provenance documentée ajoutent à la valeur d’une peinture.' },
    ],
    conseil: 'Ne frottez jamais un tableau et ne le déplacez pas sans protection : photographiez-le face et revers, et envoyez-nous les images.',
    mots: ['huile sur toile', 'portrait ancien', 'paysage du XIXe siècle', 'nature morte', 'peinture religieuse', 'dessin ancien', 'cadre doré', 'attribution'],
    faq: [
      { q: 'Peut-on estimer un tableau à partir de photographies ?', a: 'Oui, pour une première orientation : photographie de face, du revers, de la signature et des détails. Une expertise sur place reste nécessaire pour confirmer une attribution.' },
      { q: 'Que veut dire « attribué à » ou « école de » ?', a: '« Attribué à » signale une œuvre probablement de l’artiste, sans certitude. « École de » désigne une œuvre produite dans le cercle ou dans la manière d’un maître.' },
      { q: 'Faut-il nettoyer un tableau avant l’estimation ?', a: 'Non. Un nettoyage non professionnel peut emporter des couches de peinture et de vernis.' },
    ],
    voisines: ['mobilier-d-epoque', 'objets-de-curiosite', 'argenterie-orfevrerie'],
  },
  {
    slug: 'faience-de-nevers-desvres',
    nom: 'Faïence de Nevers & Desvres',
    court: 'Faïence de Nevers & Desvres',
    photo: 'faience-nevers-1',
    galerie: ['faience-nevers-2', 'faience-nevers-vases', 'faience-grand-feu', 'assiette-faience-revolutionnaire'],
    h1: 'Expertise de faïence de Nevers, de Desvres et de faïences anciennes',
    title: 'Expert faïence de Nevers et Desvres | Estimation gratuite',
    description: 'Estimation de faïence de Nevers, faïence de Desvres, plats et vases de grand feu. Expert en céramique ancienne en Bourgogne-Franche-Comté, sans engagement.',
    accroche: 'Plats, bouquetières, bénitiers, services de table : de la faïence de grand feu aux décors polychromes.',
    intro: [
      'La faïence de Nevers, née au XVIe siècle sous l’influence des maîtres italiens, est célèbre pour son bleu de Nevers, son bleu persan et ses scènes polychromes. Celle de Desvres, dans le Pas-de-Calais, est elle aussi très recherchée, surtout pour ses décors d’inspiration populaire.',
      'Nos experts datent chaque pièce, identifient la manufacture, repèrent les fêlures, les restaurations et les repeints, puis proposent une estimation qui tient compte de la rareté du décor et de l’état de conservation.',
    ],
    recherche: [
      { titre: 'Bleu persan et décors polychromes', texte: 'Le bleu dominant, les jaunes et les verts permettent de situer la pièce dans l’histoire de la production nivernaise.' },
      { titre: 'Pâte, émail et revers', texte: 'L’aspect de la terre, la nature de l’émail et la marque au revers confirment l’origine.' },
      { titre: 'Fêlures et restaurations', texte: 'Un éclat restauré ne pèse pas autant qu’un fond cassé ; nous mesurons l’écart avec précision.' },
      { titre: 'Faïence de Desvres', texte: 'Marques, décors au petit feu et formes caractéristiques : un autre chapitre de la faïence française.' },
    ],
    conseil: 'Manipulez toujours une faïence ancienne à deux mains et ne la passez jamais au lave-vaisselle.',
    mots: ['faïence de Nevers', 'bleu persan', 'faïence de grand feu', 'faïence de Desvres', 'plat à décor polychrome', 'bouquetière', 'bénitier', 'assiettes patriotiques'],
    faq: [
      { q: 'Comment reconnaître une faïence de Nevers ancienne ?', a: 'Par son décor bleu ou polychrome, son émail épais, ses formes caractéristiques et les marques ou traces visibles au revers. L’examen en main reste nécessaire pour confirmer l’époque.' },
      { q: 'La faïence de Desvres a-t-elle de la valeur ?', a: 'Oui, notamment les pièces anciennes aux décors recherchés ou signées de manufactures identifiées. L’état et le décor font la valeur.' },
      { q: 'Une fêlure enlève-t-elle toute valeur ?', a: 'Non, mais elle la réduit. Une pièce rare restaurée proprement peut rester très recherchée.' },
    ],
    voisines: ['objets-de-curiosite', 'argenterie-orfevrerie', 'mobilier-d-epoque'],
  },
  {
    slug: 'horloges-comtoises',
    nom: 'Horloges comtoises de collection',
    court: 'Horloges comtoises',
    photo: 'horloges-comtoises',
    galerie: ['horloge-comtoise-standuhr', 'horloge-comtoise-balancier'],
    h1: 'Expert en horloges comtoises anciennes et pendules de collection en Franche-Comté',
    title: 'Expertise horloge comtoise ancienne | Franche-Comté, Jura',
    description: 'Estimation gratuite d’horloges comtoises et de pendules de collection en Franche-Comté : mouvement, cadran émaillé, balancier, caisse. Expertise à domicile.',
    accroche: 'Mouvement, cadran émaillé, balancier, caisse : ce qui fait la valeur d’une comtoise de collection.',
    intro: [
      'Née dans le Haut-Doubs au XVIIIe siècle, l’horloge comtoise (ou morbier) équipe encore de nombreuses maisons de Franche-Comté. Sa valeur dépend du mouvement, de la richesse du cadran et du balancier, de l’état de la caisse et de sa cohérence d’origine.',
      'Nos experts vérifient que le mouvement correspond à la caisse, identifient l’atelier, repèrent les remplacements et les mariages, et estiment les pièces en état de marche comme celles à restaurer.',
    ],
    recherche: [
      { titre: 'Mouvement et sonnerie', texte: 'Mécanisme à poids, sonnerie à râteau, petits ou grands mouvements : le cœur de la valeur.' },
      { titre: 'Cadran émaillé', texte: 'Cadran en émail, laiton repoussé ou cuivre : décor, fêlures et signature du fabricant.' },
      { titre: 'Balancier et caisse', texte: 'Balancier de laiton, caisse en sapin, noyer ou cerisier, marqueterie, peinture d’origine.' },
      { titre: 'Mariages et remplacements', texte: 'Une caisse et un mouvement qui ne vont pas ensemble diminuent la valeur ; nous le disons clairement.' },
    ],
    conseil: 'Ne remontez pas une horloge arrêtée depuis longtemps et ne forcez pas le balancier : faites-la d’abord examiner.',
    mots: ['horloge comtoise', 'morbier', 'cadran émaillé', 'balancier en laiton', 'mouvement à poids', 'pendule de collection', 'comtoise de parquet', 'horlogerie du Doubs'],
    faq: [
      { q: 'Combien vaut une horloge comtoise ancienne ?', a: 'La fourchette est large : elle dépend du mouvement, du cadran, de la caisse et de l’état. Seul un examen sur place permet une estimation fiable.' },
      { q: 'Une comtoise qui ne fonctionne plus a-t-elle de la valeur ?', a: 'Oui. Une horloge à restaurer reste estimable, et sa valeur de collection dépend surtout de l’authenticité de ses éléments.' },
      { q: 'Intervenez-vous partout en Franche-Comté ?', a: 'Oui, dans le Doubs, le Jura, la Haute-Saône et le Territoire de Belfort, ainsi que dans les départements limitrophes.' },
    ],
    voisines: ['mobilier-d-epoque', 'objets-de-curiosite', 'argenterie-orfevrerie'],
  },
  {
    slug: 'grands-crus-de-garde',
    nom: 'Grands crus de garde & caves',
    court: 'Grands crus de garde',
    photo: 'cuves-pressoir-vougeot',
    galerie: ['vignoble-bourgogne', 'cote-de-beaune'],
    h1: 'Expertise de caves, grands crus de garde et vieux millésimes en Bourgogne',
    title: 'Estimation cave et grands crus de garde | Bourgogne',
    description: 'Estimation gratuite de caves, vins de Bourgogne et grands crus de garde : inventaire des bouteilles, état, conservation et valeur de marché, sans engagement.',
    accroche: 'Inventaire, état et conservation de caves bourguignonnes, de la bouteille isolée à la cave complète.',
    intro: [
      'Une cave de succession est souvent un trésor discret : bouteilles de Côte de Nuits, de Côte de Beaune, de Chablis ou du Mâconnais conservées depuis des décennies. Nos experts dressent l’inventaire des bouteilles, apprécient le niveau, l’étiquette, la capsule et les conditions de conservation.',
      'L’estimation prend en compte le millésime, le domaine, le climat et la traçabilité. Nous vous aidons aussi à choisir la meilleure voie de transmission ou de cession dans le respect de la réglementation.',
    ],
    recherche: [
      { titre: 'Niveau, bouchon et étiquette', texte: 'Le niveau dans le goulot, l’état du bouchon et de l’étiquette sont les premiers signes de bonne conservation.' },
      { titre: 'Millésime et domaine', texte: 'Un millésime recherché d’un domaine réputé peut multiplier la valeur d’une bouteille.' },
      { titre: 'Conditions de conservation', texte: 'Température stable, absence de lumière, couchage : des critères décisifs pour le marché.' },
      { titre: 'Caisses d’origine', texte: 'Une caisse d’origine fermée est un atout, tout comme les documents d’achat.' },
    ],
    conseil: 'Ne déplacez pas vos bouteilles sans nécessité et ne les remuez pas : un vin de garde déteste les chocs et les écarts de température.',
    mots: ['grand cru de Bourgogne', 'vin de garde', 'vieux millésimes', 'cave de succession', 'domaine viticole', 'Côte de Nuits', 'Côte de Beaune', 'inventaire de cave'],
    faq: [
      { q: 'Peut-on estimer une cave sans la déplacer ?', a: 'Oui. Nous inventorions les bouteilles sur place et conseillons sur le transport lorsqu’il est nécessaire.' },
      { q: 'Une bouteille ancienne est-elle toujours précieuse ?', a: 'Non. Le domaine, le millésime, la conservation et le niveau comptent plus que l’âge seul.' },
      { q: 'Aidez-vous à organiser une vente de cave ?', a: 'Nous conseillons sur la meilleure voie de cession dans le respect de la réglementation en vigueur, sans vous engager.' },
    ],
    voisines: ['mobilier-d-epoque', 'argenterie-orfevrerie', 'tableaux-anciens'],
  },
  {
    slug: 'objets-de-curiosite',
    nom: 'Objets de curiosité & d’art',
    court: 'Objets de curiosité',
    photo: 'cabinet-curiosites',
    galerie: ['cabinet-curiosites-2', 'porcelaine-sevres', 'livres-reliures'],
    h1: 'Expertise d’objets de curiosité, de collection et d’art ancien en Bourgogne-Franche-Comté',
    title: 'Expert objets de curiosité et objets d’art anciens',
    description: 'Estimation d’objets de curiosité, instruments scientifiques, porcelaines et objets d’art en Bourgogne-Franche-Comté. Expert à domicile, sans engagement.',
    accroche: 'Cabinets de curiosités, instruments anciens, porcelaines, bibelots d’art : tout ce qui échappe aux catégories.',
    intro: [
      'Certaines pièces ne rentrent dans aucune case : instruments scientifiques, objets d’apothicaire, collections de naturaliste, bronzes, porcelaines, sculptures. Nos experts les examinent avec la même rigueur et vous orientent, quand il le faut, vers un spécialiste rare.',
      'Un objet de curiosité vaut par son histoire autant que par sa matière : provenance, ancienneté, rareté, état. Nous documentons chacun de ces points dans un rapport écrit, avec photographies.',
    ],
    recherche: [
      { titre: 'Instruments et sciences', texte: 'Balances, sextants, microscopes, instruments de pharmacie : une catégorie très recherchée des collectionneurs.' },
      { titre: 'Porcelaine et bibelots', texte: 'Marques, décors peints, restaurations : la porcelaine ancienne se lit au revers autant qu’au décor.' },
      { titre: 'Collections naturalistes', texte: 'Coquillages, minéraux, spécimens : une collection cohérente et documentée change de dimension.' },
      { titre: 'Sculptures et bronzes', texte: 'Fonte d’édition ou bronze d’art, patine d’origine : une question de signature et d’épreuve.' },
    ],
    conseil: 'Gardez les étiquettes, les carnets et les factures liés à un objet : ces documents font souvent la différence.',
    mots: ['objet de curiosité', 'cabinet de curiosités', 'instrument scientifique', 'porcelaine ancienne', 'bronze d’art', 'collection de naturaliste', 'bibelot d’art', 'objet d’apothicaire'],
    faq: [
      { q: 'Estimez-vous des objets inclassables ?', a: 'Oui. Nous les examinons et, au besoin, vous orientons vers un spécialiste de la catégorie concernée.' },
      { q: 'Faut-il conserver les emballages et documents ?', a: 'Oui. Étiquettes, factures, notes et carnets contribuent à la provenance et donc à la valeur.' },
      { q: 'Pouvez-vous estimer une collection entière ?', a: 'Oui, sur place, avec inventaire détaillé et rapport écrit.' },
    ],
    voisines: ['faience-de-nevers-desvres', 'argenterie-orfevrerie', 'tableaux-anciens'],
  },
];

export const specialiteBySlug = (slug: string) => {
  const s = specialites.find((x) => x.slug === slug);
  if (!s) throw new Error(`Spécialité inconnue : ${slug}`);
  return s;
};
