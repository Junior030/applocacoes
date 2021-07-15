import React, { useContext } from 'react';
import AppLocacaoContext from '../context/AppLocacaoContext';
import Header from '../components/Header';

function Details({ location: { state: { i } }}) {
  const { imoveis } = useContext(AppLocacaoContext);
  const {
    title,
    price,
    thumbnail,
    domain_id,
    location: {address_line, neighborhood, city, state}}=imoveis[i];
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
        <button>Entrar em contato</button>   
      </div>
    </section>
  );
}

export default Details;