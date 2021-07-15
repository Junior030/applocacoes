import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppLocacaoContext from './AppLocacaoContext';

function AppLocacoesProvider({ children }) {
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState({});
  const [imoveis, setImoveis] = useState([]);
  const [filterCategory, setFilterCategory] = useState('MLB1459');


  const contextValue = {
    user,
    setUser,
    categories,
    setCategories,
    imoveis,
    setImoveis,
    filterCategory,
    setFilterCategory,
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
