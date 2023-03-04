const express = require('express');
const articlesRouter = express.Router();
console.log('articlesRouter:', articlesRouter);
const articlesController = require('../controllers/articlesController');

articlesRouter.get('/articles', articlesController.renderArticles);

module.exports = articlesRouter;