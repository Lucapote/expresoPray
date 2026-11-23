import { AREAS_ACADEMICAS, AREA_POR_CARRERA } from '../data/carreras.js';

const LOCAL_RANKING_KEY = 'expresso_ranking_local';

// Obtiene o inicializa el ranking local para pruebas y funcionamiento offline
function getLocalRanking() {
  try {
    const raw = localStorage.getItem(LOCAL_RANKING_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Fallback silencioso
  }

  // Base inicial en blanco (0 oraciones por área)
  const base = {
    'Ciencias de la Salud': 0,
    'Ingenierías': 0,
    'Negocios': 0,
    'Ciencias Sociales': 0,
    'Arte, Diseño y Comunicación': 0,
    'Hospitality and Leisure': 0,
    'Licenciaturas en Inglés': 0,
  };

  try {
    localStorage.setItem(LOCAL_RANKING_KEY, JSON.stringify(base));
  } catch {
    // Ignorar si storage está deshabilitado
  }

  return base;
}

function updateLocalRanking(area, cantidad) {
  const current = getLocalRanking();
  current[area] = (current[area] || 0) + Number(cantidad || 0);
  try {
    localStorage.setItem(LOCAL_RANKING_KEY, JSON.stringify(current));
  } catch {
    // Ignorar
  }
  return current;
}

/**
 * Registra la ofrenda del estudiante en el backend o en el almacenamiento local de respaldo.
 * @returns {Promise<{ success: boolean, data?: any, error?: string }>}
 */
export async function registrarOfrenda({ estudiante, cafes, pancitos, ayudaExamenes, lines }) {
  const totalOracionesSesion = (lines || []).reduce((acc, l) => acc + (Number(l.qty) || 0), 0);
  const area = estudiante.area || AREA_POR_CARRERA[estudiante.carrera] || 'Otra';

  try {
    const res = await fetch('/api/ofrendas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        estudiante: {
          telefono: estudiante.telefono,
          nombre: estudiante.nombre,
          carrera: estudiante.carrera,
          area,
          email: estudiante.email || null,
        },
        consumo: {
          cafes: Number(cafes) || 1,
          pancitos: Number(pancitos) || 0,
          ayudaExamenes: Boolean(ayudaExamenes),
          totalOraciones: totalOracionesSesion,
          lines: lines || [],
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Error en servidor: ${res.status}`);
    }

    const json = await res.json();
    return { success: true, data: json.data || json, error: null };
  } catch (err) {
    // Respaldo local gracioso para funcionamiento continuo
    const nuevoRanking = updateLocalRanking(area, totalOracionesSesion);
    return {
      success: true,
      data: {
        offline: true,
        oracionesSumadas: totalOracionesSesion,
        area,
        ranking: nuevoRanking,
      },
      error: null,
    };
  }
}

/**
 * Obtiene el marcador acumulado ordenado por áreas académicas.
 * @returns {Promise<{ success: boolean, data: Array<{ area: string, total: number }>, error?: string }>}
 */
export async function obtenerRanking() {
  try {
    const res = await fetch('/api/ranking');
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.data)) {
        return { success: true, data: json.data, error: null };
      }
    }
  } catch {
    // Servidor no disponible o modo offline
  }

  // Fallback con ranking local
  const localMap = getLocalRanking();
  const sorted = AREAS_ACADEMICAS.map((cat) => ({
    area: cat.area,
    total: localMap[cat.area] || 0,
  })).sort((a, b) => b.total - a.total);

  return { success: true, data: sorted, error: null };
}
