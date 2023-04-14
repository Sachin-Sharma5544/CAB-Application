const Booking = require("../models/bookingsModel");

exports.getRentalRide = async (req, res) => {
    const { pickup, drop } = req.body;
    console.log(pickup);
    console.log(drop);
    const booking = await Booking.create({
        pickupLocation: pickup,
        dropLocation: drop,
        distance: "",
        customer: "",
        rideCategory: "",
    });
    res.send({ msg: "rental ride route connection successful" });
};
