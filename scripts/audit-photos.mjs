// Audit des photos : doublons sur une même page et réutilisations entre pages (dist/ requis).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk(root).filter((f) => f.endsWith('index.html'));
const slugOf = (src) => src.split('/').pop().replace(/\.[A-Za-z0-9_-]+_[A-Za-z0-9]+\.(avif|webp|jpg)$/, '').replace(/\.[A-Za-z0-9_-]+$/, '');
const global = new Map();
let samePage = 0;
for (const f of pages) {
  const html = readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '');
  const rel = f.replace(root, '/').replace('index.html', '');
  // une photo = un <img> ; on dédoublonne les <source> (même image en avif/webp)
  const slugs = [...html.matchAll(/<img\b[^>]*\bsrc="(\/_astro\/[^"]+)"/g)].map((m) => slugOf(m[1]));
  const count = {};
  slugs.forEach((s) => (count[s] = (count[s] || 0) + 1));
  for (const [s, n] of Object.entries(count)) {
    if (n > 1) { samePage++; console.log(`✗ ${rel} — « ${s} » ×${n}`); }
    (global.get(s) ?? global.set(s, new Set()).get(s)).add(rel);
  }
}
const multi = [...global].filter(([, p]) => p.size > 1).sort((a, b) => b[1].size - a[1].size);
console.log(`\n${samePage} doublon(s) sur une même page`);
console.log(`${multi.length} photo(s) sur plusieurs pages (sur ${global.size})`);
if (process.argv.includes('--verbose')) multi.forEach(([s, p]) => console.log(`  ${s}: ${p.size} pages`));
const tooMany = multi.filter(([, p]) => p.size > 2);
tooMany.forEach(([s, p]) => console.log(`✗ « ${s} » sur ${p.size} pages : ${[...p].join(' ')}`));
const unused = [];
console.log(tooMany.length ? `\n${tooMany.length} photo(s) sur plus de 2 pages` : '\nAucune photo sur plus de 2 pages (miniature de hub + page cible)');
process.exit(samePage || tooMany.length ? 1 : 0);
