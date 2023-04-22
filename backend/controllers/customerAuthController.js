const Customer = require("../models/customerModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "3d",
    });
};

exports.postCustomerLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Customer.login(email, password);
        const token = createToken(user._id);
        res.status(200).send({
            email,
            name: `${user.firstName} ${user.lastName}`,
            token,
            userType: "customer",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.postCustomerSignup = async (req, res) => {
    const { fname, lname, email, password } = req.body;

    try {
        const user = await Customer.signup(fname, lname, email, password);
        const token = createToken(user._id);

        res.status(200).send({
            fname,
            lname,
            email,
            token,
            userType: "customer",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
