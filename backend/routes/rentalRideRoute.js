const express = require("express");
const router = express.Router();

//Controller import
const rentalRideController = require("../controllers/rentalRideController");

router.post("/", rentalRideController.getRentalRide);

module.exports = router;
