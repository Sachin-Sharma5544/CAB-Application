import { VehicleContext } from "../../../context/VehicleContext";
import { useContext } from "react";

const useVehicleContext = () => {
    const context = useContext(VehicleContext);

    if (!context) {
        throw Error(
            "useVehicleContext must me used inside a VehicleContextProvider"
        );
    }

    return context;
};

export default useVehicleContext;
