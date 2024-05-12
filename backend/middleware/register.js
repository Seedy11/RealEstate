/** @format */

const express = require("express");
const { db } = require("../db");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  const tenant_id = req.body.tenant_id;
  const first_Name = req.body.first_Name;
  const Last_Name = req.body.Last_Name;
  const email = req.body.email;
  const tenant_password = req.body.tenant_password;

  const DBTable = {
    tenant_id: tenant_id,
    first_Name,
    Last_Name,
    email,
    tenant_password,
  };
  db.query(`INSERT INTO tenant SET ?`, DBTable, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send("Values Inserted");
    }
  });
});

module.exports = router;
