import React, { useEffect, useState } from "react";
import useSocketContext from "../../context hooks/Socket/useSocketContext";
import io from "socket.io-client";
import useCustomerAuthContext from "../../context hooks/Authentication/useCustomerAuthContext";
import useDriverAuthContext from "../../context hooks/Authentication/useDriverAuthContext";

const useScoket = () => {
    // const [socket, setScoket] = useState(null);
    const { user: custUser } = useCustomerAuthContext();
    const { user: drivUser } = useDriverAuthContext();

    const { dispatch } = useSocketContext();

    useEffect(() => {
        const connectSocket = () => {
            const socketConnect = io("http://localhost:3501", {
                transports: ["websocket"],
            });

            let userType;

            if (custUser) {
                userType = custUser.userType;
            }

            if (drivUser) {
                userType = drivUser.userType;
            }

            dispatch({
                type: "CONNECT_SOCKET",
                payload: { socketConnect, userType },
            });
        };

        connectSocket();
    }, [dispatch, custUser, drivUser]);
};

export default useScoket;
