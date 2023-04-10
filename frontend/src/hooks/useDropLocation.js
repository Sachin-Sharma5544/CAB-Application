import React from "react";
import { useDropContext } from "./useDropContext";

const useDropLocation = () => {
    const { dropLocation, lat, lng } = useDropContext();
    return { dropLocation, dropPosition: { lat: lat, lng: lng } };
};

export default useDropLocation;
