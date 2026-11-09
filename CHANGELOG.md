# Historial de Cambios (CHANGELOG.md)

## [0.3.0] - 08/11/2026

### Mejoras de Diseño y Ergonomía (Zero-Scroll & Armonización Tipográfica)
- **Cero Scroll Global**: Fijado `.app` en `height: 100dvh` y `overflow: hidden`, asegurando que toda la interfaz quepa de forma natural en el viewport de cualquier dispositivo móvil sin barra de scroll vertical.
- **Armonización de Fuentes**: Estandarizados los tamaños de título (`h2`) y texto base en todas las vistas mediante escalas fluidas con `clamp(...)`.
- **Tarjetas de Oración de Fila Única**: Rediseñado el listado en `ResultadoView.jsx` con tarjetas compactas que mantienen `+ 1 San Miguel Arcángel` y el badge `Leer 📖` en una sola línea horizontal sin cortes abruptos.
- **Distribución Espacial Equilibrada**: Reducción del logo a 60px y empaquetado de botones inferiores con `justify-content: space-between`.

## [0.2.0] - 08/11/2026

### Añadido
- **3ra Oración Devocional Sorpresa**: Modificado el cálculo en `src/utils/monto.js` para sumar una bendición especial aleatoria (*San Miguel Arcángel*, *Santo Tomás de Aquino*, etc.).
- **Ruleta con Suspenso**: Objetivo de la ruleta fijado en la 3ra oración aleatoria.

## [0.1.0] - 08/11/2026

### Añadido
- Creación de archivos de control: `STATUS.md`, `CHANGELOG.md` y `.gitignore`.
- Catálogo litúrgico en `src/data/oraciones.js` y modal de lectura `OracionModal.jsx`.
- Corrección de ruleta anti-duplicados y halo circular continuo en `Wings.jsx`.
- Remediación de seguridad npm (Vite 6.4.5 y esbuild ^0.25.0).
