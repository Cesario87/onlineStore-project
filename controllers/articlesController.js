const articles = require('../models/articles');

const renderArticles = async (req, res) => {
    console.log("hola");
    try {
        const allArticles = await articles.getAllArticles('name'); // nombre es el valor que quieres pasar como parámetro
        console.log(allArticles);
        res.status(200).render('prueba');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving articles');
    }
}

module.exports = {
    renderArticles
}