const jwt = require("jsonwebtoken");
const Customer = require("../models/customerModel");
const Driver = require("../models/driverModel");

exports.requireCustomerAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res
            .status(401)
            .send({ error: "Authorization token is required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = eq.user = Customer.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Request is not authorised" });
    }
};

exports.requireDriverAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res
            .status(401)
            .send({ error: "Authorization token is required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = Driver.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Request is not authorised" });
    }
};
