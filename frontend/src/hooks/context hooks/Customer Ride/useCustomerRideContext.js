import { useContext } from "react";
import { CustomerRideContext } from "../../../context/CustomerRideContext";

const useCustomerRideContext = () => {
    const context = useContext(CustomerRideContext);

    if (!context) {
        throw Error(
            "useCustomerRideContext must be used inside CustomerRideContextProvider"
        );
    }
    return context;
};

export default useCustomerRideContext;
