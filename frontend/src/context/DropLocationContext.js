import { createContext, useReducer } from "react";

export const DropLocationContext = createContext();

export const dropLocationReducer = (state, action) => {
    switch (action.type) {
        case "SET_DROP":
            return { dropLocation: action.payload };
        case "UPDATE_DROP":
            return { dropLocation: action.payload };
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
