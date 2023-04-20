const express = require("express");
const router = express.Router();

//Controller import
const driverBookingController = require("../controllers/driverBookingController");
const authMiddleware = require("../middlewares/requireAuth");

router.use(authMiddleware.requireDriverAuth);

router.get("/", driverBookingController.getDriverBookings);

module.exports = router;
