import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

const Hit = ({ hit }) => (
  <article>
    <div>
      <img src={hit.image} alt={hit.name} />
      <h4>
        <Highlight hit={hit} attribute="name" tagname="mark" />
      </h4>
      <p>{hit.description}</p>
    </div>
  </article>
);

export default Hit;
