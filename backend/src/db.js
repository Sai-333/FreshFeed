const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;

// In the above code, we are creating a new instance of the  Pool  class from the  pg  module and configuring it with the database connection 
// details from the environment variables. We are then connecting to the PostgreSQL database using the  connect  method. If the connection is successful,
//  we log a message to the console. If there is an error, we log the error message. Finally, we export the  pool  object so that it can be used in other
//  parts of our application.
 
