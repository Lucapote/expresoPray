import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.jsx';
import OracionModal from '../components/OracionModal.jsx';
import { REVIEW_URL } from '../config.js';

export default function ResultadoView({ lines, onRestart }) {
  const titleRef = useRef(null);
  const [toast, setToast] = useState(false);
  const [selectedOracion, setSelectedOracion] = useState(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

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
        <Logo size={96} />
        <p className="muted">Tu monto de hoy</p>
        <div className="monto-wrapper" ref={titleRef} tabIndex={-1}>
          <div className="oracion-list">
            {lines.map((l, i) => (
              <button
                key={l.label}
                type="button"
                className="oracion-btn serif"
                onClick={() => setSelectedOracion({ key: l.label, qty: l.qty })}
                title={`Toca para leer la oración de ${l.label}`}
              >
                {i > 0 && <span className="oracion-plus">+ </span>}
                <span className="oracion-qty">{l.qty}</span>
                <span className="oracion-name">{l.label}</span>
                <span className="oracion-pill">Leer 📖</span>
              </button>
            ))}
          </div>
          <p className="oracion-hint">Toca una oración para ver cómo se reza</p>
        </div>
        <p className="muted">Plegarias procesadas con éxito</p>
      </div>

      <button type="button" className="cta" onClick={handleReview}>
        Dejar tu reseña
      </button>
      <button type="button" className="ghost" onClick={onRestart}>
        Volver a empezar
      </button>

      <div className={`toast${toast ? ' on' : ''}`} role="status">
        {toast ? 'Pronto: acá irá el link a la reseña' : ''}
      </div>

      <OracionModal
        oracionKey={selectedOracion?.key}
        qty={selectedOracion?.qty}
        onClose={() => setSelectedOracion(null)}
      />
    </section>
  );
}
