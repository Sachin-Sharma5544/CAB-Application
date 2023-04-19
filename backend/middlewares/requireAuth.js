const jwt = require("jsonwebtoken");
const Customer = require("../models/customerModel");
const Driver = require("../models/driverModel");

exports.requireCustomerAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    console.log(authorization);

    if (!authorization) {
        return res
            .status(401)
            .send({ error: "Authorization token is required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await Customer.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Request is not authorised" });
    }
};

exports.requireDriverAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
        return res
            .status(401)
            .send({ error: "Authorization token is required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(_id, "hahaha");
        req.user = await Driver.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Request is not authorised" });
    }
};
