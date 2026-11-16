import { photo, type PhotoSlug } from '../data/photos';

export type FrameCtx = 'side' | 'card' | 'bleed';

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Calcule le cadre d'une photo pour qu'elle ne soit jamais amputée :
 * - side  : cadre qui épouse la photo (ratio naturel borné 0.7–1.7) ;
 * - card  : cadre fixe 4:3 (grilles à hauteur égale) ;
 * - bleed : plein cadre d'arrière-plan (hero), recadrage assumé.
 * Si la photo perdrait plus de ~22 % de sa surface en `cover`, elle est affichée entière sur passe-partout (`mat`).
 * Sur mobile, un cadre ne dépasse jamais le carré : les photos verticales passent en `contain`.
 */
export function frameFor(slug: PhotoSlug, ctx: FrameCtx = 'card', target = 4 / 3) {
  const { src } = photo(slug);
  const r = src.width / src.height;
  if (ctx === 'bleed') return { ar: 'auto', arM: 'auto', mat: false, tall: false, r };
  const ar = ctx === 'side' ? clamp(r, 0.7, 1.7) : target;
  const visible = Math.min(r / ar, ar / r);
  const mat = visible < 0.78;
  const arM = ctx === 'side' ? clamp(r, 1, 1.7) : target;
  const tall = ctx === 'side' && r < 1;
  return { ar: +ar.toFixed(3), arM: +arM.toFixed(3), mat, tall, r };
}
