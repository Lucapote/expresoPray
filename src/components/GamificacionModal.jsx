import { useEffect, useState } from 'react';
import { COMMUNITY_URL } from '../config.js';
import { obtenerRanking } from '../services/pastoralService.js';

export default function GamificacionModal({ estudiante, onClose }) {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    let mounted = true;
    obtenerRanking().then((res) => {
      if (mounted && res.success && Array.isArray(res.data)) {
        setRanking(res.data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleCommunityClick = () => {
    if (COMMUNITY_URL) {
      window.open(COMMUNITY_URL, '_blank', 'noopener');
    } else {
      setToastMsg('Pronto: Enlace oficial a la Comunidad de WhatsApp');
      setTimeout(() => setToastMsg(''), 3000);
    }
  };

  const totalOraciones = Number(estudiante?.totalOraciones) || 0;
  const maxTotal = ranking[0]?.total || 1;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-card gamificacion-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gamificacion-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar marcador"
        >
          ✕
        </button>

        <span className="modal-badge">{estudiante?.area || 'Anáhuac Cancún'}</span>

        <h3 id="gamificacion-title" className="modal-title serif">
          {estudiante?.nombre ? `¡Paz y bien, ${estudiante.nombre}!` : 'Marcador Devocional'}
        </h3>

        {/* Slogan y Métrica Personal Destacada */}
        <div className="slogan-card">
          <span className="slogan-label">Tu impacto espiritual</span>
          <p className="slogan-text serif">
            Estás <strong>{totalOraciones}</strong> {totalOraciones === 1 ? 'oración' : 'oraciones'} más cerca del cielo
          </p>
        </div>

        {/* Marcador por Áreas Académicas */}
        <div className="ranking-section">
          <div className="ranking-header">
            <span className="ranking-title">Top Áreas Académicas</span>
            <span className="ranking-subtitle">Oraciones acumuladas</span>
          </div>

          {loading ? (
            <div className="ranking-loading">Cargando marcador en vivo...</div>
          ) : (
            <div className="ranking-list">
              {ranking.map((item, idx) => {
                const esMiArea = item.area === estudiante?.area;
                const porcentaje = Math.min(100, Math.round((item.total / maxTotal) * 100));

                return (
                  <div
                    key={item.area}
                    className={`ranking-row${esMiArea ? ' ranking-row--highlight' : ''}`}
                  >
                    <div className="ranking-row-info">
                      <span className="ranking-pos">{idx + 1}°</span>
                      <span className="ranking-name">
                        {item.area}
                        {esMiArea && <span className="ranking-pill">Tu área</span>}
                      </span>
                      <span className="ranking-count">{item.total}</span>
                    </div>
                    <div className="ranking-bar-track">
                      <div
                        className="ranking-bar-fill"
                        style={{ width: `${porcentaje}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Puente Pastoral a la Comunidad */}
        <div className="gamificacion-actions">
          <button
            type="button"
            className="cta whatsapp-cta"
            onClick={handleCommunityClick}
          >
            Unirme a la Comunidad de WhatsApp
          </button>
          <button type="button" className="ghost" onClick={onClose}>
            Volver a oraciones
          </button>
        </div>

        {toastMsg && (
          <div className="toast on" role="status">
            {toastMsg}
          </div>
        )}
      </div>
    </div>
  );
}
