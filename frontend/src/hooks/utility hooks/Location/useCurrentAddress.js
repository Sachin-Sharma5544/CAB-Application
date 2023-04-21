import React, { useState, useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";

const useCurrentAddress = (lat, lng) => {
    const { currPos } = useCurrentLocation();
    const [currAddress, setCurrAddress] = useState();

    useEffect(() => {
        if (typeof google === "undefined") {
            return;
        }
        // eslint-disable-next-line no-undef
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode(
            { location: { lat: currPos.lat, lng: currPos.lng } },
            (results, status) => {
                if (status === "OK") {
                    if (results[0]) {
                        setCurrAddress(results[0].formatted_address);
                    } else {
                        setCurrAddress("Address not found");
                    }
                } else {
                    setCurrAddress("Geocoder failed due to: " + status);
                }
            }
        );
    }, []);

    console.log(currAddress);
};

export default useCurrentAddress;
