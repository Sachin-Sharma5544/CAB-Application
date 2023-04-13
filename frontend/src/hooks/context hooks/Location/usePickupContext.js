import { PickupLocationContext } from "../../../context/PickupLocationContext";
import { useContext } from "react";

export const usePickupContext = () => {
    const context = useContext(PickupLocationContext);
    if (!context) {
        throw Error(
            "usePickupContext must me used inside a PickupContextProvider"
        );
    }

    return context;
};
