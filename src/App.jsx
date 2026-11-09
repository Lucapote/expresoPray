import { useState } from 'react';
import ConsumoView from './views/ConsumoView.jsx';
import CargaView from './views/CargaView.jsx';
import ResultadoView from './views/ResultadoView.jsx';
import { buildMonto } from './utils/monto.js';

export default function App() {
  const [view, setView] = useState('consumo'); // 'consumo' | 'carga' | 'resultado'
  const [consumo, setConsumo] = useState({ cafes: 1, pancitos: 1, tieneExamen: false });
  const [monto, setMonto] = useState(() => buildMonto(consumo));

  const handleDarGracias = () => {
    setMonto(buildMonto(consumo));
    setView('carga');
  };

  return (
    <main className="app">
      {view === 'consumo' && (
        <ConsumoView consumo={consumo} onChange={setConsumo} onSubmit={handleDarGracias} />
      )}
      {view === 'carga' && <CargaView target={monto.target} onDone={() => setView('resultado')} />}
      {view === 'resultado' && <ResultadoView lines={monto.lines} onRestart={() => setView('consumo')} />}
    </main>
  );
}
