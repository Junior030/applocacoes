import React, { useContext } from 'react';
import AppLocacaoContext from '../context/AppLocacaoContext';
import Logo from '../img/Logo.png'

export default function Header() {
  const { user } = useContext(AppLocacaoContext)
  return(
    <header className="componentHeader">
      <img src={Logo} alt="Logo" />
      <p> {user.email} </p>
    </header>
  )
}