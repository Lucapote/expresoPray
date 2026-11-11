import Logo from '../components/Logo.jsx';
import Stepper from '../components/Stepper.jsx';

export default function ConsumoView({ consumo, onChange, onSubmit }) {
  return (
    <section className="view">
      <div className="brand">
        <Logo size={64} />
        <span className="brand-title">EXPRESSO AL CIELO</span>
      </div>

      <div className="mid">
        <h2 id="q-cafes">¿Cuántos cafés te tomaste hoy?</h2>
        <Stepper
          labelId="q-cafes"
          noun="cafés"
          min={1}
          value={Math.max(1, consumo.cafes)}
          onChange={(cafes) => onChange({ ...consumo, cafes: Math.max(1, cafes) })}
        />

        <h2 id="q-pancitos">
          ¿Cuántos pancitos comiste?
        </h2>
        <Stepper
          labelId="q-pancitos"
          noun="pancitos"
          min={0}
          value={consumo.pancitos}
          onChange={(pancitos) => onChange({ ...consumo, pancitos })}
        />

        <label className={`exam-card${consumo.ayudaExamenes ? ' active' : ''}`}>
          <input
            type="checkbox"
            className="exam-checkbox-input"
            checked={Boolean(consumo.ayudaExamenes)}
            onChange={(e) => onChange({ ...consumo, ayudaExamenes: e.target.checked })}
          />
          <span className="exam-check-circle" aria-hidden="true">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="exam-text">¿Ocupas una ayuda en tus exámenes?</span>
        </label>
      </div>

      <button type="button" className="cta" onClick={onSubmit}>
        Dar gracias
      </button>
    </section>
  );
}
