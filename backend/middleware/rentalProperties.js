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
    console.log(file);
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post(
  "/",
  upload.array("Images", 10), // must match FormData key
  (req, res) => {
    try {
      const {
        Address,
        City,
        First_name,
        Last_name,
        Email,
        Postcode,
        Bedrooms,
        Phone_number,
        Descriptions,
        Available_date,
        Bathrooms,
        Country,
        State,
        Price,
      } = req.body;

      const imageUrls = req.files.map(
        (file) => `/uploadImage/${file.filename}`
      );

      const DBTable = {
        First_name,
        Last_name,
        Email,
        Phone_number,
        Available_date,
        Address,
        Postcode,
        City,
        Country,
        Bathrooms,
        Bedrooms,
        Descriptions,
        State,
        Price,
      };

      db.query(
        `INSERT INTO rental_properties SET ?`,
        DBTable,
        (err, result) => {
          if (err)
            return res.status(500).json({ error: "Property insert failed" });

          const propertyId = result.insertId;

          if (!imageUrls.length) return res.json({ propertyId });

          const imageValues = imageUrls.map((url) => [url, propertyId]);

          db.query(
            `INSERT INTO images (Image_url, PropertyID) VALUES ?`,
            [imageValues],
            () =>
              res.json({ message: "Property + images inserted", propertyId })
          );
        }
      );
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.get("/propertyList/:id", (req, res) => {
  const property_id = req.params.id;
  db.query(
    `SELECT * FROM  rental_properties WHERE PropertyID = ?`,
    property_id,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});
router.get("/citySearch", (req, res) => {
  const City = req.query.City;
  const Bedrooms = req.query.Bedrooms;
  db.query(
    `SELECT * FROM  rental_properties WHERE City = ? OR Bedrooms = ?
    `,
    [City, Bedrooms],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.put("/update", (req, res) => {
  const Address = req.body.Address;
  const City = req.body.City;
  const First_name = req.body.First_name;
  const Last_name = req.body.Last_name;
  const Email = req.body.Email;
  const Postcode = req.body.Postcode;
  const Bedrooms = req.body.bedrooms;
  const Phone_number = req.body.Phone_number;
  const Descriptions = req.body.descriptions;
  const Available_date = req.body.Available_date;
  const Bathrooms = req.body.bathrooms;
  const Country = req.body.Country;

  const DBTable = {
    First_name,
    Last_name,
    Email,
    Phone_number,
    Available_date,
    Address,
    Postcode,
    City,
    Country,
    Bathrooms,
    Bedrooms,
    Descriptions,
    // image_url,
  };

  db.query(
    `UPDATE rental_properties SET ? WHERE PropertyID`,
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
