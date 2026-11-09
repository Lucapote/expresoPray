import { useEffect, useRef, useState } from 'react';
import Wings from '../components/Wings.jsx';
import Roulette from '../components/Roulette.jsx';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import { SPIN_SECONDS } from '../config.js';

export default function CargaView({ target, onDone }) {
  const reduce = usePrefersReducedMotion();
  const duration = reduce ? 0.4 : SPIN_SECONDS;

  // onDone en un ref para que un re-render del padre no reinicie el timer.
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const t = setTimeout(() => doneRef.current(), duration * 1000 + 300);
    return () => clearTimeout(t);
  }, [duration]);

  const [full, setFull] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setFull(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="view view--carga">
      <div className="mid">
        <Wings />
        <h2>Calculando tu monto…</h2>
        <Roulette target={target} duration={duration} />
        <div className="bar">
          <i style={{ width: full ? '100%' : 0, transition: `width ${duration}s linear` }} />
        </div>
      </div>
    </section>
  );
}
