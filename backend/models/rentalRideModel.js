const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rentalSchema = new Schema({});

module.exports = mongoose.model("Rental", rentalSchema);
