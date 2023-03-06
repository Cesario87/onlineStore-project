const pool = require('../utils/db_pgsql')

const getAllArticles = async (req) => {
    console.log(req.query);
    const page = req.query.page;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;
    const sortCriteria = req.query.sortCriteria || 'name';
    const sortOrder = req.query.sortOrder || 'asc';
    let client, result;
    try {
        // Connect to the Postgres db and make the query
        client = await pool.connect();
        const data = await client.query(
          `SELECT * FROM articles ORDER BY ${sortCriteria} ${sortOrder} OFFSET ${offset} LIMIT ${pageSize}`
        );
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release(); // Close the connection
    }
    return result
};


module.exports = {
    getAllArticles
}
