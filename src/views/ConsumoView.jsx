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

        <h2 id="q-pancitos" style={{ marginTop: 20 }}>
          ¿Cuántos pancitos comiste?
        </h2>
        <Stepper
          labelId="q-pancitos"
          noun="pancitos"
          value={consumo.pancitos}
          onChange={(pancitos) => onChange({ ...consumo, pancitos })}
        />
      </div>

      <button type="button" className="cta" onClick={onSubmit}>
        Dar gracias
      </button>
    </section>
  );
}
