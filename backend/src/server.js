const express = require('express');
const cors = require('cors');
require('dotenv').config();

const videoRoutes = require('./routes/videoRoutes');
require('./cronJob'); // Import to schedule YouTube fetching

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', videoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// In the above code, we are creating an Express application and configuring it to use the  cors  middleware for handling cross-origin requests.
//  We are also importing the  videoRoutes  module, which contains the route handlers for fetching videos from the database. We are importing the
//   cronJob  module to schedule the YouTube video fetching cron job. We are defining a new route at the  /api  endpoint that delegates to the  
//   videoRoutes  module. We are starting the Express server on the specified port (defaulting to 5000) and logging a message to the console to indicate
//    that the server is running.