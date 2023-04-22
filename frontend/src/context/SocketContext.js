import { createContext, useReducer } from "react";

export const SocketContext = createContext();

export const socketReducer = (state, action) => {
    switch (action.type) {
        case "CONNECT_SOCKET":
            return {
                socket: action.payload,
            };
        default:
            return state;
    }
};

export const SocketContextProvider = (props) => {
    const [state, dispatch] = useReducer(socketReducer, {
        scoket: null,
    });

    return (
        <SocketContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </SocketContext.Provider>
    );
};
