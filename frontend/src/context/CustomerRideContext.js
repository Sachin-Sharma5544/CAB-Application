import { createContext, useReducer } from "react";

export const CustomerRideContext = createContext();

export const custRideReducer = (state, action) => {
    switch (action.type) {
        case "SET_RIDE":
            return { ride: action.payload };
        default:
            return state;
    }
};

export const CustomerRideContextProvider = (props) => {
    const [state, dispatch] = useReducer(custRideReducer, {
        ride: null,
    });

    return (
        <CustomerRideContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </CustomerRideContext.Provider>
    );
};
