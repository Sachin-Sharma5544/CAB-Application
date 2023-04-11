const express = require("express");
const router = express.Router();

const driverAuthController = require("../controllers/driverAuthController");

router.post("/login", driverAuthController.postDriverLogin);
router.post("/signup", driverAuthController.postDriverSignup);

module.exports = router;
