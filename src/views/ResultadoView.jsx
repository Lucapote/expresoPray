import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.jsx';
import OracionModal from '../components/OracionModal.jsx';
import { REVIEW_URL } from '../config.js';

export default function ResultadoView({ lines, onRestart }) {
  const titleRef = useRef(null);
  const [toast, setToast] = useState(false);
  const [selectedOracion, setSelectedOracion] = useState(null);
  const [rezadas, setRezadas] = useState({});

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // Control centralizado del botón "Atrás" del móvil
  useEffect(() => {
    const onPopState = () => {
      setSelectedOracion(null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleOpenOracion = (item) => {
    window.history.pushState({ modalOpen: true }, '');
    setSelectedOracion({ key: item.label, qty: item.qty });
  };

  const handleCloseOracion = () => {
    setSelectedOracion(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  const handleCompleteOracion = (key) => {
    setRezadas((prev) => ({ ...prev, [key]: true }));
  };

  const handleReview = () => {
    if (REVIEW_URL) {
      window.open(REVIEW_URL, '_blank', 'noopener');
      return;
    }
    setToast(true);
    setTimeout(() => setToast(false), 2600);
  };

  return (
    <section className="view">
      <div className="mid">
        <Logo size={180} />
        <h2 className="resultado-header serif">Tu monto de hoy</h2>
        <div className="monto-wrapper" ref={titleRef} tabIndex={-1}>
          <div className="oracion-list">
            {lines.map((l) => (
              <button
                key={l.label}
                type="button"
                className="oracion-btn serif"
                onClick={() => handleOpenOracion(l)}
                title={`Toca para leer la oración de ${l.label}`}
              >
                <div className="oracion-left">
                  <span className="oracion-qty">{l.qty}</span>
                  <span className="oracion-name">{l.label}</span>
                </div>
                {rezadas[l.label] ? (
                  <span className="oracion-pill oracion-pill--done">Rezada ✓</span>
                ) : (
                  <span className="oracion-pill">Leer 📖</span>
                )}
              </button>
            ))}
          </div>
          <p className="oracion-hint">Toca una oración para ver cómo se reza</p>
        </div>
        <p className="resultado-footer serif">Plegarias procesadas con éxito</p>
      </div>

      <div className="actions">
        <button type="button" className="cta" onClick={handleReview}>
          Dejar tu reseña
        </button>
        <button type="button" className="ghost" onClick={onRestart}>
          Volver a empezar
        </button>
      </div>

      <div className={`toast${toast ? ' on' : ''}`} role="status">
        {toast ? 'Pronto: acá irá el link a la reseña' : ''}
      </div>

      {selectedOracion && (
        <OracionModal
          oracionKey={selectedOracion.key}
          qty={selectedOracion.qty}
          onClose={handleCloseOracion}
          onComplete={handleCompleteOracion}
        />
      )}
    </section>
  );
}
