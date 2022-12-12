require("dotenv").config();

const mysql = require("mysql2/promise");
console.log(process.env.DB_HOST);
const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database
  .getConnection()
  .then((err) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("can't reach database", err);
  });

module.exports = database;
