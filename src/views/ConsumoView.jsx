import Logo from '../components/Logo.jsx';
import Stepper from '../components/Stepper.jsx';

export default function ConsumoView({ consumo, onChange, onSubmit }) {
  return (
    <section className="view">
      <div className="brand serif">
        <Logo size={48} />
        Expresso al Cielo
      </div>

      <div className="mid">
        <h2 id="q-cafes">¿Cuántos cafés te tomaste hoy?</h2>
        <Stepper
          labelId="q-cafes"
          noun="cafés"
          value={consumo.cafes}
          onChange={(cafes) => onChange({ ...consumo, cafes })}
        />

        <h2 id="q-pancitos">
          ¿Cuántos pancitos comiste?
        </h2>
        <Stepper
          labelId="q-pancitos"
          noun="pancitos"
          value={consumo.pancitos}
          onChange={(pancitos) => onChange({ ...consumo, pancitos })}
        />

        <label className={`exam-toggle${consumo.tieneExamen ? ' active' : ''}`}>
          <input
            type="checkbox"
            checked={Boolean(consumo.tieneExamen)}
            onChange={(e) => onChange({ ...consumo, tieneExamen: e.target.checked })}
          />
          <span className="exam-icon" aria-hidden="true">🎓</span>
          <span className="exam-text">¿Tienes un examen pronto?</span>
          <span className="exam-check-indicator" aria-hidden="true" />
        </label>
      </div>

      <button type="button" className="cta" onClick={onSubmit}>
        Dar gracias
      </button>
    </section>
  );
}
