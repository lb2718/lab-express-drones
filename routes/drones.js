const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find();
  // Iteration #2: List the drones
  router.get("/", async (req, res, next) => {
    const drones = await Drone.find();
    res.render("index", { drones });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
