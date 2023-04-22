import React, { useContext } from "react";

import { SocketContext } from "../../../context/SocketContext";

const useSocketContext = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw Error(
            "useSocketContext must me used inside a SocketContextProvider"
        );
    }

    return context;
};

export default useSocketContext;
