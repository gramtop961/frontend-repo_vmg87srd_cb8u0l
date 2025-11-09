import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProcessingDebate from './components/ProcessingDebate';
import ResultsDashboard from './components/ResultsDashboard';
import HeaderBar from './components/HeaderBar';

const STATES = {
  idle: 'idle',
  processing: 'processing',
  complete: 'complete',
};

function App() {
  const [uiState, setUiState] = useState(STATES.idle);
  const [query, setQuery] = useState('');

  const handleInvestigate = (q) => {
    setQuery(q);
    setUiState(STATES.processing);
  };

  const handleProcessingDone = () => {
    setUiState(STATES.complete);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <HeaderBar />
      {uiState === STATES.idle && <HeroSection onInvestigate={handleInvestigate} />}
      {uiState === STATES.processing && <ProcessingDebate onDone={handleProcessingDone} />}
      {uiState === STATES.complete && (
        <ResultsDashboard
          data={undefined}
        />
      )}
    </div>
  );
}

export default App;
