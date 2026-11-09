# Estado del Proyecto (STATUS.md)

**Última actualización:** 09/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- Servidor dev activo en `http://localhost:5174/`.
- Nueva funcionalidad universitaria implementada:
  - Checkbox/toggle interactivo en [`ConsumoView.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/views/ConsumoView.jsx): *"¿Tienes un examen pronto? 🎓"*.
  - En [`monto.js`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/utils/monto.js), si el checkbox está activo, la 3ra oración devocional se fija a **Santo Tomás de Aquino** (patrón de los estudiantes y de la sabiduría). Si está inactivo, se sortea entre las bendiciones devocionales.
  - La ruleta frena en Santo Tomás de Aquino y en la pantalla de resultados se puede consultar el texto sagrado mediante el botón *"Leer 📖"*.
- Animación de alas mejorada con **perspectiva 3D y profundidad**:
  - Parámetros de capa `--l` y sentido de ala `--s` en [`Wings.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/components/Wings.jsx).
  - Rotaciones volumétricas `rotateY(...)`, `rotateX(...)`, `translateZ(...)` y sombras suaves por pluma en [`styles.css`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/styles.css).
- Compilación de producción exitosa en 2.34s (`npm run build`).

## 2. En qué estamos trabajando ahora
- Funcionalidad de examen universitario y alas 3D completadas y listas para validación del usuario.

## 3. Próximos Pasos Inmediatos
1. Probar en el navegador el flujo con y sin el check de examen marcado.
