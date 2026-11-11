# Historial de Cambios (CHANGELOG.md)

## [0.6.0] - 11/11/2026

### Migración a Playfair Display y Optimización CSS
- **Tipografía Playfair Display**:
  - Reemplazo completo de `Cormorant Garamond` por `Playfair Display`.
  - **Navbar**: *"EXPRESSO AL CIELO"* en mayúsculas con `Playfair Display Black` (peso 900) e interletraje (`0.05em`) imitando el logotipo oficial.
  - **Textos fuera del Navbar**: Preguntas, títulos de resultado, oraciones y números configurados en **`Playfair Display Medium (500)`** en color azul marino (`var(--ink)`), evitando peso bold para garantizar descanso visual y sofisticación editorial.
- **Mayor Visibilidad del Logotipo**:
  - Aumentadas las dimensiones a 54px en cabecera y 80px en resultados, con marco refinado que permite apreciar la espada y la taza de café sin recortes agresivos.
- **Optimización y Refactorización de `styles.css`**:
  - Código modular, limpio y DRY, eliminando duplicidades y preservando la arquitectura de cero scroll.

## [0.5.0] - 11/11/2026

### Integración de Logo Oficial
- Reemplazo en `Logo.jsx` de SVG provisional por `logo.webp`.
- Enmarcado circular con aro dorado y favicon en `index.html`.

## [0.4.2] - 09/11/2026

### Jerarquía Tipográfica en Pantalla de Resultados
- Títulos de resultado destacados en azul marino.

## [0.4.1] - 09/11/2026

### Mejoras Visuales en Selector de Exámenes
- Color azul inicial (`var(--ink)`) con letras blancas y estado activo dorado con tilde blanco.

## [0.4.0] - 09/11/2026

### Añadido (Ayuda en Exámenes y Reglas de Base)
- Selector de exámenes sin emojis, Santo Tomás de Aquino obligatorio y base mínima de 1 Padre Nuestro y 1 Ave María.

## [0.3.0] - 08/11/2026

### Mejoras de Diseño y Ergonomía (Zero-Scroll & Armonización Tipográfica)
- Cero scroll global en `height: 100dvh` y `overflow: hidden`.
- Tarjetas de oración de fila única compactas con botón "Leer 📖".

## [0.2.0] - 08/11/2026

### Añadido
- 3ra oración sorpresa aleatoria y ruleta con objetivo dinámico.

## [0.1.0] - 08/11/2026

### Añadido
- Base de dependencias segura (Vite 6.4.5 y esbuild ^0.25.0).
- Catálogo devocional (`src/data/oraciones.js`) y modal de lectura (`OracionModal.jsx`).
- Ruleta anti-duplicados y halo circular continuo sin cortes.
