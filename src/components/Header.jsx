import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png'
import { getItemLocalStorage } from '../services/localStorage'


export default function Header() {
  const user  = getItemLocalStorage('nickname');
  return(
    <header className="componentHeader">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="nicknameLogo">  
        <img src={`https://github.com/${user}.png`} alt={user} />
        <h5>{user}</h5>
      </div>
    </header>
  )
}