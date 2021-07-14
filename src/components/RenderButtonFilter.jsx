import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import { requestApiImovel, requestType } from '../services/requestApi';
import AppLocacaoContext from '../context/AppLocacaoContext';



export default function RenderButtonFilter({ categories: { children_categories = [] } }) {
  const { setImoveis } = useContext(AppLocacaoContext);
  
  const filterCategory = async ({ target }) => {
    const { children_categories } = await requestType(target.name);
    const { id } = children_categories.filter(({ name }) => name === "Aluguel")[0];
    const request = await requestApiImovel(id);
    setInterval(setImoveis(request.results), 3000);
  }

  return (
      <section>
        {children_categories.map(({name, id}) => (
          <button
            type="button"
            name={ id }
            key={ id }
            onClick={ filterCategory }
          >
            {name}
          </button>
        ))}
      </section>
  );
}

RenderButtonFilter.propTypes = {
  categories: PropTypes.shape({
    children_categories: PropTypes.array
  }).isRequired,
}
