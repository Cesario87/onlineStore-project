import React from "react";
import List from './List';
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
    </main>
  );
};

export default Main;