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
    },
    { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
