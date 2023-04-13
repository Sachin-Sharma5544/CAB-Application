import React, { useContext } from "react";
import { CustomerAuthContext } from "../context/customerAuthContext";

const useCustomerAuthContext = () => {
    const context = useContext(CustomerAuthContext);
    if (!context) {
        throw Error(
            "useCustomerAuthContext must be used inside CustomerAuthContextProvider"
        );
    }
    return context;
};

export default useCustomerAuthContext;
