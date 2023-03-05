import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [articles, setArticles] = useState([]);
  console.log('MainArticles:', articles);
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get('http://localhost:5000/articles');
      const articlesWithUUID = response.data.map(article => {
        return {
          ...article,
          id: uuidv4() // Agregamos un nuevo campo "id" con un UUID único
        }
      })
      setArticles(articlesWithUUID);
    }
    fetchArticles();
    
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <div>
      {articles.map(article => (
        <div key={article.id}>
          <img src={article.image} alt={article.name} style={{ width: '15%' }} />
          <h2>{article.name}</h2>
          <p>{article.price}</p>
          <p>{article.valoration}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Main;


