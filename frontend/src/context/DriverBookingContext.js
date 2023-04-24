import { createContext, useReducer } from "react";

export const DriverBookingContext = createContext();

export const driverBookingReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKING":
            return { bookings: action.payload };
        case "CANCEL_BOOKING":
            return { bookings: action.payload };
        case "START_BOOKING":
            return { bookings: action.payload };
        case "END_BOOKING":
            return { bookings: action.payload };
        default:
            return state;
    }
};

export const DriverBookingContextProvider = (props) => {
    const [state, dispatch] = useReducer(driverBookingReducer, {
        bookings: null,
    });

    return (
        <DriverBookingContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </DriverBookingContext.Provider>
    );
};
