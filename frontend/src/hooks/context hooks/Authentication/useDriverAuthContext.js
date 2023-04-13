import React, { useContext } from "react";
import { DriverAuthContext } from "../../../context/DriverAuthContext";

const useDriverAuthContext = () => {
    const context = useContext(DriverAuthContext);

    if (!context) {
        throw Error(
            "useDriverAuthContext must be used inside DriverAuthContextProvider"
        );
    }
    return context;
};

export default useDriverAuthContext;
