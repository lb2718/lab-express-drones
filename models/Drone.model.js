// Iteration #1
const mongoose = require("mongoose");

const dronesSchema = new mongoose.Schema({
  title: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drone = mongoose.model("Drone", dronesSchema);

module.exports = Drone;
