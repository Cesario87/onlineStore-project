const articles = require('../models/articles');

const renderArticles = async (req, res) => {
    try {
        const allArticles = await articles.getAllArticles('name'); // nombre es el valor que quieres pasar como parámetro
        console.log('ControllerArticles:', allArticles); 
        res.status(200).json(allArticles);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving articles');
    }
}

module.exports = {
    renderArticles
}