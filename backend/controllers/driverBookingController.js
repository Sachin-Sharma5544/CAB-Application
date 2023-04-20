const Ride = require("../models/customerRideModel");

exports.getDriverBookings = async (req, res, next) => {
    try {
        const bookings = await Ride.find({ _id: req.user._id });
        console.log(bookings);
    } catch (error) {}
};
