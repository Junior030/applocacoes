import React from 'react';
import Logo from '../img/Logo.png'
import { getItemLocalStorage } from '../services/localStorage'


export default function Header() {
  const user  = getItemLocalStorage('nickname');
  return(
    <header className="componentHeader">
      <img src={Logo} alt="Logo" />
      <div className="nicknameLogo">  
        <img src={`https://github.com/${user}.png`} alt={user} />
        <h5>{user}</h5>
      </div>
    </header>
  )
}