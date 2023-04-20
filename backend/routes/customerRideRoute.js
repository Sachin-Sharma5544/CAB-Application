const express = require("express");
const router = express.Router();

//Controller import
const customerRideController = require("../controllers/customerRideController");
const authMiddleware = require("../middlewares/requireAuth");

router.use(authMiddleware.requireCustomerAuth);

router.post("/", customerRideController.postRide);
router.get("/", customerRideController.getRides);

router.get("/available", customerRideController.getAvailableRides);

module.exports = router;
