const express = require("express");
const router = express.Router();

//Controller import
const bikeRideController = require("../controllers/bikeRideController");

router.get("/", bikeRideController.getBikeRide);

module.exports = router;
