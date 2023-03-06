const pool = require('../utils/db_pgsql')

const getAllArticles = async (req) => {
    const page = req.query.page || 1;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;
    const sortCriteria = req.query.sortCriteria || 'name';
    const sortOrder = req.query.sortOrder || 'asc';
    const searchQuery = req.query.q || '';
    let client, result;
    try {
      // Connect to the Postgres db and make the query
      client = await pool.connect();
      const data = await client.query(
        `SELECT * FROM articles WHERE name ILIKE $1 ORDER BY ${sortCriteria} ${sortOrder} OFFSET ${offset} LIMIT ${pageSize}`,
        [`%${searchQuery}%`]
      );
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release(); // Close the connection
    }
    return result;
  };
  
module.exports = {
    getAllArticles
};
