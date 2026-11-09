# Historial de Cambios (CHANGELOG.md)

## [0.4.0] - 09/11/2026

### Añadido (Contexto Cafetería Universitaria)
- **Check de Examen Universitario**: Añadido toggle interactivo en `ConsumoView.jsx` (*"¿Tienes un examen pronto? 🎓"*).
- **Asignación Condicional de Santo Tomás de Aquino**:
  - Si el estudiante marca el check, la 3ra oración devocional es invariablemente la de **Santo Tomás de Aquino** (*Doctor Angélico*, patrón de los estudiantes), intercediendo por el entendimiento y la memoria.
  - La ruleta frena en Santo Tomás de Aquino y en el resultado final se puede leer la oración completa.
- **Profundidad y Perspectiva 3D en Alas (`Wings.jsx` y `styles.css`)**:
  - Incorporada perspectiva CSS (`perspective: 800px; transform-style: preserve-3d`).
  - Animación de plumas volumétrica con desfases en el eje Z (`translateZ`), giros simétricos en `rotateY` y rotación espacial `rotateX` al batir las alas.
  - Sombras sutiles de relieve en cada capa de plumaje.

## [0.3.0] - 08/11/2026

### Mejoras de Diseño y Ergonomía (Zero-Scroll & Armonización Tipográfica)
- Cero scroll global en `height: 100dvh` y `overflow: hidden`.
- Tarjetas de oración de fila única compactas con botón "Leer 📖".
- Armonización de tipografías con escalas fluidas `clamp(...)`.

## [0.2.0] - 08/11/2026

### Añadido
- 3ra oración sorpresa aleatoria y ruleta con objetivo dinámico.

## [0.1.0] - 08/11/2026

### Añadido
- Base de dependencias segura (Vite 6.4.5 y esbuild ^0.25.0).
- Catálogo devocional (`src/data/oraciones.js`) y modal de lectura (`OracionModal.jsx`).
- Ruleta anti-duplicados y halo circular continuo sin cortes.
