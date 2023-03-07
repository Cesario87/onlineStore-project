import React from 'react';
import { Routes, Route } from "react-router-dom";
import List from './List';
import Cart from './Cart';

const Main = ({ globalSortCriteria, globalSortOrder, handleGlobalSortCriteriaChange, handleGlobalSortOrderChange }) => {
  const updateSortCriteria = (criteria) => {
    handleGlobalSortCriteriaChange(criteria);
  };

  const updateSortOrder = (order) => {
    handleGlobalSortOrderChange(order);
  };

  return (
    <main className="mainFormat">
      <div id="botonera">
        <p>Sort by:</p>
          <button onClick={() => updateSortCriteria('name')}>
            Name
          </button>
          <button onClick={() => updateSortCriteria('price')}>
            Price
          </button>
          <button onClick={() => updateSortCriteria('valoration')}>
            Valoration
          </button>
          <button onClick={() => updateSortOrder('asc')}>
            ⬆️
          </button>
          <button onClick={() => updateSortOrder('desc')}>
            ⬇️
          </button>
      </div>
      <Routes>
        <Route path="/" element={<List sortCriteria={globalSortCriteria} sortOrder={globalSortOrder} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;