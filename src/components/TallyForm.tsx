import { useEffect, useRef } from 'react';

interface Props {
  /** ID du formulaire Tally (https://tally.so/r/<ID>). Par défaut : PUBLIC_TALLY_FORM_ID, sinon le formulaire du site. */
  formId?: string;
  /** Titre accessible de l'iframe. */
  title?: string;
  /** Hauteur minimale avant l'auto-dimensionnement Tally. */
  minHeight?: number;
  /** Identifiant de contexte transmis au formulaire (champ caché Tally « source »). */
  source?: string;
  /** Page affichée après l'envoi du formulaire (en plus de la redirection réglée dans Tally). */
  redirectTo?: string;
}

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SRC = 'https://tally.so/widgets/embed.js';
/** Formulaire Tally du site : https://tally.so/r/6DNjdB */
const DEFAULT_FORM_ID = '6DNjdB';

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
  formId = import.meta.env.PUBLIC_TALLY_FORM_ID || DEFAULT_FORM_ID,
  title = 'Formulaire de demande d’estimation gratuite',
  minHeight = 640,
  source = 'site',
  redirectTo = '/merci/',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formId) return;
    loadTallyScript(() => window.Tally?.loadEmbeds());
  }, [formId]);

  // Tally prévient la page parente à l'envoi (postMessage « Tally.FormSubmitted ») : on redirige vers /merci/
  useEffect(() => {
    if (!formId) return;
    const onMessage = (e: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)?tally\.so$/.test(e.origin)) return;
      let name: unknown = e.data;
      if (typeof name === 'string') {
        try { name = JSON.parse(name)?.event ?? name; } catch { /* message texte brut */ }
      } else if (name && typeof name === 'object') {
        name = (name as { event?: unknown }).event;
      }
      if (name === 'Tally.FormSubmitted') window.location.assign(redirectTo);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [formId, redirectTo]);

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
