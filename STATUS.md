# Estado del Proyecto (STATUS.md)

**Última actualización:** 08/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- Servidor dev corriendo en `http://localhost:5174/`.
- Resuelto el problema de scroll y salto de líneas en pantalla:
  - Marco fijado a `height: 100dvh` con `overflow: hidden`, garantizando **0 scroll** en cualquier dispositivo móvil o pantalla.
  - Tipografías armonizadas proporcionalmente con `clamp(...)` en títulos y textos en todas las vistas.
  - Diseño de tarjetas devocionales de fila única en [`ResultadoView.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/views/ResultadoView.jsx): cada oración (incluso las largas como *San Miguel Arcángel*) se muestra en una sola línea elegante junto a su botón *"Leer 📖"*.
  - Logo optimizado a 60px y espaciados dinámicos distribuidos limpiamente entre cabecera, contenido central y botones inferiores.

## 2. En qué estamos trabajando ahora
- Ajuste de diseño, tipografía y eliminación de scroll completado.
- Servidor activo para validación del usuario.

## 3. Próximos Pasos Inmediatos
1. El usuario revisará la vista en el navegador para comprobar el ajuste espacial y la ausencia de scroll.
