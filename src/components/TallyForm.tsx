import { useEffect, useRef } from 'react';

interface Props {
  /** ID du formulaire Tally (https://tally.so/r/<ID>). Par défaut : PUBLIC_TALLY_FORM_ID. */
  formId?: string;
  /** Titre accessible de l'iframe. */
  title?: string;
  /** Hauteur minimale avant l'auto-dimensionnement Tally. */
  minHeight?: number;
  /** Identifiant de contexte transmis au formulaire (champ caché Tally « source »). */
  source?: string;
}

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SRC = 'https://tally.so/widgets/embed.js';

function loadTallyScript(onReady: () => void) {
  if (window.Tally) return onReady();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`);
  if (existing) {
    existing.addEventListener('load', onReady, { once: true });
    return;
  }
  const s = document.createElement('script');
  s.src = EMBED_SRC;
  s.async = true;
  s.onload = onReady;
  s.onerror = onReady; // l'iframe garde son src : le formulaire reste utilisable sans l'auto-hauteur
  document.body.appendChild(s);
}

/**
 * Conteneur responsive du formulaire d'estimation Tally.
 * - Sans ID : affiche un placeholder élégant et documenté (à remplacer en renseignant PUBLIC_TALLY_FORM_ID).
 * - Avec ID : iframe lazy + auto-hauteur (script officiel Tally).
 */
export default function TallyForm({
  formId = import.meta.env.PUBLIC_TALLY_FORM_ID ?? '',
  title = 'Formulaire de demande d’estimation gratuite',
  minHeight = 640,
  source = 'site',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formId) return;
    loadTallyScript(() => window.Tally?.loadEmbeds());
  }, [formId]);

  const src = formId
    ? `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=${encodeURIComponent(source)}`
    : '';

  return (
    <div className="tally" ref={ref} data-tally-container style={{ ['--tally-min' as string]: `${minHeight}px` }}>
      {formId ? (
        <iframe
          data-tally-src={src}
          src={src}
          loading="lazy"
          width="100%"
          height={minHeight}
          title={title}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        />
      ) : (
        <div className="tally-placeholder" role="note">
          <span className="tally-mark" aria-hidden="true">✦</span>
          <p className="tally-title">Votre demande d’estimation</p>
          <p>
            Le formulaire Tally s’affichera ici. Renseignez <code>PUBLIC_TALLY_FORM_ID</code> dans l’environnement du
            site (voir <code>.env.example</code>) ou passez la prop <code>formId</code> à ce composant.
          </p>
          <ul>
            <li>Nature des objets et photographies</li>
            <li>Commune et département</li>
            <li>Coordonnées pour vous rappeler</li>
          </ul>
        </div>
      )}
      <style>{`
        .tally { width: 100%; min-height: var(--tally-min); background: var(--stone); border: 1px solid var(--line); position: relative; }
        .tally iframe { display: block; width: 100%; border: 0; min-height: var(--tally-min); }
        .tally-placeholder { min-height: var(--tally-min); display: grid; align-content: center; justify-items: start; gap: 10px; padding: clamp(28px, 6vw, 64px); background: repeating-linear-gradient(135deg, transparent 0 22px, rgba(197,160,89,.08) 22px 23px); }
        .tally-title { margin: 0; font: 500 1.75rem/1.1 var(--font-display); }
        .tally-placeholder p { color: var(--ink-soft); max-width: 46ch; }
        .tally-placeholder code { background: var(--stone-2); padding: 2px 6px; font-size: .88em; }
        .tally-placeholder ul { margin: 0; padding-left: 18px; color: var(--ink-soft); }
        .tally-mark { color: var(--brass-deep); font-size: 1.6rem; }
      `}</style>
    </div>
  );
}
