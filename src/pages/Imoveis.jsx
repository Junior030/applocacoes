import React, { useEffect, useContext } from 'react';
import { requestApiCategories } from '../services/requestApi';
import AppLocacaoContext from '../context/AppLocacaoContext';
import RenderButtonFilter from '../components/RenderButtonFilter';
import Header from '../components/Header';

function Imoveis() {
  const { categories, setCategories, imoveis } = useContext(AppLocacaoContext);

  useEffect(() => {
    const response = async () => {
      const request = await requestApiCategories();
      setCategories(request);
    };
    response();
  });

  return (
    <section className="sectionImoveis">
      <Header />
      <RenderButtonFilter categories={ categories }/>
      {imoveis.map(({
        title,
        id,
        price,
        thumbnail,
        domain_id,
        location: {address_line, neighborhood, city, state, zip_code}
      }) => (
        <div key={id}>
          <img src={thumbnail} alt={domain_id} />
          <h3>
            {`R$ ${price}`}
          </h3>
          <h5>{title}</h5>
          <p>{`${address_line}, ${neighborhood.name}, ${city.name}, ${state.name}`}</p>
        </div>
      ))}
    </section>
  );
}

export default Imoveis;
