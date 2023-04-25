const Driver = require("../models/driverModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    console.log(_id);
    return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "3d",
    });
};

exports.postDriverLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Driver.login(email, password);

        const token = createToken(user._id);
        res.status(200).send({
            email,
            name: `${user.firstName} ${user.lastName}`,
            token,
            userType: "driver",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.postDriverSignup = async (req, res) => {
    const { fname, lname, email, password } = req.body;

    try {
        const user = await Driver.signup(fname, lname, email, password);
        const token = createToken(user._id);
        res.status(200).send({
            email,
            name: `${user.firstName} ${user.lastName}`,
            token,
            userType: "driver",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
