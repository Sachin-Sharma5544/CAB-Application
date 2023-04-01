const express = require("express");
const router = express.Router();

//Controller Import
const carRideController = require("../controllers/carRideController");

router.get("/", carRideController.getCarRide);

module.exports = router;
