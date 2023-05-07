import React, { useState, useEffect } from 'react';
import Cards from "./Card";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const List = ({ sortCriteria, sortOrder, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const numberItems = useSelector(state => state.numberItems);

  const [scroll, setScroll] = useState(0);

  const detectScroll = () => {
    setScroll(window.pageYOffset);
  }

  let cart = document.getElementById("cartFixed");
  useEffect(() => {
    window.addEventListener('scroll', detectScroll)

    if (scroll > 100) {
      cart.style.position = "fixed";
    }
    else if (cart !== null) {
      cart.style.position = "inherit";
    }
    return () => {
      window.removeEventListener('scroll', detectScroll)
    }
    // eslint-disable-next-line
  }, [scroll]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchArticles() {
      const url = `http://localhost:5000/articles?page=${currentPage}&sortCriteria=${sortCriteria}&sortOrder=${sortOrder}&q=${searchQuery}`;
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
  }, [sortCriteria, sortOrder, currentPage, searchQuery]);

  return (
    <div>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>←</button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>→</button>
      </div>
      <div id="listFormat">
      {articles.map((article) => (
        <Cards key={article.id} article={article} />
      ))}
      <Link id='cartFixed' to="/cart" title='Shopping cart'>
        {/* <span>{numberItems}</span> */}
      </Link>
      </div>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)}>←</button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>→</button>
      </div>
    </div>
  );
};

export default List;