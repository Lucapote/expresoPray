# Historial de Cambios (CHANGELOG.md)

## [0.2.0] - 08/11/2026

### Añadido
- **3ra Oración Devocional Sorpresa**: Modificado el cálculo en `src/utils/monto.js` para sumar una bendición especial aleatoria (*San Miguel Arcángel*, *Santo Tomás de Aquino*, *Ángel de la Guarda*, *Acto de Contrición*, *Credo*, *Salve*, *Gloria*) manteniendo la base de cafés (Padre Nuestro) y pancitos (Ave María).
- **Ruleta con Suspenso**: Configurado el objetivo de parada de la ruleta (`target`) en la 3ra oración aleatoria, enriqueciendo la animación de carga.
- **Congelamiento de Estado en App**: En `src/App.jsx`, el cálculo de la penitencia se fija en `handleDarGracias()` previniendo fluctuaciones durante la navegación.
- Verificación de compilación de producción con Vite (`npm run build`).

## [0.1.0] - 08/11/2026

### Añadido
- Creación de archivos de control de flujo y memoria de IA: `STATUS.md` y `CHANGELOG.md`.
- Creación de `.gitignore` estándar para Vite/React.
- **Catálogo de Oraciones (`src/data/oraciones.js`)**: Textos sagrados completos para todas las oraciones devocionales incluyendo a Santo Tomás de Aquino.
- **Modal de Lectura de Oración (`OracionModal.jsx`)**: Despliegue interactivo en `ResultadoView.jsx` con botón "Leer 📖".

### Ajustes Visuales y Ruleta
- **Algoritmo anti-duplicados en `Roulette.jsx`**: Evita oraciones idénticas en casillas contiguas.
- **Halo circular en `Wings.jsx`**: `overflow: visible` y degradado radial suave sin corte horizontal.
- **Eliminación de burbujas**: Retiro definitivo de partículas ascendentes.

### Seguridad y Dependencias
- Remediación de vulnerabilidades de `npm audit` (Vite 6.4.5, @vitejs/plugin-react 4.3.4, overrides de esbuild).
