# Historial de Cambios (CHANGELOG.md)

## [0.4.0] - 09/11/2026

### Añadido
- **Aleteo Tridimensional en Alas (`Wings.jsx` + `styles.css`)**:
  - Agrupación modular en `<g className="wing-side wing-left">` y `<g className="wing-side wing-right">`.
  - Animación 3D con `perspective: 700px`, `transform-style: preserve-3d` y rotación simétrica en el eje Y (`rotateY(±18deg)`) durante la fase de descenso del aleteo.
  - Inclinación sutil de cabeceo (`rotateX(5deg)`) en la flotación vertical.
  - Soporte de reducción de movimiento en la media query `prefers-reduced-motion`.
- Verificación de compilación de producción con Vite (`npm run build`).

## [0.3.0] - 08/11/2026

### Mejoras de Diseño y Ergonomía (Zero-Scroll & Armonización Tipográfica)
- Cero Scroll Global con `height: 100dvh` y `overflow: hidden`.
- Armonización de fuentes y tarjetas compactas de oraciones de fila única.

## [0.2.0] - 08/11/2026

### Añadido
- 3ra Oración Devocional Sorpresa y ruleta con suspenso.

## [0.1.0] - 08/11/2026

### Añadido
- Catálogo litúrgico, modal de lectura, corrección de halo circular continuo y remediación de dependencias.
