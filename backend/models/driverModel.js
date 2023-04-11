const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const driverSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

driverSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Please fill in all the fields");
    }

    const user = await this.findOne({ email: email });
    if (!user) {
        throw Error("User with email doesn't exist");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Password does not match");
    }

    return user;
};

driverSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("Please fill in all the fields");
    }

    if (!validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Please enter a strong Password");
    }

    const exists = await this.findOne({ email: email });
    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const user = await this.create({ email: email, password: hashPass });

    return user;
};

module.exports = mongoose.model("Driver", driverSchema);
