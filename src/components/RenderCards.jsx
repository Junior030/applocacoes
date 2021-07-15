import React, { useEffect, useContext } from 'react';
import AppLocacaoContext from '../context/AppLocacaoContext';
import { requestApiImovel, requestType } from '../services/requestApi';

function RenderCards() {
  const { setImoveis, imoveis, filterCategory } = useContext(AppLocacaoContext);

  useEffect(() => {
    const Category = async (filterCategory) =>{      
      const { children_categories } = await requestType(filterCategory);      
      const id = children_categories[0].id;
      const request = await requestApiImovel(id);
      setImoveis(request.results);
    }
    Category(filterCategory);
  }, [filterCategory, setImoveis]);

  return (
    <aside className="containerCards">
      {imoveis.map(({
        title,
        id,
        price,
        thumbnail,
        domain_id,
        location: {address_line, neighborhood, city, state, zip_code}
      }) => (
        <div className="cardImovel" key={id}>
          <img src={thumbnail} alt={domain_id} />
          <h3>
            {`R$ ${price}`}
          </h3>
          <h5>{title}</h5>
          <p>{`${address_line}, ${neighborhood.name}, ${city.name}, ${state.name}`}</p>
        </div>
      ))}
    </aside>
  );
}

export default RenderCards;