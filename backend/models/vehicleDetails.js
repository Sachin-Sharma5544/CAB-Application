const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    vehicleCompany: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    vehicleNum: {
        type: String,
        required: true,
    },
    regCertNum: {
        type: String,
        required: true,
    },
    vehicleColor: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
