# Estado del Proyecto (STATUS.md)

**Última actualización:** 11/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- **Mejoras Devocionales, Navegación Modal y Unificación de Tema**:
  - Eliminado el prefijo `+` en la lista de oraciones de [`ResultadoView.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/views/ResultadoView.jsx).
  - Integrado manejo del botón "Atrás" del sistema en móviles (`popstate`) dentro de [`OracionModal.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/components/OracionModal.jsx) para cerrar el modal sin abandonar la aplicación.
  - Al presionar "Hecho" en el modal, la oración se marca con la píldora dorada `Rezada ✓` (`.oracion-pill--done`).
  - Erradicado el Dark Mode: eliminados estilos de tema oscuro y agregado `<meta name="color-scheme" content="light" />` en `index.html`.
- **Repositorio Remoto GitHub Conectado y Sincronizado**:
  - `https://github.com/Lucapote/expresoPray.git`.
- Compilación de producción limpia y verificada (`npm run build`).

## 2. En qué estamos trabajando ahora
- Validación visual de las oraciones sin `+`, el marcado de completado `Rezada ✓` y la navegación móvil.

## 3. Próximos Pasos Inmediatos
1. El usuario validará en su móvil la navegación con el botón "Atrás" y la consistencia en modo claro permanente.

