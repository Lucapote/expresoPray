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
// - Base obligatoria permanente: al menos 1 Padre Nuestro y 1 Ave María.
// - Cada café adicional suma Padre Nuestro; cada pancito adicional suma Ave María.
// - Si se solicita ayuda en exámenes, la 3ra oración es invariablemente Santo Tomás de Aquino.
// - De lo contrario, se sortea una bendición devocional sorpresa aleatoria.
// - La ruleta frena en esta 3ra oración para generar expectativa.
export function buildMonto({ cafes, pancitos, ayudaExamenes = false }) {
  const lines = [];

  // Base mínima de 1 Padre Nuestro y 1 Ave María SIEMPRE
  const qtyPadreNuestro = Math.max(1, Number(cafes) || 1);
  const qtyAveMaria = Math.max(1, Number(pancitos) || 0);

  lines.push({ qty: qtyPadreNuestro, label: 'Padre Nuestro' });
  lines.push({ qty: qtyAveMaria, label: 'Ave María' });

  // 3ra oración: Santo Tomás de Aquino obligatoria si pide ayuda en exámenes
  const terceraOracion = ayudaExamenes
    ? 'Santo Tomás de Aquino'
    : DEVOCIONALES_POOL[Math.floor(Math.random() * DEVOCIONALES_POOL.length)];

  lines.push({ qty: 1, label: terceraOracion });

  return { lines, target: terceraOracion };
}
