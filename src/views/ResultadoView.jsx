import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.jsx';
import OracionModal from '../components/OracionModal.jsx';
import RegistroModal from '../components/RegistroModal.jsx';
import GamificacionModal from '../components/GamificacionModal.jsx';
import { REVIEW_URL } from '../config.js';
import { useEstudiante } from '../hooks/useEstudiante.js';
import { registrarOfrenda } from '../services/pastoralService.js';

export default function ResultadoView({ lines, consumo, onRestart }) {
  const titleRef = useRef(null);
  const creditedRezadasRef = useRef(new Set());
  const [toast, setToast] = useState(false);
  const [selectedOracion, setSelectedOracion] = useState(null);
  const [modalActive, setModalActive] = useState(null); // 'oracion' | 'registro' | 'gamificacion' | null
  const [rezadas, setRezadas] = useState({});

  const { estudiante, guardarEstudiante, sumarOraciones, estaRegistrado } = useEstudiante();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  // Control centralizado del botón "Atrás" del móvil para todos los modales
  useEffect(() => {
    const onPopState = () => {
      setModalActive(null);
      setSelectedOracion(null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openModal = (type, data = null) => {
    window.history.pushState({ modalActive: type }, '');
    if (type === 'oracion') setSelectedOracion(data);
    setModalActive(type);
  };

  const closeModal = () => {
    setModalActive(null);
    setSelectedOracion(null);
    if (window.history.state?.modalActive) {
      window.history.back();
    }
  };

  const handleOpenOracion = (item) => {
    openModal('oracion', { key: item.label, qty: item.qty });
  };

  const handleCompleteOracion = (key) => {
    setRezadas((prev) => ({ ...prev, [key]: true }));

    // Acreditar al marcador SOLO si es la primera vez que se reza en esta sesión
    if (!creditedRezadasRef.current.has(key)) {
      creditedRezadasRef.current.add(key);
      const oracionObj = (lines || []).find((l) => l.label === key);
      const qtyToAdd = Number(oracionObj?.qty) || 1;

      // Si el estudiante ya está registrado, sumar de inmediato a su perfil y al ranking
      if (estaRegistrado) {
        sumarOraciones(qtyToAdd);
        registrarOfrenda({
          estudiante,
          cafes: consumo?.cafes,
          pancitos: consumo?.pancitos,
          ayudaExamenes: consumo?.ayudaExamenes,
          lines: [{ label: key, qty: qtyToAdd }],
        });
      }
    }
  };

  const handleSaveRegistro = (datosEstudiante) => {
    // Calcular únicamente las oraciones que ya fueron marcadas como rezadas
    const oracionesYaRezadas = (lines || [])
      .filter((l) => creditedRezadasRef.current.has(l.label))
      .reduce((acc, l) => acc + (Number(l.qty) || 0), 0);

    const perfilConOraciones = guardarEstudiante({
      ...datosEstudiante,
      totalOraciones: oracionesYaRezadas,
    });

    if (oracionesYaRezadas > 0) {
      registrarOfrenda({
        estudiante: perfilConOraciones,
        cafes: consumo?.cafes,
        pancitos: consumo?.pancitos,
        ayudaExamenes: consumo?.ayudaExamenes,
        lines: (lines || []).filter((l) => creditedRezadasRef.current.has(l.label)),
      });
    }

    // Abrir inmediatamente la ventana gamificable
    setModalActive('gamificacion');
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
        <button
          type="button"
          className="gamificacion-trigger-btn"
          onClick={() => openModal(estaRegistrado ? 'gamificacion' : 'registro')}
        >
          {estaRegistrado ? 'Ver mi marcador' : 'Sumar a mi carrera'}
        </button>
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

      {modalActive === 'oracion' && selectedOracion && (
        <OracionModal
          oracionKey={selectedOracion.key}
          qty={selectedOracion.qty}
          onClose={closeModal}
          onComplete={handleCompleteOracion}
        />
      )}

      {modalActive === 'registro' && (
        <RegistroModal
          initialValues={estudiante}
          onClose={closeModal}
          onSave={handleSaveRegistro}
        />
      )}

      {modalActive === 'gamificacion' && (
        <GamificacionModal
          estudiante={estudiante}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
