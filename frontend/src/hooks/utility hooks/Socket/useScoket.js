import React, { useEffect, useState } from "react";
import useSocketContext from "../../context hooks/Socket/useSocketContext";
import io from "socket.io-client";
const useScoket = () => {
    // const [socket, setScoket] = useState(null);
    const { dispatch } = useSocketContext();

    useEffect(() => {
        const connectSocket = () => {
            const socketConnect = io("http://localhost:3501", {
                transports: ["websocket"],
            });

            // setScoket(socketConnect);

            dispatch({ type: "CONNECT_SOCKET", payload: socketConnect });
        };

        connectSocket();
    }, [dispatch]);

    // return { socket };
};

export default useScoket;
