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

router.post("/", upload.array("Images", 10), (req, res) => {
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

    const imageUrls = req.files.map((file) => `${file.filename}`);

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

    db.query(`INSERT INTO rental_properties SET ?`, DBTable, (err, result) => {
      if (err) return res.status(500).json({ error: "Property insert failed" });

      const propertyId = result.insertId;

      if (!imageUrls.length) return res.json({ propertyId });

      const imageValues = imageUrls.map((url) => [url, propertyId]);

      db.query(
        `INSERT INTO images (Image_url, PropertyID) VALUES ?`,
        [imageValues],
        () => res.json({ message: "Property + images inserted", propertyId })
      );
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/propertyList", (req, res) => {
  const sql = `
    SELECT 
      rental_properties.*,
      images.*
    FROM rental_properties
    LEFT JOIN images
      ON rental_properties.PropertyID = images.PropertyID
  `;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json(err);

    const properties = {};

    rows.forEach((row) => {
      if (!properties[row.PropertyID]) {
        properties[row.PropertyID] = {
          PropertyID: row.PropertyID,
          First_name: row.First_name,
          Last_name: row.Last_name,
          Email: row.Email,
          Phone_number: row.Phone_number,
          Available_date: row.Available_date,
          Address: row.Address,
          Postcode: row.Postcode,
          City: row.City,
          Country: row.Country,
          Bathrooms: row.Bathrooms,
          Bedrooms: row.Bedrooms,
          Descriptions: row.Descriptions,
          State: row.State,
          Price: row.Price,

          images: [],
        };
      }

      if (row.Image_url) {
        properties[row.PropertyID].images.push({
          Image_id: row.Image_id,
          Image_url: row.Image_url,
        });
      }
    });

    res.json(Object.values(properties));
  });
});
router.get("/propertyList/:id", (req, res) => {
  const PropertyID = req.params.id;

  const sql = `
    SELECT 
      rental_properties.*,
      images.image_id AS imageId,
      images.image_url AS imageUrl
    FROM rental_properties
    LEFT JOIN images 
      ON rental_properties.PropertyID = images.PropertyID
    WHERE rental_properties.PropertyID = ?
  `;

  db.query(sql, [PropertyID], (err, rows) => {
    if (err) return res.status(500).json(err);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Property not found" });
    }

    const property = {
      PropertyID: rows[0].PropertyID,
      First_name: rows[0].First_name,
      Last_name: rows[0].Last_name,
      Email: rows[0].Email,
      Phone_number: rows[0].Phone_number,
      Available_date: rows[0].Available_date,
      Address: rows[0].Address,
      Postcode: rows[0].Postcode,
      City: rows[0].City,
      Country: rows[0].Country,
      Bathrooms: rows[0].Bathrooms,
      Bedrooms: rows[0].Bedrooms,
      Descriptions: rows[0].Descriptions,
      State: rows[0].State,
      Price: rows[0].Price,
      images: [],
    };

    rows.forEach((row) => {
      if (row.imageUrl) {
        property.images.push({
          imageId: row.imageId,
          imageUrl: row.imageUrl,
        });
      }
    });

    res.json(property);
  });
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
