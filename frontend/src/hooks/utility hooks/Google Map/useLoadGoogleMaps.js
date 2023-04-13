import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const useLoadGoogleMaps = () => {
    const libraries = useRef(["places"]).current;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: libraries,
    });

    const [mapIsLoaded, setMapIsLoaded] = useState(null);

    useEffect(() => {
        if (!isLoaded) {
            setMapIsLoaded(false);
        }
        if (isLoaded) {
            setMapIsLoaded(true);
        }
    }, [isLoaded]);

    return mapIsLoaded;
};

export default useLoadGoogleMaps;
