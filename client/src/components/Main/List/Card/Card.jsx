import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux';
import Valoration from './Valoration';

const Cards = ({ article }) => {
  const dispatch = useDispatch();
  return (
    <div className="cardsFormat">
      <img src={article.image} alt={article.name} />
      <h2>{article.name}</h2>
      <p>${article.price}</p>
      <Valoration valoration={article.valoration} className="gold-stars" />
      <button
        onClick={() => {
          dispatch(addToCart(article));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Cards;
