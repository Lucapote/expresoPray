import { useEffect, useMemo, useState } from 'react';

const NAMES = [
  'Gloria',
  'Ave María',
  'Padre Nuestro',
  'Credo',
  'Salve',
  'San Miguel Arcángel',
  'Ángel de la Guarda',
  'Acto de Contrición',
  'Santo Tomás de Aquino',
];
const COUNT = 30; // cantidad de filas del carrete
const STOP = 26; // fila donde frena
const ROW = 56; // alto de fila en px (igual que .strip > div en styles.css)

export default function Roulette({ target, duration }) {
  const items = useMemo(() => {
    const others = NAMES.filter((n) => n !== target);
    const list = new Array(COUNT);
    list[STOP] = target;

    // Llenar hacia arriba asegurando que ningún vecino sea igual
    let last = target;
    for (let i = STOP - 1; i >= 0; i--) {
      const candidates = others.filter((n) => n !== last);
      const chosen = candidates[i % candidates.length];
      list[i] = chosen;
      last = chosen;
    }

    // Llenar hacia abajo asegurando que ningún vecino sea igual
    last = target;
    for (let i = STOP + 1; i < COUNT; i++) {
      const candidates = others.filter((n) => n !== last);
      const chosen = candidates[i % candidates.length];
      list[i] = chosen;
      last = chosen;
    }

    return list;
  }, [target]);

  const [go, setGo] = useState(false);
  useEffect(() => {
    let id2;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setGo(true));
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, []);

  return (
    <div className="roulette" aria-hidden="true">
      <div className="mark" />
      <div
        className="strip"
        style={{
          transform: `translateY(${go ? -(STOP - 1) * ROW : 0}px)`,
          transition: `transform ${Math.max(duration - 0.4, 0)}s cubic-bezier(.15,.7,.2,1)`,
        }}
      >
        {items.map((name, i) => (
          <div key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
}
