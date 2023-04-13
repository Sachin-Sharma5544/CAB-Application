import React from "react";
import { usePickupContext } from "../../context hooks/Location/usePickupContext";

const usePickupLocation = () => {
    const { pickupLocation, lat, lng } = usePickupContext();

    return { pickupLocation, pickupPosition: { lat: lat, lng: lng } };
};

export default usePickupLocation;
