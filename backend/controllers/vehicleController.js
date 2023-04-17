const Vehicle = require("../models/vehicleDetails");

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
