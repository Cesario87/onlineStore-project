import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import List from './List';
import Cart from './Cart';

const Main = ({ globalSortCriteria, globalSortOrder, handleGlobalSortCriteriaChange, handleGlobalSortOrderChange }) => {
  const [activeSortCriteria, setActiveSortCriteria] = useState(null);
  const [activeSortOrder, setActiveSortOrder] = useState(null);

  const updateSortCriteria = (criteria) => {
    handleGlobalSortCriteriaChange(criteria);
    setActiveSortCriteria(criteria);
  };

  const updateSortOrder = (order) => {
    handleGlobalSortOrderChange(order);
    setActiveSortOrder(order);
  };

  const isSortCriteriaActive = (criteria) => {
    return activeSortCriteria === criteria;
  };

  const isSortOrderActive = (order) => {
    return activeSortOrder === order;
  };

  return (
    <main className="mainFormat">
      <div id="botonera">
        <p>Sort by:</p>
        <button className={isSortCriteriaActive('name') ? 'active' : ''} onClick={() => updateSortCriteria('name')}>
          Name
        </button>
        <button className={isSortCriteriaActive('price') ? 'active' : ''} onClick={() => updateSortCriteria('price')}>
          Price
        </button>
        <button className={isSortCriteriaActive('valoration') ? 'active' : ''} onClick={() => updateSortCriteria('valoration')}>
          Stars ★
        </button>
        <span>|</span>
        <button id="buttonUp" className={isSortOrderActive('asc') ? 'active' : ''} onClick={() => updateSortOrder('asc')}>
          ⬆
        </button>
        <button id="buttonDown" className={isSortOrderActive('desc') ? 'active' : ''} onClick={() => updateSortOrder('desc')}>
          ⬇
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
