import { createContext, useReducer, useEffect } from "react";

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
    console.log("Driver Auth state", state);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("RideSmart_User"));

        if (user && user.userType === "driver") {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);

    return (
        <DriverAuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </DriverAuthContext.Provider>
    );
};
