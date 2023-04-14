require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

//Routes import
const customerAuthRoute = require("./routes/customerAuthRoute");
const rentalRideRoute = require("./routes/rentalRideRoute");
const carRideRoute = require("./routes/carRideRoute");
const bikeRideRoute = require("./routes/bikeRideRoute");
const driverAuthRoute = require("./routes/driverAuthRoute");

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
app.use(express.json());

app.use(cors());

app.use("/customer", customerAuthRoute);
app.use("/driver", driverAuthRoute);

//This is used for testing booking model
app.use("/rental-ride", rentalRideRoute);

app.use("/car-ride", carRideRoute);
app.use("/bike-ride", bikeRideRoute);

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
        console.log(`Backend server running on port ${process.env.PORT}`);
    });
});
