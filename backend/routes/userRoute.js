const express = require("express");
const router = express.Router();

//Controller import
const userController = require("../controllers/userController");

router.get("/", userController.getUser);

module.exports = router;
