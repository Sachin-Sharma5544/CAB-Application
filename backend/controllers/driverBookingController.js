const Ride = require("../models/RideModel");

exports.getDriverBookings = async (req, res, next) => {
    try {
        const bookings = await Ride.find({ driverId: req.user._id })
            .populate({
                path: "customer",
                model: "Customer",
                select: "firstName lastName",
            })
            .populate({
                path: "driverId",
                model: "Driver",
                select: "firstName lastName email -_id",
                populate: {
                    path: "vehicleId",
                    model: "Vehicle",
                    select: "vehicleCompany vehicleNum vehicleColor -_id",
                },
            })
            .sort({ createdAt: -1 });

        res.status(200).send(bookings);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
