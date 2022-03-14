import React, { useEffect } from 'react';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return <div className='App'>hello</div>;
}

export default App;
