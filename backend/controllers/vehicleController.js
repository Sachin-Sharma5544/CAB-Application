const Vehicle = require("../models/vehicleDetails");
const mongoose = require("mongoose");

exports.getVehicles = async (req, res, next) => {
    const io = req.io;
    try {
        const vehicles = await Vehicle.find({}).sort({ createdAt: -1 });
        io.emit("Vehicle", "Updated messgae");
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.postVehicle = async (req, res, next) => {
    const { company, vehType, number, rcNumber, color } = req.body;

    try {
        const addedVeh = await Vehicle.addVehicle(
            company,
            vehType,
            number,
            rcNumber,
            color,
            req.user._id
        );
        res.status(200).send({ addedVeh });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.deleteVehicles = async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ error: "No such vehicle record exists" });
    }

    try {
        const vehicle = await Vehicle.findOneAndDelete({ _id: id });
        if (!vehicle) {
            return res
                .status(400)
                .send({ error: "Can't delete as no such vehicle exists" });
        }
        res.status(200).send(vehicle);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
