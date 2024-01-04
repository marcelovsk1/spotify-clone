import React, { useEffect, useState } from 'react';
import './App.css';
import LoginView from './LoginView';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('I have a token', token);
  }, [token]);

  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged in!</h1>
        ) : (
      <LoginView />
        )
    }
    </div>
  );
}

export default App;
