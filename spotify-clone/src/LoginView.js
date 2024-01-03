import React from 'react';
import './LoginView.css';

function Login() {
  return (
    <div className='loginView'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
      alt="" className='SpotifyLogo'
      />
      {/* eslint-disable-next-line */}
      <a href="#">Login With Spotify</a>

    </div>
  )
}

export default Login;
