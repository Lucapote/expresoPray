import { useMemo } from 'react';

// Hombro en (160, 90). Cada pluma apunta hacia arriba y se rota con CSS
// entre dos poses: --a0 (alas arriba, en abanico) y --a1 (alas abajo, recogidas).
const SX = 160;
const SY = 90;

const featherPath = (L) => {
  const W = L * 0.16 + 5;
  return `M${SX} ${SY}C${SX - W} ${SY - L * 0.3} ${SX - W * 0.9} ${SY - L * 0.8} ${SX} ${SY - L}C${SX + W * 0.9} ${SY - L * 0.8} ${SX + W} ${SY - L * 0.3} ${SX} ${SY}z`;
};

// s = -1 ala izquierda, +1 ala derecha.
function buildSide(s) {
  const rowA = [];
  const rowB = [];
  const rowC = [];
  // De afuera hacia adentro, así las plumas internas quedan encima.
  for (let i = 6; i >= 0; i--) {
    const L = 78 + i * 10;
    const up = 35 + i * 7;
    const down = 150 + i * 5;
    rowA.push({ k: `A${s}${i}`, i, L, a0: s * up, a1: s * down });
    rowB.push({ k: `B${s}${i}`, i, L: L * 0.72, a0: s * (up + 3.5), a1: s * (down + 2.5) });
    rowC.push({ k: `C${s}${i}`, i, L: L * 0.45, a0: s * (up + 1.5), a1: s * (down + 1) });
  }
  return [...rowA, ...rowB, ...rowC];
}

export default function Wings() {
  const leftFeathers = useMemo(() => buildSide(-1), []);
  const rightFeathers = useMemo(() => buildSide(1), []);

  return (
    <div className="wings">
      <svg
        width="320"
        height="250"
        viewBox="0 0 320 250"
        style={{ overflow: 'visible' }}
        role="img"
        aria-label="Alas de San Miguel aleteando"
      >
        <defs>
          <radialGradient id="halo-gradient">
            <stop offset="0%" stopColor="#E0B04A" stopOpacity=".75" />
            <stop offset="60%" stopColor="#E0B04A" stopOpacity=".25" />
            <stop offset="100%" stopColor="#E0B04A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="halo" cx={SX} cy={SY} r="100" fill="url(#halo-gradient)" />

        {/* Ala izquierda con perspectiva 3D */}
        <g className="wing-side wing-left">
          {leftFeathers.map((f) => (
            <g
              key={f.k}
              className="f"
              style={{ '--a0': `${f.a0}deg`, '--a1': `${f.a1}deg`, '--i': f.i }}
            >
              <path className="fe" d={featherPath(f.L)} />
            </g>
          ))}
        </g>

        {/* Ala derecha con perspectiva 3D */}
        <g className="wing-side wing-right">
          {rightFeathers.map((f) => (
            <g
              key={f.k}
              className="f"
              style={{ '--a0': `${f.a0}deg`, '--a1': `${f.a1}deg`, '--i': f.i }}
            >
              <path className="fe" d={featherPath(f.L)} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
