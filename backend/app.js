require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

//Routes import
const userRoute = require("./routes/userRoute");
const rentalRideRoute = require("./routes/rentalRideRoute");
const carRideRoute = require("./routes/carRideRoute");
const bikeRideRoute = require("./routes/bikeRideRoute");

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
app.use(express.json());

app.use(cors());

app.use("/user", userRoute);
app.use("/rental-ride", rentalRideRoute);
app.use("/car-ride", carRideRoute);
app.use("/bike-ride", bikeRideRoute);

app.listen(process.env.PORT, () => {
    console.log(`Backend server running on port ${process.env.PORT}`);
});
