const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool(process.env.MYSQL_URL ? {
    uri: process.env.MYSQL_URL,
    ssl: { rejectUnauthorized: false },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000
} : {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;
