import React, { useEffect, useContext } from 'react';
import { requestApiCategories } from '../services/requestApi';
import AppLocacaoContext from '../context/AppLocacaoContext';
import RenderButtonFilter from '../components/RenderButtonFilter';

function Imoveis() {
  const { categories, setCategories } = useContext(AppLocacaoContext);

  useEffect(() => {
    const response = async () => {
      const request = await requestApiCategories();
      setCategories(request);
    };
    response();
  });

  return (
    <section>
      <RenderButtonFilter categories={ categories }/>
    </section>
  );
}

export default Imoveis;
