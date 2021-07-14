import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppLocacaoContext from './AppLocacaoContext';

function AppLocacoesProvider({ children }) {
  const [user, setUser] = useState({});
  const [imoveis, setImoveis] = useState({});

  const contextValue = {
    user,
    setUser,
    imoveis,
    setImoveis,
  }

  return (
    <AppLocacaoContext.Provider value={ contextValue }>
      { children }
    </AppLocacaoContext.Provider>
  );
}

AppLocacoesProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AppLocacoesProvider;
