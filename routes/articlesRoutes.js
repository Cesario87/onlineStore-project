const express = require('express');
const articlesRouter = express.Router();
const articlesController = require('../controllers/articlesController');

articlesRouter.get('/', articlesController.renderArticles);

module.exports = articlesRouter;