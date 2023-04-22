const express = require("express");
const router = express.Router();

//Controller import
const rideController = require("../controllers/RideController");
const authMiddleware = require("../middlewares/requireAuth");

router.use(authMiddleware.requireCustomerAuth);

router.post("/", rideController.postRide);
router.get("/", rideController.getRides);

router.get("/available", rideController.getAvailableRides);

module.exports = router;
