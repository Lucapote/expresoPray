# Historial de Cambios (CHANGELOG.md)

## [0.4.2] - 09/11/2026

### Jerarquía Tipográfica en Pantalla de Resultados
- **Cormorant Garamond en Encabezado y Cierre**:
  - *"Tu monto de hoy"* y *"Plegarias procesadas con éxito"* actualizadas con la fuente serif `Cormorant Garamond`.
  - Tamaño destacado idéntico y prominente (`clamp(22px, 3.2vh, 24px)`), con peso negrita (`700`) y color azul marino (`var(--ink)`), dándoles protagonismo simétrico arriba y abajo de la lista de oraciones sin saturar el espacio.

## [0.4.1] - 09/11/2026

### Mejoras Visuales en Selector de Exámenes
- Color azul inicial (`var(--ink)`) con letras blancas en `Cormorant Garamond`.
- Estado activo dorado con tilde blanco.

## [0.4.0] - 09/11/2026

### Añadido (Ayuda en Exámenes y Reglas de Base)
- Selector de exámenes sin emojis, Santo Tomás de Aquino obligatorio y base mínima de 1 Padre Nuestro y 1 Ave María.

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
