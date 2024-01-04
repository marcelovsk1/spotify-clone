import React, { useEffect } from 'react';
import './App.css';
import LoginView from './LoginView';
import { getTokenFromUrl } from './spotify';

function App() {

  // Run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
  }, []);

  return (
    <div className="App">

      <LoginView />
    </div>
  );
}

export default App;
