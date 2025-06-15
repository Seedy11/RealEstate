/** @format */
const mysql = require("mysql2");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "3740214s",
//   database: "realestate",
// });
const db = mysql.createConnection({
  user: "nzn7l3a28wv5aejf",
  host: "m60mxazb4g6sb4nn.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  password: "yt31lucbb7xprj6v",
  database: "h922x7sa5ja1gdkf",
});

module.exports = { db, mysql };
