const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

router.get('/', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error;
        connection.query('SELECT * FROM Usuarios', (error, results) => {
            if (error) throw error;
            res.json(results);
            connection.release();
        });
    });
});

module.exports = router;

