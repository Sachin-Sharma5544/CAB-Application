const Ride = require("../models/rideModel");
const Driver = require("../models/driverModel");
const Vehicle = require("../models/vehicleDetails");

exports.postRide = async (req, res, next) => {
    const { pickup, drop, rideType } = req.body;
    const driver = await Driver.find({ status: "available" });
    console.log(driver);
    if (!driver.length > 0) {
        return res
            .status(400)
            .send({ error: "No drivers are currently available in your area" });
    }

    const driverId = driver[0]._id;
    try {
        const ride = await Ride.addRide(
            pickup,
            drop,
            "",
            req.user._id,
            rideType,
            driverId,
            ""
        );
        const updatedDriver = await Driver.findByIdAndUpdate(
            driverId,
            { status: "Booked" },
            { new: true }
        );

        res.status(200).send({ ...ride, driverEmail: updatedDriver.email });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getRides = async (req, res, next) => {
    try {
        const rides = await Ride.find({ customer: req.user._id }).populate({
            path: "driverId",
            select: "firstName lastName",
        });
        console.log(rides);

        res.status(200).send(rides);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getAvailableRides = async (req, res, next) => {
    const drivers = await Driver.find({ status: "available" });
    const vehicles = await Vehicle.find({ user_id: req.user_id });
    console.log(vehicles);
    res.send(drivers);
};
