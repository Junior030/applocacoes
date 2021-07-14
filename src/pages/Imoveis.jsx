import React, { useEffect, useContext } from 'react';
import requestApi from '../services/requestApi';
import AppLocacaoContext from '../context/AppLocacaoContext';
import renderButtonFilter from '../components/renderButtonFilter';

function Imoveis() {
  const { setImoveis, imoveis } = useContext(AppLocacaoContext);

  useEffect(() => {
    const response = async () => {
      const request = await requestApi();
      setImoveis(request);
    };
    response();
  });

  return (
    <section>
      <renderButtonFilter imoveis={ imoveis.children_categories }/>
    </section>
  );
}

export default Imoveis;
