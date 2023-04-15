const Vehicle = require("../models/vehicleDetails");

exports.postVehicle = async (req, res, next) => {
    const { company, type, number, regCerNum, color } = req.body;
    try {
        const addedVeh = await Vehicle.addVehicle(
            company,
            type,
            number,
            regCerNum,
            color
        );
        res.status(200).send({ addedVeh });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
