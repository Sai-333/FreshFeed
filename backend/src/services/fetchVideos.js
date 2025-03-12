const axios = require('axios');
const pool = require('../db');
require('dotenv').config(); // ✅ Ensure dotenv is loaded

const apiKeys = process.env.YOUTUBE_API_KEY?.split(",") || []; // Prevent undefined error
let currentKeyIndex = 0;

if (apiKeys.length === 0) {
    console.error("No API keys found. Check your .env file.");
    process.exit(1); // Stop the server if no API keys are loaded
}


const fetchVideos = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: 'technology', // Change search query as needed
                type: 'video',
                order: 'date',
                publishedAfter: new Date(Date.now()).toISOString(),
                key: apiKeys[currentKeyIndex], // Uses API key from .env
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
            currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length; // Rotates API keys
        } else {
            console.error('Error fetching videos:', error.message);
        }
    }
};

module.exports = fetchVideos;
