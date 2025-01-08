/** @format */
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "az1u4gtclda8hzqf",
  host: "fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  password: "tuhjfeag2xyuvv2r",
  database: "gw4rxltzkpc7lot9",
});
//mysql://az1u4gtclda8hzqf:tuhjfeag2xyuvv2r@fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/gw4rxltzkpc7lot9
module.exports = { db, mysql };
