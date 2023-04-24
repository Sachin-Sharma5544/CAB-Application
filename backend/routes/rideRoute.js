const express = require("express");
const router = express.Router();

//Controller import
const rideController = require("../controllers/rideController");
const authMiddleware = require("../middlewares/requireAuth");

router.use(authMiddleware.requireCustomerAuth);

router.post("/", rideController.postRide);
router.get("/", rideController.getRides);

router.post("/cancel/:id", rideController.postCancelRide);

router.get("/available", rideController.getAvailableRides);

module.exports = router;
