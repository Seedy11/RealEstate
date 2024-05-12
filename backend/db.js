/** @format */
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "localuser",
  host: "127.0.0.1",
  password: "Lorenzo12!",
  database: "realestate",
});

module.exports = { db, mysql };
