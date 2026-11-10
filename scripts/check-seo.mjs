// Contrôle SEO du site construit (dist/) : title, meta description, h1 unique, hiérarchie Hn, alt/title des images, JSON-LD, canonical.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk(root).filter((f) => f.endsWith('index.html') || f.endsWith('404.html'));

const T = [48, 62];
const D = [135, 160];
let errors = 0, warns = 0;
const titles = new Map(), descs = new Map();

for (const f of pages) {
  const html = readFileSync(f, 'utf8');
  const rel = f.replace(root, '/');
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const err = (m) => { errors++; console.log(`✗ ${rel} — ${m}`); };
  const warn = (m) => { warns++; console.log(`! ${rel} — ${m}`); };

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.replace(/&amp;/g, '&').replace(/&#39;/g, "'");
  const desc = html.match(/<meta name="description" content="(.*?)"/s)?.[1]?.replace(/&amp;/g, '&').replace(/&#39;/g, "'");
  if (!title) err('title manquant');
  else {
    if (!noindex && (title.length < T[0] || title.length > T[1])) warn(`title ${title.length} car. (« ${title} »)`);
    if (titles.has(title)) err(`title dupliqué avec ${titles.get(title)}`); else titles.set(title, rel);
  }
  if (!desc) err('meta description manquante');
  else {
    if (!noindex && (desc.length < D[0] || desc.length > D[1])) warn(`description ${desc.length} car.`);
    if (descs.has(desc)) err(`description dupliquée avec ${descs.get(desc)}`); else descs.set(desc, rel);
  }
  const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1 !== 1) err(`${h1} balises h1`);
  // hiérarchie : pas de saut de niveau
  let prev = 0;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const n = Number(m[1]);
    if (prev && n > prev + 1) { err(`saut de titre h${prev} → h${n}`); break; }
    prev = n;
  }
  if (!/<link rel="canonical"/.test(html)) err('canonical manquant');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(m[0])) err(`image sans alt : ${m[0].slice(0, 90)}`);
    else if (!/\btitle="[^"]+"/.test(m[0])) warn(`image sans title : ${m[0].slice(0, 90)}`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1]); } catch { err('JSON-LD invalide'); }
  }
  if (!noindex && !/"@type":\["AntiqueStore"/.test(html)) err('JSON-LD AntiqueStore absent');
}
console.log(`\n${pages.length} pages · ${errors} erreur(s) · ${warns} avertissement(s)`);
process.exit(errors ? 1 : 0);
