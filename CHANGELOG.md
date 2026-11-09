# Historial de Cambios (CHANGELOG.md)

## [0.4.0] - 09/11/2026

### Añadido (Ayuda en Exámenes y Reglas de Base)
- **Selector de Ayuda en Exámenes**: Añadido selector en `ConsumoView.jsx` con el texto *"¿Ocupas una ayuda en tus exámenes?"*, estilizado en tarjeta con borde dorado y casilla circular minimalista sin emojis.
- **Intercesión Obligatoria de Santo Tomás de Aquino**: Al marcar la casilla, la 3ra oración devocional se fija obligatoriamente a Santo Tomás de Aquino y la ruleta frena en ella.
- **Regla de Base de Consumo**:
  - Fijado mínimo de 1 café (no se permite 0).
  - De base se asigna siempre al menos 1 Padre Nuestro y 1 Ave María, sumando adicionales según cafés y pancitos.

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
