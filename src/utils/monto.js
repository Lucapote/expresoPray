// Catálogo de oraciones devocionales para la bendición sorpresa del día
const DEVOCIONALES_POOL = [
  'San Miguel Arcángel',
  'Santo Tomás de Aquino',
  'Ángel de la Guarda',
  'Acto de Contrición',
  'Credo',
  'Salve',
  'Gloria',
];

// Regla del monto:
// - Cada café = Padre Nuestro.
// - Cada pancito = Ave María.
// - Si el estudiante tiene examen pronto, la 3ra oración es la de Santo Tomás de Aquino (patrón de los estudiantes).
// - De lo contrario, se sortea una bendición devocional sorpresa aleatoria.
// - La ruleta frena en esta oración para generar expectativa.
export function buildMonto({ cafes, pancitos, tieneExamen = false }) {
  const lines = [];
  if (cafes > 0) lines.push({ qty: cafes, label: 'Padre Nuestro' });
  if (pancitos > 0) lines.push({ qty: pancitos, label: 'Ave María' });

  // Si tiene examen, Santo Tomás intercede por la sabiduría; si no, sorteo devocional
  const terceraOracion = tieneExamen
    ? 'Santo Tomás de Aquino'
    : DEVOCIONALES_POOL[Math.floor(Math.random() * DEVOCIONALES_POOL.length)];

  lines.push({ qty: 1, label: terceraOracion });

  return { lines, target: terceraOracion };
}
