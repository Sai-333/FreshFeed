const express = require('express');
const pool = require('../db');

const router = express.Router();

// Fetch all videos without limit, sorted in reverse chronological order
router.get('/videos', async (req, res) => {
    const { search = '' } = req.query;

    try {
        const result = await pool.query(
            `SELECT * FROM videos WHERE title ILIKE $1 OR description ILIKE $1 ORDER BY published_at DESC`,
            [`%${search}%`]
        );

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
// In the above code, we are defining a new route handler for fetching videos from the database. The route handler listens for GET requests at the /videos endpoint.
//  It accepts an optional search query parameter that filters the videos based on the title or description containing the search term. We are using the ILIKE operator
//   to perform a case-insensitive search. We are querying the videos table in the PostgreSQL database and returning the results in reverse chronological order based on the
//    published_at column. If there is an error during the database query, we return a 500 Internal Server Error response with the error message. Finally, we export the router