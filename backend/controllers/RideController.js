const Ride = require("../models/RideModel");
const Driver = require("../models/driverModel");
const Vehicle = require("../models/vehicleDetails");

exports.postRide = async (req, res, next) => {
    const io = req.io;
    const { pickup, drop, rideType, distance, duration } = req.body;
    const driver = await Driver.find({ status: "Available" });

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
            distance,
            req.user._id,
            rideType,
            driverId,
            duration
        );
        const updatedDriver = await Driver.findByIdAndUpdate(
            driverId,
            { status: "Booked" },
            { new: true }
        );

        const bookings = await Ride.find({ driverId: driverId })
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

        io.emit("RideConfirmed", { driverEmail: updatedDriver.email });

        /* To update driver Booking details page */

        io.emit("NewDriverBooking", bookings);

        /*  */

        res.status(200).send({ ...ride, driverEmail: updatedDriver.email });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getRides = async (req, res, next) => {
    try {
        const rides = await Ride.find({
            customer: req.user._id,
        })
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

exports.postCancelRide = async (req, res, next) => {
    const io = req.io;
    const { id } = req.params;
    const { cancelledBy } = req.body;

    try {
        const ride = await Ride.cancelRide(id, cancelledBy);

        if (cancelledBy === "Customer Cancelled") {
            const bookings = await Ride.find({
                driverId: ride.driverId,
            })
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

            io.emit("CancelledBookingForDriver", bookings);
        }

        if (cancelledBy === "Driver Cancelled") {
            const rides = await Ride.find({
                customer: ride.customer,
            })
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

            io.emit("CancelledBookingForCustomer", rides);
        }
        res.status(200).send(ride);
    } catch (error) {
        console.log("i am exception");
        res.status(400).send({ error: error.message });
    }
};

exports.postStartRide = async (req, res, next) => {
    const io = req.io;
    const { id } = req.params;
    const { rideStart } = req.body;

    try {
        const ride = await Ride.startRide(id, rideStart);

        const rides = await Ride.find({ customer: ride.customer })
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

        io.emit("CustomerRideStarted", rides);

        res.status(200).send(ride);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.postEndRide = async (req, res, next) => {
    const io = req.io;
    const { id } = req.params;
    const { rideComplete } = req.body;

    try {
        const ride = await Ride.endRide(id, rideComplete);

        const rides = await Ride.find({ customer: ride.customer })
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

        io.emit("CustomerRideEnded", rides);

        res.status(200).send(ride);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
