const Vehicle = require("../models/vehicleDetails");

exports.getVehicles = async (req, res, next) => {
    try {
        const vehicles = await Vehicle.find({}).sort({ createdAt: -1 });
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
            color
        );
        res.status(200).send({ addedVeh });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
