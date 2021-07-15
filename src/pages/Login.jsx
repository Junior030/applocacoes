import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppLocacaoContext from '../context/AppLocacaoContext';
import Logo from '../img/Logo.png'
import { setItemLocalStorage } from '../services/localStorage';

function Login() {
  const { setUser } = useContext(AppLocacaoContext);
  const [login, setLogin] = useState({});
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    validateFields(login);
    localStorage.clear();
  }, [login]);

  const validateFields = ({ nickname = '', senha = 1 }) => {
    const minPassword = 6;
    const minNickname = 3;  
    if ((nickname.length >= minNickname) && (senha.length >= minPassword)) {
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
    setItemLocalStorage('nickname', login.nickname);
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
        <label htmlFor="nickname">
          <input type="text" id="nickname" placeholder="Nickname Github" onChange={ handleChange } />
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
