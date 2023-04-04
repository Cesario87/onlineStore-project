const Article = require('../schemas/articles');

const renderArticles = async (req, res) => {
    const articles = await Article.findAll();
    res.status(200).json(articles);
}

module.exports = {
    renderArticles
};