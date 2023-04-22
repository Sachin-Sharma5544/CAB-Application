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
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Driver",
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
    if (!pickup) {
        throw Error("Please enter pickup location");
    }

    if (!drop) {
        throw Error("Please enter drop location");
    }

    if (!rideType) {
        throw Error("Please select Ride Type ");
    }

    if (!customer_id) {
        throw Error("Customer is not authorised to book a ride");
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
