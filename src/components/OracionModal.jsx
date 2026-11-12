import { useEffect, useRef } from 'react';
import { ORACIONES } from '../data/oraciones.js';

export default function OracionModal({ oracionKey, qty = 1, onClose, onComplete }) {
  const isClosingRef = useRef(false);

  useEffect(() => {
    if (!oracionKey) return;

    // Registrar estado en el historial para capturar el botón "Atrás" del móvil
    window.history.pushState({ oracionModalOpen: true }, '');

    const handlePopState = () => {
      if (!isClosingRef.current) {
        isClosingRef.current = true;
        onClose();
      }
    };

    const onKey = (e) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', onKey);
    };
  }, [oracionKey]);

  if (!oracionKey) return null;

  const handleDismiss = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    if (window.history.state?.oracionModalOpen) {
      window.history.back();
    }
    onClose();
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(oracionKey);
    }
    handleDismiss();
  };

  const data = ORACIONES[oracionKey] || {
    titulo: oracionKey,
    texto: 'Plegaria devocional para rezar en paz y recogimiento.',
  };

  return (
    <div className="modal-backdrop" onClick={handleDismiss} role="presentation">
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={handleDismiss}
          aria-label="Cerrar oración"
        >
          ✕
        </button>

        <span className="modal-badge">
          Rezar {qty} {qty > 1 ? 'veces' : 'vez'}
        </span>

        <h3 id="modal-title" className="modal-title serif">
          {data.titulo}
        </h3>

        <div className="modal-body serif">
          <p>{data.texto}</p>
        </div>

        <button type="button" className="cta" onClick={handleComplete}>
          Hecho
        </button>
      </div>
    </div>
  );
}

