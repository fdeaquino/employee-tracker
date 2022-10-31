const mysql = require('mysql2');

// connects to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: 'Hello123!',
        database: 'My_Business'
    }
);

module.exports = db;