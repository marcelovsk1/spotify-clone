import React from 'react';
import './LoginView.css';
import { loginUrl } from './spotify';


function Login() {
  return (
    <div className='loginView'>
      <img src="https://imagensfree.com.br/wp-content/uploads/2021/11/logo-spotify-verde-PNG.png"
      alt="" className='SpotifyLogo'
      />
      {/* eslint-disable-next-line */}
      <a href={loginUrl}>Login With Spotify</a>

    </div>
  )
}

export default Login;
