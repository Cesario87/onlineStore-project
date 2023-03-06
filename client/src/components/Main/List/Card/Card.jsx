import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux";

const Cards = ({ article }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={article.image} alt={article.name} style={{ width: '5%' }} />
      <h2>{article.name}</h2>
      <p>{article.price}</p>
      <p>{article.valoration}</p>
      <button onClick={()=>{
          dispatch(addToCart(article))
        }}>Add to cart</button>
    </div>
  );
};

export default Cards;

