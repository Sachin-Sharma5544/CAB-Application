const sockethandler = (io) => {
    io.on("connection", (socket) => {
        console.log("A user connected", socket.id);

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
};

module.exports = sockethandler;
