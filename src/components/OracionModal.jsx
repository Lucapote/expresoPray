import { useEffect } from 'react';
import { ORACIONES } from '../data/oraciones.js';

export default function OracionModal({ oracionKey, qty = 1, onClose, onComplete }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!oracionKey) return null;

  const data = ORACIONES[oracionKey] || {
    titulo: oracionKey,
    texto: 'Plegaria devocional para rezar en paz y recogimiento.',
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(oracionKey);
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
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
          onClick={onClose}
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

