const Driver = require("../models/driverModel");

exports.postDriverLogin = async (req, res) => {
    res.send({ msg: "Driver login connection successful" });
};

exports.postDriverSignup = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await Driver.signup(email, password);
    res.send({ msg: "Driver signup connection successful" });
};
