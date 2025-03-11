const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/videos', async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    try {
        const result = await pool.query(
            `SELECT * FROM videos WHERE title ILIKE $1 OR description ILIKE $1 ORDER BY published_at DESC LIMIT $2 OFFSET $3`,
            [`%${search}%`, limit, offset]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
// In the above code, we are defining a new route for fetching videos from the database. The route accepts query parameters for pagination (page and limit) 
// and search filtering (search). We are using the ILIKE operator in the SQL query to perform a case-insensitive search on the title and description columns.
//  We are ordering the results by the published_at column in descending order and applying pagination using the LIMIT and OFFSET clauses. 
// If there is an error during the database query, we return a 500 status code with an error message in the response.