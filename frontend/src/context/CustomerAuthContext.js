import { createContext, useReducer, useEffect } from "react";

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
    console.log("Customer Auth State", state);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("RideSmart_User"));
        if (user && user.userType === "customer") {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);
    return (
        <CustomerAuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </CustomerAuthContext.Provider>
    );
};
