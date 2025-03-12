const axios = require('axios');
const pool = require('../db');

const fetchVideos = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: 'technology', // Change search query as needed
                type: 'video',
                order: 'date',
                publishedAfter: new Date(Date.now()).toISOString(),
                key: 'AIzaSyAI5oi0p3zHgIMjpEoHxoFrglsJ9hfC734', 
            }
        });

        for (const item of response.data.items) {
            await pool.query(
                'INSERT INTO videos (video_id, title, description, published_at, thumbnail_url) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (video_id) DO NOTHING',
                [item.id.videoId, item.snippet.title, item.snippet.description, item.snippet.publishedAt, item.snippet.thumbnails.default.url]
            );
        }
        console.log('Fetched and stored videos successfully');
    } catch (error) {
        if (error.response?.data?.error?.errors[0]?.reason === "quotaExceeded") {
            console.error("API Key limit reached, switching to next key...");
            currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length; // Rotate API key
        } else {
            console.error('Error fetching videos:', error.message);
        }
    }
};

module.exports = fetchVideos;
    
    // In the above code, we are using the  axios  library to make an HTTP GET request to the YouTube Data API. We are fetching the latest videos related to technology that were published in the last hour. You can change the search query and time frame as needed. 
    // The response from the API contains an array of video items. We are iterating over these items and inserting the video data into the  videos  table in our PostgreSQL database. We are using the  ON CONFLICT DO NOTHING  clause to avoid inserting duplicate videos. 
    // Finally, we are exporting the  fetchVideos  function so that it can be used in other parts of our application. 
    