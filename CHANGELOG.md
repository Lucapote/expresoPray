# Historial de Cambios (CHANGELOG.md)

## [0.7.2] - 11/11/2026

### Catálogo de Carreras y Áreas de Anáhuac Cancún
- **Nuevo Catálogo Declarativo (`src/data/carreras.js`)**: Creado el archivo de datos estáticos con todas las carreras de la Universidad Anáhuac Cancún organizadas por división: *Ingenierías, Ciencias Sociales, Ciencias de la Salud, Negocios, Hospitality and Leisure, Licenciaturas en Inglés, y Arte, Diseño y Comunicación*.
- **Estructura Flexible**: Exporta `AREAS_ACADEMICAS` para selectores con `<optgroup>`, `TODAS_LAS_CARRERAS` para búsquedas/autocompletados y `AREA_POR_CARRERA` para métricas o marcadores en vivo de la pastoral.

## [0.7.1] - 11/11/2026

### Respiro Visual y Tarjeta Devocional en ConsumoView
- **Bloque de Marca Hero (`.consumo-hero`)**: Logo de 120px integrado con el rótulo oficial `EXPRESSO AL CIELO` en mayúsculas con espaciado (`letter-spacing: 0.08em; font-weight: 900`), distinguiendo con claridad la identidad de la marca frente a las preguntas interactivas.
- **Tarjeta Contenedora Devocional (`.consumo-card`)**: Enmarcado armónico para los selectores de cafés y pancitos sobre superficie devocional con borde dorado sutil (`1px solid var(--gold-d)`), sombra ligera y divisor degradado (`.consumo-divider`), generando un respiro inmediato y evitando la colisión visual de títulos.
- **Alineación de Ancho**: Normalizado el ancho máximo a `370px` tanto para `.consumo-card` como para `.exam-card`, en perfecta consonancia con `.oracion-list` en la vista de resultados.

## [0.7.0] - 11/11/2026

### Unificación y Simetría Vertical en ConsumoView
- **Diseño 100% Vertical y Centrado**: Eliminada la barra horizontal superior izquierda (`.brand`) en `ConsumoView.jsx`, adoptando el flujo y jerarquía vertical simétrica de `ResultadoView.jsx`.
- **Identidad Central**: Logo circular oficial ampliado a **125px** centrado sobre el título `Expresso al Cielo` (`.resultado-header.serif`) en `Playfair Display`.
- **Estructura Compacta (`.consumo-group`)**: Las preguntas y steppers de cafés y pancitos se agruparon en columnas con `gap: 6px`, preservando los límites de altura móvil (**cero scroll**).
- **Acciones Pinned**: Botón "Dar gracias" colocado dentro del contenedor estándar `.actions`.

## [0.6.1] - 11/11/2026

### Aumento de Tamaño y Nitidez del Logo
- **Círculos Agrandados**:
  - Pantalla de resultados aumentada a **125px** (destacando al ángel, la espada, las alas y la taza con nitidez).
  - Cabecera aumentada a **64px**.
- **Anti-aliasing y Nitidez**: Aplicado `transform: translateZ(0)` y `-webkit-backface-visibility: hidden` para evitar bordes dentados y renderizado pixelado al escalar.
- **Calibración Cero Scroll**: Absorción del espacio vertical en los márgenes de `ResultadoView.jsx` para garantizar que la pantalla completa no requiera scroll en teléfonos móviles.

## [0.6.0] - 11/11/2026

### Migración a Playfair Display y Optimización CSS
- Reemplazo completo de `Cormorant Garamond` por `Playfair Display` (Black 900 en navbar, Medium 500 fuera de él).
- Código modular, limpio y DRY en `styles.css`.

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
