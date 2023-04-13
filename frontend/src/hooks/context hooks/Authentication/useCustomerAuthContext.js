import React, { useContext } from "react";
import { CustomerAuthContext } from "../../../context/CustomerAuthContext";

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
