const Ride = require("../models/rideModel");
const Driver = require("../models/driverModel");

exports.postRide = async (req, res, next) => {
    const { pickup, drop } = req.body;
    console.log(pickup);
    console.log(drop);
    const booking = await Ride.create({
        pickupLocation: pickup,
        dropLocation: drop,
        distance: "",
        customer: "",
        rideCategory: "",
        driver: "",
    });
    res.send({ message: " renamed from booking to ride" });
};

exports.getRide = async (req, res, next) => {
    const drivers = await Driver.find({ status: "available" });
    res.send(drivers);
};
