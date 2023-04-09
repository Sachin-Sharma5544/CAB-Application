import { createContext, useReducer } from "react";

export const DropLocationContext = createContext();

export const dropLocationReducer = (state, action) => {
    switch (action.type) {
        case "SET_DROP":
            return {
                dropLocation: action.payload.value,
                lat: action.payload.lat,
                lng: action.payload.lng,
            };
        case "UPDATE_DROP":
            return {
                dropLocation: action.payload.value,
                lat: action.payload.lat,
                lng: action.payload.lng,
            };
        case "CLEAR_DROP":
            return {
                dropLocation: "",
                lat: "",
                lng: "",
            };
        default:
            return state;
    }
};

export const DropLocationContextProvider = (props) => {
    const [state, dispatch] = useReducer(dropLocationReducer, {
        dropLocation: null,
        lat: null,
        lng: null,
    });
    return (
        <DropLocationContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </DropLocationContext.Provider>
    );
};
