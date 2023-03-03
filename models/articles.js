const pool = require('../utils/db_pgsql')

// Get all articles
const getAllArticles = async () => {
    let client, result;
    try {
        // Connect to the Postgres db and make the query
        client = await pool.connect();
        const data = await client.query('SELECT * FROM articles')
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release(); // Close the connection
    }
    return result
}

module.exports = {
    getAllArticles
}
