import { useEffect, useState } from 'react';
import { AREAS_ACADEMICAS, AREA_POR_CARRERA } from '../data/carreras.js';

export default function RegistroModal({ initialValues, onClose, onSave }) {
  const [telefono, setTelefono] = useState(initialValues?.telefono || '');
  const [nombre, setNombre] = useState(initialValues?.nombre || '');
  const [carrera, setCarrera] = useState(initialValues?.carrera || '');
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const telLimpio = telefono.replace(/\D/g, '');

    if (telLimpio.length < 10) {
      setError('Por favor ingresa tu número a 10 dígitos.');
      return;
    }
    if (!nombre.trim()) {
      setError('Por favor ingresa tu nombre o apodo.');
      return;
    }
    if (!carrera) {
      setError('Por favor selecciona tu carrera.');
      return;
    }

    setError('');
    const area = AREA_POR_CARRERA[carrera] || 'Otra';
    onSave({
      telefono: telLimpio,
      nombre: nombre.trim(),
      carrera,
      area
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-card registro-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="registro-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar registro"
        >
          ✕
        </button>

        <span className="modal-badge">Pastoral Universitaria</span>

        <h3 id="registro-title" className="modal-title serif">
          Suma tu ofrenda a tu carrera
        </h3>
        <p className="registro-subtitle">
          Sin contraseñas. Tu número guarda tu historial y suma tus oraciones a tu facultad en la Anáhuac Cancún.
        </p>

        <form onSubmit={handleSubmit} className="registro-form">
          {error && <div className="registro-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="reg-tel">WhatsApp / Teléfono</label>
            <input
              id="reg-tel"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="10 dígitos (ej: 9981234567)"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value.replace(/\D/g, '').slice(0, 10))}
              autoComplete="tel"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-nombre">Nombre o Apodo</label>
            <input
              id="reg-nombre"
              type="text"
              placeholder="¿Cómo te llamas?"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoComplete="given-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-carrera">Carrera / Licenciatura</label>
            <select
              id="reg-carrera"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
            >
              <option value="">Selecciona tu carrera...</option>
              {AREAS_ACADEMICAS.map((cat) => (
                <optgroup key={cat.area} label={cat.area}>
                  {cat.carreras.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <button type="submit" className="cta registro-submit">
            Guardar y ver mi marcador
          </button>
        </form>
      </div>
    </div>
  );
}
