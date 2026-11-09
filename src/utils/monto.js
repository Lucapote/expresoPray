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
// - Se añade siempre 1 tercera oración devocional aleatoria como bendición del día.
// - La ruleta frena en esta oración sorpresa para generar expectativa.
export function buildMonto({ cafes, pancitos }) {
  const lines = [];
  if (cafes > 0) lines.push({ qty: cafes, label: 'Padre Nuestro' });
  if (pancitos > 0) lines.push({ qty: pancitos, label: 'Ave María' });

  // Selección aleatoria de la bendición especial
  const randomDevocional =
    DEVOCIONALES_POOL[Math.floor(Math.random() * DEVOCIONALES_POOL.length)];
  lines.push({ qty: 1, label: randomDevocional });

  return { lines, target: randomDevocional };
}
