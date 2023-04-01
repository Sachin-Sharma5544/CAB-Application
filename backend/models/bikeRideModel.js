const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bikeSchema = new Schema({});

module.exports = mongoose.model("Bike", bikeSchema);
