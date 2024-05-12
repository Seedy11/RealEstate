/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const register = require("./middleware/register");
const login = require("./middleware/login");
const rentalProperties = require("./middleware/rentalProperties");

app.use(cors());
app.use(express.json());

app.use("/create", register);
app.use("/login", login);
app.use("/rentalProperties", rentalProperties);

app.listen(3001, () => {
  console.log("connected");
});
