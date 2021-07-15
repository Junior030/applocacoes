import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AppLocacaoContext from '../context/AppLocacaoContext';


export default function RenderButtonFilter({ categories: { children_categories = [] } }) {
  const { setFilterCategory } = useContext(AppLocacaoContext);

  return (
      <section className="sectionButtonsFilter">
        {children_categories.map(({name, id}) => (
          <button
            type="button"
            name={ id }
            key={ id }
            onClick={ ({ target }) => setFilterCategory(target.name) }
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
