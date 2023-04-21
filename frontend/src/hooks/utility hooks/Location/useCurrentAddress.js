import React, { useEffect, useState } from "react";
import useLoadGoogleMaps from "../Google Map/useLoadGoogleMaps";

const useCurrentAddress = () => {
    const [currentAddress, setCurrentAddress] = useState(null);
    const [error, setError] = useState(null);

    const isMapLoaded = useLoadGoogleMaps();

    useEffect(() => {
        if (!isMapLoaded) {
            setError("Map couldn't be loaded");
            return;
        }

        const geocoder = new window.google.maps.Geocoder();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                geocoder.geocode(
                    { location: { lat: latitude, lng: longitude } },
                    (results, status) => {
                        if (status === "OK") {
                            const address = results[0].formatted_address;
                            setCurrentAddress({ latitude, longitude, address });
                        } else {
                            setError(status);
                        }
                    }
                );
            },
            (error) => setError(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, [isMapLoaded]);

    return { currentAddress, error };
};

export default useCurrentAddress;
