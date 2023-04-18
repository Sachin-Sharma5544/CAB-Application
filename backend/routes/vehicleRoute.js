const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

router.post("/new", vehicleController.postVehicle);
router.get("/", vehicleController.getVehicles);
router.delete("/:id", vehicleController.deleteVehicles);

module.exports = router;
