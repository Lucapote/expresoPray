import { useEffect, useRef } from 'react';
import { ORACIONES } from '../data/oraciones.js';

export default function OracionModal({ oracionKey, qty = 1, onClose, onComplete }) {
  const closedByPopState = useRef(false);

  useEffect(() => {
    // Insertar un estado temporal en el historial para interceptar el botón "Atrás" del móvil
    window.history.pushState({ modalOpen: true }, '');

    const handlePopState = () => {
      closedByPopState.current = true;
      onClose();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);

      // Si el modal se desmontó por clic manual y no por "Atrás", limpiar el historial
      if (!closedByPopState.current && window.history.state?.modalOpen) {
        window.history.back();
      }
    };
  }, [onClose]);

  if (!oracionKey) return null;

  const handleDismiss = () => {
    onClose();
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(oracionKey);
    }
    onClose();
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

