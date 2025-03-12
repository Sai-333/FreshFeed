const cron = require('node-cron');
const fetchVideos = require('./services/fetchVideos');

// Schedule fetching every 10 minutes
cron.schedule('*/10 * * * * *', fetchVideos);

console.log('YouTube video fetching cron job scheduled.');
// In the above code, we are using the  node-cron  library to create a cron job that runs the  fetchVideos  function every 10 seconds.
//  We are logging a message to the console to indicate that the YouTube video fetching cron job has been scheduled.