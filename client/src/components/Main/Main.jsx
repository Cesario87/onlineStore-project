import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handleSortCriteriaChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchArticles() {
      const url = `http://localhost:5000/articles?page=${currentPage}`;
      console.log('Current Page:', currentPage);
      console.log('Fetching:', url);
      const response = await axios.get(`http://localhost:5000/articles?page=${currentPage}`);
      const articlesWithUUID = response.data.map((article) => {
        return {
          ...article,
          id: uuidv4(),
        };
      });

      const sortedArticles = articlesWithUUID.sort((a, b) => {
        let result = 0;
        switch (sortCriteria) {
          case 'name':
            result = a.name.localeCompare(b.name);
            break;
          case 'price':
            result = a.price - b.price;
            break;
          case 'valoration':
            result = a.valoration - b.valoration;
            break;
          default:
            result = 0;
        }
        return sortOrder === 'asc' ? result : -result;
      });

      setArticles(sortedArticles);
    }
    fetchArticles();
  }, [sortCriteria, sortOrder, currentPage]);

  return (
    <div>
      <h1>Articles</h1>
      <div>
        <div>
          <button onClick={() => handleSortCriteriaChange('name')}>
            Sort by Name
          </button>
          <button onClick={() => handleSortCriteriaChange('price')}>
            Sort by Price
          </button>
          <button onClick={() => handleSortCriteriaChange('valoration')}>
            Sort by Valoration
          </button>
        </div>
        <div>
          <button onClick={() => handleSortOrderChange('asc')}>
            Ascending
          </button>
          <button onClick={() => handleSortOrderChange('desc')}>
            Descending
          </button>
        </div>
        {articles.map((article) => (
          <div key={article.id}>
            <img
              src={article.image}
              alt={article.name}
              style={{ width: '5%' }}
            />
            <h2>{article.name}</h2>
            <p>{article.price}</p>
            <p>{article.valoration}</p>
          </div>
        ))}
        <div>

          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          <span>Page {currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      </div>
    </div>

  );
};

export default Main;


