const express = require("express");
const router = express.Router();

//Controller import
const driverBookingController = require("../controllers/driverBookingController");

router.get("/", driverBookingController.getRentalRide);

module.exports = router;
