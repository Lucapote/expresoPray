# Estado del Proyecto (STATUS.md)

**Última actualización:** 09/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- Selector de ayuda para exámenes implementado en [`ConsumoView.jsx`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/views/ConsumoView.jsx):
  - Pregunta: *"¿Ocupas una ayuda en tus exámenes?"*.
  - Diseño sutil con borde dorado y casilla circular minimalista sin emojis.
- Regla de consumo base en [`monto.js`](file:///c:/Users/ASUS/OneDrive/Escritorio/Proyectos/expresso-pray/src/utils/monto.js):
  - Mínimo de 1 café (no baja a 0).
  - Siempre base de 1 Padre Nuestro y 1 Ave María.
  - Al marcar ayuda en exámenes, la 3ra oración es obligatoriamente **Santo Tomás de Aquino** y la ruleta frena en él.
- Cero scroll conservado en mobile y compilación de producción exitosa (`npm run build`).

## 2. En qué estamos trabajando ahora
- Funcionalidad de ayuda en exámenes completada y probada.

## 3. Próximos Pasos Inmediatos
1. El usuario validará la experiencia y comportamiento en el navegador.
