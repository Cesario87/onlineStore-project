import React, { useState, useEffect } from 'react';
import Cards from "./Card";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const List = ({ sortCriteria, sortOrder }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchArticles() {
      const url = `http://localhost:5000/articles?page=${currentPage}&sortCriteria=${sortCriteria}&sortOrder=${sortOrder}`;
      const response = await axios.get(url);
      const articlesWithUUID = response.data.map((article) => {
        return {
          ...article,
          id: uuidv4(),
        };
      });

      setArticles(articlesWithUUID);
    }
    fetchArticles();
  }, [sortCriteria, sortOrder, currentPage]);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <Cards key={article.id} article={article} />
      ))}
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>

  );
};

export default List;
