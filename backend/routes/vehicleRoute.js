const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");
const authMiddleware = require("../middlewares/requireAuth");

router.use(authMiddleware.requireDriverAuth);

router.post("/new", vehicleController.postVehicle);
router.get("/", vehicleController.getVehicles);
router.delete("/:id", vehicleController.deleteVehicles);

module.exports = router;
