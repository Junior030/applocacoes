import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppLocacaoContext from '../context/AppLocacaoContext';
import Logo from '../img/Logo.png'

function Login() {
  const { setUser } = useContext(AppLocacaoContext);
  const [login, setLogin] = useState({});
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    validateFields(login);
  }, [login]);

  const validateFields = ({ email, senha = 1 }) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minPassword = 6;
  
    if ((regex.test(email)) && (senha.length >= minPassword)) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    setLogin({
      ...login,
      [id]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setUser(login);
    history.push('/imoveis');
  };

  return (
    <section className="sectionLogin">
      <header className="headerLogin">
        <img src={Logo} alt="Logo" />
      </header>
      <form className="formLogin">
        <h3>Reinvente seu jeito de morar</h3>
        <h4>Alugue seu imóvel sem drama</h4>
        <label htmlFor="email">
          <input type="email" id="email" placeholder="Email" onChange={ handleChange } />
        </label>
        <label htmlFor="senha">
          <input type="password" id="senha" placeholder="Senha" onChange={ handleChange } />
        </label>
        <button
          type="submit"
          onClick={ handleClick }
          disabled={ disableBtn }
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
