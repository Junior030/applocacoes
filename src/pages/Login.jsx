import React from 'react';

function Login() {
  return (
    <section>
      <form>
        <label htmlFor="email">
          <input type="email" name="" id="email" />
        </label>
        <label htmlFor="senha">
          <input type="password" name="" id="senha" />
        </label>
        <button type="submit">Logar</button>
      </form>
    </section>
  );
}

export default Login;
