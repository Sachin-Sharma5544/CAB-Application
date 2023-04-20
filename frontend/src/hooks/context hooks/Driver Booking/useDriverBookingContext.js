import { useContext } from "react";
import { DriverBookingContext } from "../../../context/DriverBookingContext";

const useDriverBookingContext = () => {
    const context = useContext(DriverBookingContext);
    if (!context) {
        throw Error(
            "useDriverBookingContext must me used inside DriverBookingContextProvider"
        );
    }
};

export default useDriverBookingContext;
