/** @format */

const express = require("express");
const { db } = require("../db");
const multer = require("multer");
const router = express.Router();
const path = require("path");

router.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploadImage");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image_url"), (req, res) => {
  const Address = req.body.Address;
  const City = req.body.City;
  const State = req.body.State;
  const ZipCode = req.body.ZipCode;
  const bedrooms = req.body.bedrooms;
  const features = req.body.features;
  const descriptions = req.body.descriptions;
  const available_date = req.body.available_date;
  const bathrooms = req.body.bathrooms;
  const image_url = req.file;

  console.log("uh", req.file, image_url);

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
    // image_url,
  };
  // const ImageTable = {
  //   image_url,
  // };
  db.query(`INSERT INTO rental_properties SET ?`, DBTable, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send("Values Inserted");
    }
  });
  // db.query(`INSERT INTO images SET ?`, ImageTable, (err, result) => {
  //   if (err) {
  //     console.log("error", err);
  //   } else {
  //     res.send("Values Inserted");
  //   }
  // });
});

router.get("/propertyList", (req, res) => {
  db.query(`SELECT * FROM  rental_properties`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put("/update", (req, res) => {
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
    // image_url,
  };

  db.query(
    `UPDATE rental_properties SET ? WHERE PropertyID = ?`,
    DBTable,
    (err, result) => {
      if (err) {
        console.log("error", err);
      } else {
        res.send("Values update");
      }
    }
  );
});

router.delete(`/delete/:id`, (req, res) => {
  const id = req.params.id;
  db.query(
    `DELETE FROM rental_properties WHERE PropertyID = ?`,
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
module.exports = router;
