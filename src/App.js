import React, { useEffect } from 'react';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Random from './components/Random';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='App' style={{ marginTop: '50px' }}>
      <div className='container'>
        <Random />
      </div>
    </div>
  );
}

export default App;
