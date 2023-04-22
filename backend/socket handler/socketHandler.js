const sockethandler = (io) => {
    io.on("connection", (socket) => {
        console.log("A user connected", socket.id);

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });

        socket.on("Book_ride", (data) => {
            console.log(data);
            socket.emit("Book_rides", data);
        });

        socket.on("test", (data) => {
            socket.emit("test", data);
        });
    });
};

module.exports = sockethandler;
