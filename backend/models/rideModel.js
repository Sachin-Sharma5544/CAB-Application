const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rideSchema = new Schema(
    {
        pickupLocation: {
            type: String,
            required: true,
        },
        dropLocation: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
        },
        distance: {
            type: String,
        },
        customer: {
            type: String,
        },
        rideCategory: {
            type: String,
        },
        driverId: {
            type: String,
        },
        rideStatus: { type: String },
    },
    { timestamps: true }
);

rideSchema.statics.addRide = async function (
    pickup,
    drop,
    rideDistance = "",
    customer_id,
    rideType,
    driver_id,
    rideDuration = ""
) {
    if (!pickup || !drop || !rideType) {
        throw Error("Please fill in all the fields");
    }

    if (!customer_id) {
        throw Error("Unauthorised to book a ride");
    }

    if (!driver_id) {
        throw Error(
            "Driving partners are not available. Please try after some time"
        );
    }

    const ride = await this.create({
        pickupLocation: pickup,
        dropLocation: drop,
        distance: rideDistance,
        customer: customer_id,
        rideCategory: rideType,
        driverId: driver_id,
        duration: rideDuration,
        rideStatus: "Booking Confirmed",
    });

    return ride;
};

module.exports = mongoose.model("Ride", rideSchema);
