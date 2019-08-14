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

// Get all cars from the db
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

// Add a new car to the db
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

//Delete a car from the db using it's ID
router.delete("/:id", (req, res) => {
  const carId = req.params.id;
  db("cars")
    .where("id", "=", carId)
    .del()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({ message: "Could not delete car from the db" });
    });
});

//Update a car in the db
router.put("/:id", (req, res) => {
  const carId = req.params.id;
  const changes = req.body;
  db("cars")
    .where("id", "=", carId)
    .update(changes)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({ message: "Could not update that car in the db" });
    });
});

module.exports = router;
