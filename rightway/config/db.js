const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rightwaydb',
};

const pool = mysql.createPool(config);

module.exports = pool;