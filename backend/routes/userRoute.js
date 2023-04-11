const express = require("express");
const router = express.Router();

//Controller import
const userController = require("../controllers/userController");

router.get("/login", userController.getUserLogin);
router.get("/signup", userController.getUserSignup);

module.exports = router;
