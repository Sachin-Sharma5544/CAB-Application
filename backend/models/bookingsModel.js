const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
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
});

module.exports = mongoose.model("Booking", bookingSchema);
