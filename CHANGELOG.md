# Historial de Cambios (CHANGELOG.md)

## [0.6.0] - 11/11/2026

### Migración a Playfair Display Black y Mimetización con el Logo
- **Playfair Display Black (Peso 900)**: Sustitución de `Cormorant Garamond` por `Playfair Display` en index.html y styles.css, aplicándola con peso 900 a títulos, preguntas, números y oraciones.
- **Paleta Cromática del Logotipo**:
  - Tinta café espresso oscuro profundo (`#2a170a`) en lugar de azul marino.
  - Fondo crema pergamino cálido (`#f7efe1`) y tarjetas marfil (`#fffbf4`).
  - Acentos oro ámbar tostado (`#c9933b` / `#a87424`) y halo celeste suave (`#8fc0d5`).
- **Visibilidad y Encuadre del Logo**:
  - Tamaño aumentado a 68px en cabecera y 96px en la pantalla de resultados.
  - Encuadre óptimo `object-position: 50% 28%` para centrar el rostro, las alas, la armadura y la taza del ángel en el círculo perimetral dorado.
  - Nombre de marca en mayúsculas editoriales: `EXPRESSO AL CIELO`.
- **Refactorización de `styles.css`**: Limpieza de reglas duplicadas y unificación de estilos conservando la ergonomía de cero scroll vertical.

## [0.5.0] - 11/11/2026

### Integración de Logo Oficial
- **Reemplazo en `Logo.jsx`**: Incorporación de `public/logo.webp` en sustitución del marcador SVG provisional.
- **Enmarcado Circular con Aro Dorado**: Estilo `.brand-logo` con `border-radius: 50%`, `object-fit: cover`, borde perimetral dorado (`border: 2px solid var(--gold-d)`) y leve sombra de realce.
- **Favicon**: Añadido enlace a `/logo.webp` en `index.html`.

## [0.4.2] - 09/11/2026

### Jerarquía Tipográfica en Pantalla de Resultados
- **Cormorant Garamond en Encabezado y Cierre**: *"Tu monto de hoy"* y *"Plegarias procesadas con éxito"* en tamaño destacado (`22-24px`), peso negrita (`700`) y color azul marino (`var(--ink)`).

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
