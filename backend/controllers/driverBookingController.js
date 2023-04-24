const Ride = require("../models/RideModel");

exports.getDriverBookings = async (req, res, next) => {
    console.log(req.user._id);
    try {
        const bookings = await Ride.find({ driverId: req.user._id })
            .populate({
                path: "customer",
                model: "Customer",
                select: "firstName lastName",
            })
            .sort({ createdAt: -1 });
        console.log(bookings);
        res.status(200).send(bookings);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
