# Estado del Proyecto (STATUS.md)

**Última actualización:** 11/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- **Eliminación de Selección Celeste Móvil (Tap Highlight & Selection)**:
  - Desactivado el recuadro celeste nativo de Chrome/Android con `-webkit-tap-highlight-color: transparent` a nivel global y en controles interactivos.
  - Bloqueada la selección accidental de texto en toques repetitivos con `user-select: none`, `-webkit-user-select: none` y `-webkit-touch-callout: none`.
  - Anulados outlines en foco táctil de `.exam-card` y botones.
- **Repositorio Remoto GitHub Conectado y Sincronizado**:
  - `https://github.com/Lucapote/expresoPray.git`.
- Compilación de producción limpia y verificada (`npm run build`).

## 2. En qué estamos trabajando ahora
- Verificación del comportamiento táctil nativo sin recuadros de selección en dispositivos móviles.

## 3. Próximos Pasos Inmediatos
1. Probar en el teléfono móvil que el botón de exámenes y los steppers respondan con pulsación limpia sin sombras ni selecciones celestes.

