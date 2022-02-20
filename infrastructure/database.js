const mysql = require('mysql2/promise');

const { DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT } =
  process.env;

const pool = mysql.createPool({
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
});

module.exports = { pool };
