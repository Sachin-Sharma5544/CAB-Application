import React, { useState, useEffect } from "react";

const useCurrentLocation = () => {
    const [currPos, setCurrPos] = useState(null);

    useEffect(() => {
        const success = (pos) => {
            setCurrPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        };
        navigator.geolocation.getCurrentPosition(success);
    }, [setCurrPos]);

    return { currPos };
};

export default useCurrentLocation;
