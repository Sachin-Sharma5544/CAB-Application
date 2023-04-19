const express = require("express");
const router = express.Router();

//Controller import
const rideController = require("../controllers/rideController");

router.post("/", rideController.postRide);
router.get("/", rideController.getRide);

module.exports = router;
