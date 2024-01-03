import React from 'react';
import './LoginView.css';

function Login() {
  return (
    <div className='loginView'>
      <h1>Hi, I'm the login page</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
      alt="" className='SpotifyLogo' />
      <button>Login with Spotify</button>
      {/* Spotify logo */}
      {/* Login with Spotify Button */}
    </div>
  )
}

export default Login;
