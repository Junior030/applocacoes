import React, { useEffect, useContext } from 'react';
import { requestApiCategories } from '../services/requestApi';
import AppLocacaoContext from '../context/AppLocacaoContext';
import RenderButtonFilter from '../components/RenderButtonFilter';
import Header from '../components/Header';
import RenderCards from '../components/RenderCards';


function Imoveis() {
  const { categories, setCategories } = useContext(AppLocacaoContext);
  useEffect(() => {
    const response = async () => {
      const request = await requestApiCategories();
      setCategories(request);
    };
    response();
  }, [setCategories]);

  return (
    <section className="sectionImoveis">
      <Header />
      <RenderButtonFilter categories={ categories }/>
      <RenderCards />
    </section>
  );
}

export default Imoveis;
