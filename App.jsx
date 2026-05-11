import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/schedule/overview')
      .then((res) => res.json())
      .then(setOverview)
      .catch((error) => console.error('Unable to load overview', error));
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="label">TimeWise AI</p>
          <h1>Intelligent Workforce Orchestration</h1>
        </div>
      </header>
      <main>
        <Dashboard overview={overview} />
      </main>
    </div>
  );
}

export default App;
