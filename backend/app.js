require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

//Routes import
const customerAuthRoute = require("./routes/customerAuthRoute");
const rentalRideRoute = require("./routes/rentalRideRoute");
const carRideRoute = require("./routes/carRideRoute");
const bikeRideRoute = require("./routes/bikeRideRoute");
const driverAuthRoute = require("./routes/driverAuthRoute");
const vehicleRoute = require("./routes/vehicleRoute");

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use(express.json());

app.use(cors());

//This is used for testing booking model
app.use("/rental-ride", rentalRideRoute);

app.use("/car-ride", carRideRoute);
app.use("/bike-ride", bikeRideRoute);

//These are working routes added as per the feature
app.use("/vehicle", vehicleRoute);
app.use("/customer", customerAuthRoute);
app.use("/driver", driverAuthRoute);

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Database connected successfully");
    server.listen(process.env.PORT, () => {
        console.log(`Backend server running on port ${process.env.PORT}`);
    });
});

//Socket Setup
io.on("connection", (socket) => {
    console.log("A client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

module.exports = server;
