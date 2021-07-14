import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppLocacaoContext from '../context/AppLocacaoContext';

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
    <section>
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" onChange={ handleChange } />
        </label>
        <label htmlFor="senha">
          Senha:
          <input type="password" id="senha" onChange={ handleChange } />
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
