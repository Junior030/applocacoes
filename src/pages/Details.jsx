import React, { useContext, useEffect } from 'react';
import AppLocacaoContext from '../context/AppLocacaoContext';
import Header from '../components/Header';
import { setItemLocalStorage, getItemLocalStorage } from '../services/localStorage';
import { Link } from 'react-router-dom';

function Details({ location: { state: { i } }}) {
  const { imoveis } = useContext(AppLocacaoContext);
  useEffect(() => {
    if(imoveis[i] !== undefined) setItemLocalStorage('imovel', imoveis[i]);
  })
  const {
    title,
    price,
    thumbnail,
    domain_id,
    attributes,
    location: {address_line, neighborhood, city, state}} = getItemLocalStorage('imovel');
  return (
    <section className="sectionImoveis">
      <Header />
      <div className="cardDetails">    
        <img src={thumbnail} alt={domain_id} />
        <h3>
          {`R$ ${price}`}
        </h3>
        <h5>{title}</h5>
        <p>{`${address_line}, ${neighborhood.name}, ${city.name}, ${state.name}`}</p>
        <div className="atributosCard">
          {attributes.map((atribute, index) => (
            <div key={index}>
              <span>{`${atribute.name} `}</span>
              <span>{`${atribute.value_name} | `}</span>            
            </div>
          ))}
        </div>
        <button>Entrar em contato</button>
        <Link to="/imoveis">
          Voltar          
        </Link>
      </div>
    </section>
  );
}

export default Details;