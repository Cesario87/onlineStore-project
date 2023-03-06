const articles = require('../models/articles');

const renderArticles = async (req, res) => {
    try {
        const allArticles = await articles.getAllArticles(req);
        res.status(200).json(allArticles);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving articles');
    }
}

module.exports = {
    renderArticles
}