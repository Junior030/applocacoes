import React, { useState } from 'react';
import AppLocacaoContext from './AppLocacaoContext';

function AppLocacoesProvider({ children }) {
  const [user, setUser] = useState({});

  const contextValue = {
    user,
    setUser,
  }

  return (
    <AppLocacaoContext.Provider value={ contextValue }>
      { children }
    </AppLocacaoContext.Provider>
  );
}

export default AppLocacoesProvider;
