import React from 'react';

const Cards = ({ article }) => {
  return (
    <div>
      <img src={article.image} alt={article.name} style={{ width: '5%' }} />
      <h2>{article.name}</h2>
      <p>{article.price}</p>
      <p>{article.valoration}</p>
    </div>
  );
};

export default Cards;

