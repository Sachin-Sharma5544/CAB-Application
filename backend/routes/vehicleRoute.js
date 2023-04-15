const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

router.post("/new", vehicleController.postVehicle);

module.exports = router;
