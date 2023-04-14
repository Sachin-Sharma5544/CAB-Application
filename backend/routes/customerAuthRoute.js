const requireAuth = require("../middlewares/requireAuth");

const express = require("express");
const router = express.Router();

//Controller import
const userController = require("../controllers/customerAuthController");

router.post("/login", userController.postCustomerLogin);
router.post("/signup", userController.postCustomerSignup);

module.exports = router;
