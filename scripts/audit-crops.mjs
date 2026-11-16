// Audit du cadrage : pour chaque photo affichée (desktop + mobile), mesure la part visible
// quand object-fit: cover recadre l'image. Échoue sous le seuil (défaut 0.70).
// Usage : npm run build && npx astro preview --port 4321 & node scripts/audit-crops.mjs [--base URL] [--min 0.7]
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const base = arg('--base', 'http://localhost:4321');
const min = Number(arg('--min', '0.70'));
const root = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const paths = walk(root).filter((f) => f.endsWith('index.html')).map((f) => f.replace(root, '/').replace('index.html', ''));

const browser = await chromium.launch();
let bad = 0, total = 0;
const rows = [];
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    const H = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < H; y += 400) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(60); }
    await page.waitForTimeout(250);
    const res = await page.evaluate(() => [...document.querySelectorAll('img')].map((im) => {
      const r = im.getBoundingClientRect();
      const cs = getComputedStyle(im);
      if (im.closest('[data-bleed]')) return { src: '', w: 0, h: 0 }; // hero plein cadre : recadrage assumé
      const nat = im.naturalWidth / im.naturalHeight;
      const box = r.width / r.height;
      const fit = cs.objectFit;
      const visible = fit === 'cover' ? Math.min(nat / box, box / nat) : 1;
      return { src: (im.currentSrc || im.src).split('/').pop().split('.')[0], w: Math.round(r.width), h: Math.round(r.height), nat: +nat.toFixed(2), box: +box.toFixed(2), fit, visible: +visible.toFixed(2) };
    }).filter((x) => x.w > 40 && x.h > 40));
    for (const x of res) {
      total++;
      if (x.visible < min) { bad++; rows.push(`✗ ${w}px ${p} — ${x.src}: image ${x.nat} dans cadre ${x.box} (${x.w}×${x.h}), visible ${Math.round(x.visible * 100)} %`); }
    }
  }
  await page.close();
}
await browser.close();
rows.forEach((r) => console.log(r));
console.log(`\n${total} images mesurées · ${bad} recadrage(s) trop fort(s) (< ${Math.round(min * 100)} % visible)`);
process.exit(bad ? 1 : 0);
