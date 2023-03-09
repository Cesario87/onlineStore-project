import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [globalSortCriteria, setGlobalSortCriteria] = useState('name');
  const [globalSortOrder, setGlobalSortOrder] = useState('asc');

  const handleGlobalSortOrderChange = (order) => {
    setGlobalSortOrder(order);
  };

  const handleGlobalSortCriteriaChange = (criteria) => {
    setGlobalSortCriteria(criteria);
  };

  return (
    <div className="App">
      <BrowserRouter>
       <Head/>
        <Main
          globalSortCriteria={globalSortCriteria}
          globalSortOrder={globalSortOrder}
          handleGlobalSortCriteriaChange={handleGlobalSortCriteriaChange}
          handleGlobalSortOrderChange={handleGlobalSortOrderChange}
        />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;