import { createContext, useReducer } from "react";

export const DriverAuthContext = createContext();

export const driverAuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};

export const DriverAuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(driverAuthReducer, { user: null });

    return (
        <DriverAuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </DriverAuthContext.Provider>
    );
};
