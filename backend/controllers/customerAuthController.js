const Customer = require("../models/customerModel");

exports.postCustomerLogin = async (req, res) => {
    res.send({ msg: "Customer login connection successful" });
};

exports.postCustomerSignup = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await Customer.signup(email, password);
    console.log(user);
    res.send({ msg: "Customer signup connection successful" });
};
