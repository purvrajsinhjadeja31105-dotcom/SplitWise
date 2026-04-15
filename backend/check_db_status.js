const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkDB() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        const [rows] = await connection.query("SHOW TABLES LIKE 'users'");
        if (rows.length > 0) {
            console.log("SUCCESS: Users table exists.");
        } else {
            console.log("FAILURE: Users table does not exist.");
        }
    } catch (err) {
        console.log("ERROR: " + err.message);
    } finally {
        if (connection) await connection.end();
        process.exit(0);
    }
}

checkDB();
