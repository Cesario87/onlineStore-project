const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Article = db.define('Article', {
  name: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  valoration: {
    type: DataTypes.NUMERIC,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  brand: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
    db,
    modelName: 'Article',
    tableName: 'articles',
});

Article.sync();

module.exports = Article;