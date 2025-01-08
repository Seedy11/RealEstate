/** @format */

const express = require("express");
const { db } = require("../db");
const multer = require("multer");
const router = express.Router();
const path = require("path");

router.use(express.json());

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploadImage");
//   },

//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ destination: "/imageUpload" });

// router.post("/imageUpload", upload.single("image_url"), (req, res) => {
//   const image_url = req.file.image_url;
//   console.log("uh3", req.file.image_url);
//   const ImageTable = {
//     image_url,
//   };

//   db.query(`INSERT INTO images SET ?`, ImageTable, (err, result) => {
//     if (err) {
//       console.log("error", err);
//     } else {
//       res.send("Values Inserted");
//     }
//   });
// });
const upload = multer({ dest: "uploadImage" });

router.post("/imageUpload", upload.single("image"), (req, res) => {
  const image_url = req.file.filename;
  const ImageTable = {
    image_url,
  };
  // Save this data to a database probably
  db.query(`INSERT INTO images SET ?`, ImageTable, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      res.send("Values Inserted");
    }
  });

  // console.log("image", image_url);
  return res.send({ image_url });
});

router.post("/", (req, res) => {
  const Address = req.body.Address;
  const City = req.body.City;
  const First_name = req.body.First_name;
  const Last_name = req.body.Last_name;
  const Email = req.body.Email;
  const Postcode = req.body.Postcode;
  const Bedrooms = req.body.Bedrooms;
  const Phone_number = req.body.Phone_number;
  const Descriptions = req.body.Descriptions;
  const Available_date = req.body.Available_date;
  const Bathrooms = req.body.Bathrooms;
  const Country = req.body.Country;
  const State = req.body.State;
  const Price = req.body.Price;

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

router.get("/propertyList/:id", (req, res) => {
  const property_id = req.params.id;
  db.query(
    `SELECT * FROM  rental_properties WHERE property_id = ?
    `,
    property_id,
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
    `UPDATE rental_properties SET ? WHERE property_id`,
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
    `DELETE FROM rental_properties WHERE property_id = `,
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
