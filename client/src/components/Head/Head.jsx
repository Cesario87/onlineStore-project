import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Header = () => {
  const numberCart = useSelector(state => state.numberItems);
  return (
    <header className="formatHead">
      <Link to="/"><h3>fakeStore©</h3></Link>
      {/* <Link to="/"><h1>Products</h1></Link> */}
      <Link to="/cart" title='Shopping cart' id='cartIconContainer'>
        <span id="numberCarrito">{numberCart}</span>
        <img id="carrito" src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="shopping cart" />
      </Link>
    </header>
  )
}

export default Header