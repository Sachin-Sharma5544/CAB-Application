import { createContext, useReducer } from "react";

export const CustomerAuthContext = createContext();

export const custAuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};

export const CustomerAuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(custAuthReducer, { user: null });
    return (
        <CustomerAuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </CustomerAuthContext.Provider>
    );
};
