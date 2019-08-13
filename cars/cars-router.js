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

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const fruitData = req.body;
//     const [id] = await db("fruits").insert(fruitData);
//     const newFruitEntry = await db("fruits").where({ id });

//     res.status(201).json(newFruitEntry);
//   } catch (err) {
//     console.log("POST error", err);
//     res.status(500).json({ message: "Failed to store data" });
//   }
// });

module.exports = router;
