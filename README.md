# Expresso Pray

Prototipo React (Vite). Flujo: consumo → carga (alas + ruleta) → resultado.

    npm install
    npm run dev

## Estructura

    src/
      App.jsx                  estado del flujo (vista actual + consumo)
      config.js                REVIEW_URL y duración de la carga
      utils/monto.js           regla café → Padre Nuestro, pancito → Ave María
      hooks/usePrefersReducedMotion.js
      components/              Logo (placeholder), Stepper, Wings, Roulette
      views/                   ConsumoView, CargaView, ResultadoView
      styles.css               tokens, modo oscuro y animaciones

## Pendientes
- Reemplazar `Logo.jsx` por el logo real.
- Poner el link de reseña en `config.js` cuando exista el perfil de Google Business.
- Si tienen alas en SVG (una por pose), reemplazar `Wings.jsx`.
