// Catálogo oficial de áreas académicas y carreras de la Universidad Anáhuac Cancún

export const AREAS_ACADEMICAS = [
  {
    area: 'Ingenierías',
    carreras: [
      'Ingeniería en Tecnologías de la Información y Ciberseguridad',
      'Ingeniería en Tecnologías de la Información e Inteligencia Artificial',
      'Ingeniería Civil',
      'Ingeniería Industrial para la Dirección',
      'Ingeniería en Tecnologías de la Información y Negocios Digitales',
    ],
  },
  {
    area: 'Ciencias Sociales',
    carreras: [
      'Liderazgo y Gestión Estratégica Internacional',
      'Derecho',
      'Relaciones Internacionales',
    ],
  },
  {
    area: 'Ciencias de la Salud',
    carreras: [
      'Médico Cirujano',
      'Médico Cirujano Dentista',
      'Nutrición',
      'Terapia Física y Rehabilitación',
      'Psicología',
      'Entrenamiento e Innovación Deportiva',
      'Biotecnología',
    ],
  },
  {
    area: 'Negocios',
    carreras: [
      'Mercadotecnia Estratégica',
      'Administración y Dirección de Empresas',
      'Dirección Financiera',
      'Finanzas y Contaduría Pública',
      'Negocios Internacionales',
      'Dirección del Deporte',
    ],
  },
  {
    area: 'Hospitality and Leisure',
    carreras: [
      'Gastronomía',
      'Dirección Internacional de Hoteles / Hospitality',
      'Turismo Internacional',
    ],
  },
  {
    area: 'Licenciaturas en Inglés',
    carreras: [
      'Medicine and Surgery',
      'Strategic Business Management',
      'International Business',
      'Gastronomy',
    ],
  },
  {
    area: 'Arte, Diseño y Comunicación',
    carreras: [
      'Arquitectura',
      'Diseño Industrial',
      'Diseño de Moda e Innovación',
      'Comunicación',
      'Dirección de Empresas de Entretenimiento',
      'Dirección de Animación y Efectos Visuales',
      'Ingeniería en Audio',
      'Música Contemporánea',
    ],
  },
];

// Lista aplanada de todas las carreras disponibles para selectores simples o búsquedas
export const TODAS_LAS_CARRERAS = AREAS_ACADEMICAS.flatMap((cat) => cat.carreras);

// Mapa de carrera a su respectiva área académica para métricas y marcadores agrupados
export const AREA_POR_CARRERA = AREAS_ACADEMICAS.reduce((acc, cat) => {
  cat.carreras.forEach((carrera) => {
    acc[carrera] = cat.area;
  });
  return acc;
}, {});
