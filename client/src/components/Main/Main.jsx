import React from 'react';
import { Routes, Route } from "react-router-dom";
import List from './List';

const Main = ({ globalSortCriteria, globalSortOrder, handleGlobalSortCriteriaChange, handleGlobalSortOrderChange }) => {
  const updateSortCriteria = (criteria) => {
    handleGlobalSortCriteriaChange(criteria);
  };

  const updateSortOrder = (order) => {
    handleGlobalSortOrderChange(order);
  };

  return (
    <main className="main">
      <div>
        <button onClick={() => updateSortCriteria('name')}>
          Sort by Name
        </button>
        <button onClick={() => updateSortCriteria('price')}>
          Sort by Price
        </button>
        <button onClick={() => updateSortCriteria('valoration')}>
          Sort by Valoration
        </button>
      </div>
      <div>
        <button onClick={() => updateSortOrder('asc')}>
          Ascending
        </button>
        <button onClick={() => updateSortOrder('desc')}>
          Descending
        </button>
      </div>
      <Routes>
        <Route path="/" element={<List sortCriteria={globalSortCriteria} sortOrder={globalSortOrder} />} />
      </Routes>
    </main>
  );
};

export default Main;