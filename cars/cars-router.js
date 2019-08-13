const express = require("express");
const knex = require("knex");

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Could not retrieve list of cars from the db" });
    });
});

router.post("/", (req, res) => {
  const newCar = req.body;
  db("cars")
    .insert(newCar, "id")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Could not retrieve list of cars from the db" });
    });
});

module.exports = router;
