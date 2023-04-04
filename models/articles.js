const { db } = require('../config/sqlConnection');

const getAllArticles = async (req) => {
  const page = req.query.page || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;
  const sortCriteria = req.query.sortCriteria || 'name';
  const sortOrder = req.query.sortOrder || 'asc';
  const searchQuery = req.query.q || '';
  let result;
  try {
    // Connect to the Postgres db and make the query
    const data = await db.query(
      `SELECT * FROM articles WHERE name ILIKE $1 ORDER BY ${sortCriteria} ${sortOrder} OFFSET ${offset} LIMIT ${pageSize}`,
      { bind: [`%${searchQuery}%`] }
    );
    result = data[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
  return result;
};

module.exports = {
  getAllArticles
};
