import { createContext, useReducer } from "react";

export const VehicleContext = createContext();

export const vehicleReducer = (state, action) => {
    switch (action.type) {
        case "SET_VEHICLE":
            return { vehicle: action.payload };
        case "ADD_VEHICLE":
            return { vehicle: [...state, action.payload] };
        case "DELETE_VEHICLE":
            return {
                vehicle: state.vehicle.filter(
                    (veh) => veh._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};

export const VehicleContextProvider = (props) => {
    const [state, dispatch] = useReducer(vehicleReducer, { vehicle: null });

    return (
        <VehicleContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </VehicleContext.Provider>
    );
};
