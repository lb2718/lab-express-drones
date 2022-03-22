// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  {
    name: "General Atomics MQ-9 Reaper",
    propellers: 4,
    maxSpeed: 18,
  },
  {
    name: "Combat Drone LN-7",
    propellers: 20,
    maxSpeed: 40,
  },
  {
    name: "Bolt 12",
    propellers: 6,
    maxSpeed: 20,
  },
];

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating movies from the DB: ${err}`)
  );
