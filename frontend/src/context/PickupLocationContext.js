import { createContext, useReducer } from "react";

export const PickupLocationContext = createContext();

export const pickupLocationReducer = (state, action) => {
    switch (action.type) {
        case "SET_PICKUP":
            return { pickupLocation: action.payload };
        case "UPDATE_PICKUP":
            return { pickupLocation: action.payload };
        default:
            return state;
    }
};

export const PickuoLocationContextProvider = (props) => {
    const [state, dispatch] = useReducer(pickupLocationReducer, {
        pickupLocation: null,
        lat: null,
        lng: null,
    });

    return (
        <PickupLocationContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </PickupLocationContext.Provider>
    );
};
