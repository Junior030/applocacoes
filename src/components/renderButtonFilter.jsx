import React from 'react';

export default function renderButtonFilter({imoveis: { children_categories }}) {  
  console.log(children_categories);
  return (
    <section>
      {children_categories.map(({name, id}) => (
        <button type="button" key={ id }>
          {name}
        </button>
      ))}
    </section>
  );

}