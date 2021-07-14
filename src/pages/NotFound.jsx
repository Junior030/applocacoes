import React from 'react';
import cavernaMam from '../img/cavernaMan.gif';
import { Link } from 'react-router-dom';

function NotFound() {  
  return (
    <section>
      <h2>Página não encontrada</h2>
      <div>
        <img src={ cavernaMam } alt="Homen da Caverna"/>
        <div>
          <p>Você parece perdido...</p>
          <p>Que tal voltar a locais civilizados...</p>
          <p>Mas antes, olhe o que acontece com o homem das cavernas...</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;