const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
    {
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
        user_id: {
            type: String,
        },
    },
    { timestamps: true }
);

vehicleSchema.statics.addVehicle = async function (
    company,
    type,
    number,
    regCerNum,
    color,
    userId
) {
    if (!company || !type || !number || !regCerNum || !color) {
        console.log(company, type, number, regCerNum, color);
        throw Error("Please fill in all the fields");
    }

    const exists = await this.findOne({ vehicleNum: number });
    if (exists) {
        throw Error("Vehicle exists already");
    }

    const addedVeh = await this.create({
        vehicleCompany: company,
        vehicleType: type,
        vehicleNum: number,
        regCertNum: regCerNum,
        vehicleColor: color,
        user_id: userId,
    });

    return addedVeh;
};

module.exports = mongoose.model("Vehicle", vehicleSchema);
