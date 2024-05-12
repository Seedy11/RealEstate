/** @format */

const express = require("express");
const { db } = require("../db");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  const Address = req.body.Address;
  const City = req.body.City;
  const State = req.body.State;
  const ZipCode = req.body.ZipCode;
  const bedrooms = req.body.bedrooms;
  const features = req.body.features;
  const descriptions = req.body.descriptions;
  const available_date = req.body.available_date;
  const bathrooms = req.body.bathrooms;

  const DBTable = {
    Address,
    State,
    City,
    ZipCode,
    bedrooms,
    features,
    descriptions,
    available_date,
    bathrooms,
  };
  db.query(`INSERT INTO rental_properties SET ?`, DBTable, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send("Values Inserted");
    }
  });
});

module.exports = router;
