/** @format */

const express = require("express");
const { db } = require("../db");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  console.log(req.body.email, req.body.tenant_password);
  const email = req.body.email;
  const password = req.body.tenant_password;

  db.query(
    `SELECT * FROM tenant WHERE email = ? AND tenant_password = ?`,
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        // res.status(404).json({ err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password " });
      }
    }
  );
});

module.exports = router;
