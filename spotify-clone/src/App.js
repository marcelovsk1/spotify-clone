import React, { useEffect, useState } from 'react';
import './App.css';
import LoginView from './LoginView';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe();
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
