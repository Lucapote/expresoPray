export default function Stepper({ labelId, noun, value, onChange, min = 0, max = 20 }) {
  return (
    <div className="step" role="group" aria-labelledby={labelId}>
      <button type="button" aria-label={`Menos ${noun}`} onClick={() => onChange(Math.max(min, value - 1))}>
        −
      </button>
      <output aria-live="polite">{value}</output>
      <button
        type="button"
        className="plus"
        aria-label={`Más ${noun}`}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </div>
  );
}
