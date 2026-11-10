import { site, departements } from '../data/site';
import { maisons } from '../data/maisons';
import { specialites } from '../data/specialites';
import { villes } from '../data/villes';
import type { FaqItem } from '../data/specialites';

const abs = (path: string) => new URL(path, site.url).toString();
export const orgId = abs('/#organization');

const region = { '@type': 'AdministrativeArea', name: 'Bourgogne-Franche-Comté' };

export const areaServed = [
  region,
  ...departements.map((d) => ({ '@type': 'AdministrativeArea', name: `${d.nom} (${d.code})` })),
  ...villes.map((v) => ({ '@type': 'City', name: v.nom })),
];

/** Entité principale : maison d'antiquaires, magasin d'antiquités et service d'expertise. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AntiqueStore', 'ProfessionalService', 'LocalBusiness'],
    '@id': orgId,
    name: site.legalName,
    alternateName: site.name,
    url: abs('/'),
    description:
      'Maison d’antiquaires et d’expertise d’art en Bourgogne-Franche-Comté : estimation gratuite, rachat de successions, mobilier d’époque, argenterie, tableaux anciens, faïence de Nevers, horloges comtoises.',
    areaServed,
    knowsAbout: ['antiquités', 'expertise d’art', 'mobilier d’époque', 'argenterie ancienne', 'tableaux anciens', 'faïence de Nevers', 'horloges comtoises', 'grands crus de garde', 'succession'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Expertises et estimations',
      itemListElement: specialites.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nom, url: abs(`/specialites/${s.slug}/`) } })),
    },
    subOrganization: maisons.map((m) => ({ '@id': abs(`/maisons/${m.slug}/#maison`) })),
  };
}

export function maisonSchema(slug: string) {
  const m = maisons.find((x) => x.slug === slug)!;
  const cities = villes.filter((v) => m.villes.includes(v.slug));
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': abs(`/maisons/${m.slug}/#maison`),
    name: m.nom.replace(/^La /, ''),
    url: abs(`/maisons/${m.slug}/`),
    parentOrganization: { '@id': orgId },
    description: m.description,
    areaServed: [
      ...departements.filter((d) => m.departements.includes(d.code)).map((d) => ({ '@type': 'AdministrativeArea', name: `${d.nom} (${d.code})` })),
      ...cities.map((c) => ({ '@type': 'City', name: c.nom })),
    ],
  };
}

export function serviceSchema(args: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    serviceType: args.serviceType,
    description: args.description,
    url: abs(args.path),
    provider: { '@id': orgId },
    areaServed: areaServed.slice(0, 1 + departements.length),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function webSiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: site.name, inLanguage: 'fr-FR', publisher: { '@id': orgId } };
}
