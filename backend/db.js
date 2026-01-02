/** @format */
const mysql = require("mysql2");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "3740214s",
//   database: "realestate",
// });
const db = mysql.createConnection({
  user: "kkxx3o7a7clt9scs",
  host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  password: "ndsujugdgn9dhhqb",
  database: "rkm6fbz3v7tgaoos",
});

module.exports = { db, mysql };
