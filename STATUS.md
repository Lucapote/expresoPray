# Estado del Proyecto (STATUS.md)

**Última actualización:** 12/11/2026

## 1. Foto Actual
- Proyecto Vite + React (`expresso-pray`).
- **Rama Activa**: `master` (rama principal unificada, sincronizada con GitHub y desplegada en Vercel).
- **Versión 0.8.0 Unificada y Desplegada**:
  - **Registro No Invasivo**: Captura ágil sin contraseña (teléfono de 10 dígitos, nombre, carrera de Anáhuac Cancún agrupada por área académica y correo opcional), con persistencia reactiva en `localStorage` (`useEstudiante`).
  - **Gamificación Devocional Reactiva**: Marcador *"Estás X oraciones más cerca del cielo"*, que suma **únicamente** las oraciones que el estudiante marca como `Rezada ✓` en tiempo real.
  - **Ranking por Áreas Académicas Limpio**: Ranking inicializado en blanco (0 oraciones por área), acumulando únicamente oraciones reales de los alumnos. Preparado con endpoints serverless (`/api/ranking`, `/api/ofrendas`) y respaldo local offline.
  - **Estandarización de Botones Inferiores**: Contenedor `.actions` centrado a `max-width: 370px`; botones (*"Ver mi marcador"* / *"Sumar a mi carrera"* y *"Dejar tu reseña"*) estandarizados con ancho uniforme (100%), altura de 48px, curvatura de 24px y tipografía `Nunito` 700 16px.
  - **Comunidad Pastoral**: Botón directo para unirse a la Comunidad de WhatsApp de la Pastoral Universitaria Anáhuac Cancún.
- Compilación de producción limpia y verificada.

## 2. En qué estamos trabajando ahora
- Fase de registro y gamificación culminada, unificada en `master` y publicada en Vercel.

## 3. Próximos Pasos Inmediatos
1. Monitorear el despliegue automático en Vercel.
2. (Opcional) Vincular las credenciales de Supabase en producción para sincronización cloud multi-dispositivo.
