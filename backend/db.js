/** @format */
const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "3740214s",
  database: "realestate",
});
// const db = mysql.createConnection({
//   user: "c6f6pqutydk47j5k",
//   host: "zpj83vpaccjer3ah.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
//   password: "rp8zdo9jj1xzrkby",
//   database: "wuv78il77xeccmn5",
// });

module.exports = { db, mysql };
